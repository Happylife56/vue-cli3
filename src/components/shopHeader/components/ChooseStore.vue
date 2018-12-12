// 选择门店
<template>
  <div class="choose-store">
    <span>当前门店：</span>
    <template>
      <el-select
        v-model="chioceShop"
        placeholder="请选择"
        @change="changeStore"
      >
        <el-option
          v-for="item in seleteStores"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        >
        </el-option>
      </el-select>
    </template>
    <!-- 没有可用机器号的时候 -->
    <el-dialog
      title="温馨提示"
      :visible.sync="centerDialogVisible"
      width="580px"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <span
        >该时间段没有可当班的机器号！
        <a :href="backUrl">
          <span class="click-back">请到后台新增机器号</span>
        </a>
        <el-button
          type="primary"
          size="small"
          style="margin-left:20px"
          @click="backLogin"
          >退出账号</el-button
        >
        <div class="mt20">
          <span>或者切换门店：</span>
          <el-select
            v-model="chioceShop"
            placeholder="请选择"
            @change="changeStore"
          >
            <el-option
              v-for="item in seleteStores"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </div>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          style="height: 40px;width: 150px;line-height: 0.5;"
          :disabled="bitChangeMachine"
          @click="centerDialogVisible = false"
          >确认</el-button
        >
        <!-- <el-button style="height: 40px;width: 150px;line-height: 0.5;">取消</el-button> -->
      </span>
    </el-dialog>
    <!-- 选择机器号 -->
    <el-dialog
      title="选择机器号"
      :visible.sync="dialogMachineVisible"
      :show-close="false"
      width="713px"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      class="change-machine"
    >
      <ul>
        <li
          v-for="(item, index) in machineNums"
          :key="index"
          @click="setDefaultMachine(item.id)"
        >
          <el-button>{{ item.no }}</el-button>
        </li>
      </ul>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import { chooseSoreApi, getDefaultShop } from '../api/index';
export default {
  data() {
    return {
      chioceShop: '', //选择的门店
      seleteStores: [], //门店的列表
      machineNums: [], //机器号的列表
      centerDialogVisible: false, //没有机器号可选
      backUrl: '', //后台的链接
      bitChangeMachine: false, //机器号是否可选
      dialogMachineVisible: false //选择机器号
    };
  },
  mounted() {
    //获取门店的信息（下拉菜单）
    this.getStoreList();
  },
  computed: {
    ...mapState('chooseStore', [
      'shopWorkingData', //刷新shopWorking的数据
      'seletedStoreInfo' //选择门店的信息
    ]),
    ...mapState('common', [
      'commonHosts' //公用的host
    ])
  },
  methods: {
    ...mapMutations('chooseStore', [
      'setSeletedStoreInfo' //设置选择门店的信息
    ]),
    ...mapActions({
      getSelectAllShop: 'chooseStore/getSelectAllShop', //获取门店的信息（下拉菜单）
      refreshWorking: 'chooseStore/refreshWorking', //刷新shopWorking
      setDefaultShop: 'chooseStore/setDefaultShop', //设置默认门店
      getDefaultShopSet: 'chooseStore/getDefaultShopSet' //获取默认门店的设置
    }),
    //获取门店的信息（下拉菜单）
    async getStoreList() {
      let result = await this.getSelectAllShop();
      if (result) {
        this.seleteStores = result.content;
        if (result.content.length == 0) {
          //没有添加门店
          this.$message.error('请先新增门店，再进行操作！');
          return;
        }
        //判断是否已经选择门店
        if (this.seletedStoreInfo) {
          this.chioceShop = Number(this.seletedStoreInfo.id);
        } else {
          //如果没有选择门店，默认设置第一个
          this.chioceShop = this.seleteStores[0].id;
          this.setSeletedStoreInfo(this.seleteStores[0]); //设置选择门店的信息
          //刷新shopWorking
          this.refreshWorking();
          //判断是否已经设置默认门店
          getDefaultShop().then(res => {
            if (res.code == 1001) {
              this.getDefaultShopSet(); //获取默认门店设置
            } else {
              //设置默认门店
              this.setDefaultShop(this.chioceShop);
            }
          });
        }
      }
    },
    //切换门店
    changeStore(val) {
      //设置默认门店
      this.setDefaulStore(val);
    },
    //设置默认的门店
    async setDefaulStore(id) {
      let result = await this.setDefaultShop(id);
      if (result) {
        if (result.code == 1000 || result.code == 1001) {
          //刷新shopWorking
          this.refreshWorking();
          this.getDefaultShopSet(); //获取默认门店设置
        }
        if (result.code == 1100) {
          //当前门店没有当班，获取机器号
          this.getMachineList(); //获取机器号列表
        }
        this.setChooseStoreInfo(id); //设置选择门店的信息
      }
    },
    //获取机器号
    getMachineList() {
      chooseSoreApi.getAllMachine({
        fn: res => {
          console.log(res);
          this.machineNums = res;
          //机器号没有设置
          if (this.machineNums.length == 0) {
            //该时间段没有可当班的机器号
            this.getBackUrl(); //获取后台的链接的地址
            this.centerDialogVisible = true;
            this.bitChangeMachine = true; //有可以选择的机器号
            return;
          } else if (this.machineNums.length == 1) {
            this.getBackUrl(); //获取后台的链接的地址
            //设置默认机器号
            let id = this.machineNums[0].id;
            this.setDefaultMachine(id);
          } else {
            //显示选择机器号
            this.dialogMachineVisible = true;
          }
          this.bitChangeMachine = false; //有可以选择的机器号
        }
      });
    },
    //获取后台的链接
    getBackUrl() {
      chooseSoreApi.getWxmpUrl({
        fn: res => {
          this.backUrl = res.url;
        }
      });
    },
    backLogin() {
      //退出账号
      //调用统一的退出的接口
      window.location.href =
        this.commonHosts.loginUrl +
        'jsp/login/out/exit.html?proIDen=vAaG4FcAasDP+Xpc03OLzlN93QqSKIIk';
    },
    //设置默认机器号
    setDefaultMachine(id) {
      chooseSoreApi.setDefaultMachine({
        params: id,
        fn: () => {
          //刷新shopWorking
          this.refreshWorking();
          this.getDefaultShopSet(); //获取默认门店设置
          //关闭选择机器号
          this.dialogMachineVisible = false;
        }
      });
    },
    //设置选择门店的信息
    setChooseStoreInfo(id) {
      this.seleteStores.map(item => {
        if (item.id == id) {
          this.setSeletedStoreInfo(item); //设置选择门店的信息
        }
      });
    }
  }
};
</script>
