// 前台收银
<template>
  <div class="collect">
    <!-- 功能按钮和商品搜索 -->
    <div class="faction-search">
      <el-button class="border-btn">挂单</el-button>
      <el-button class="border-btn">取单</el-button>
      <el-button class="border-btn">会员</el-button>
      <el-input
        v-model="searchGoods"
        placeholder="请输入商品条码或名字"
        class="ml10 mr10 height-input"
      ></el-input>
      <el-button class="border-btn">配送信息</el-button>
      <el-button class="border-btn">商品列表</el-button>
      <el-button class="border-btn padding-0">组合商品/赠送</el-button>
    </div>
    <!-- 商品的列表 -->
    <div class="table-div">
      <goodsTable></goodsTable>
      <!-- 备注信息 -->
      <div class="remarks-info" @click="dialogRemarkVisible = true">
        <div class="remarks-content">
          <i class="el-icon-edit mr10"></i>
          <span class="remark-text">备注信息：</span>
          <span class="text-overflow" v-text="remarks"></span>
        </div>
        <el-button v-if="remarks" @click.stop="remarks = ''">删除</el-button>
      </div>
    </div>
    <!-- 优惠详情 -->
    <ul class="discount-detail">
      <li><span class="dicount-text">会员优惠：</span><span>￥0</span></li>
      <li><span class="dicount-text">折扣优惠：</span><span>￥0</span></li>
      <li>
        <span class="dicount-text">合计：</span><span>0件</span
        ><span class="c-red ml20">￥0</span>
      </li>
    </ul>
    <!-- 其他操作，结算 -->
    <ul class="collect-handle">
      <li class="last-order-info">
        <ul>
          <li class="weight-600">上一笔订单</li>
          <li><span>订单号：</span><span></span></li>
          <li><span>应收金额：</span><span></span></li>
          <li><span>实收金额：</span><span></span></li>
          <li><span>找零金额：</span><span></span></li>
        </ul>
      </li>
      <li class="no-code-goods ml10 mr10">
        <el-input
          v-model="noCodeprice"
          class="height-input border-bottom-input"
          placeholder="输入无码收银的价格"
        ></el-input>
      </li>
      <li class="settlement-money">
        <div class="money-handle">
          <span class="money-handle mr20 mt20 mb20"
            >应收总额：<span class="c-red">￥360.00</span></span
          >
          <div>
            <el-button type="primary">整单改价</el-button>
            <el-button type="primary">分次付款</el-button>
          </div>
        </div>
        <el-button type="primary" class="settle-btn">结算</el-button>
      </li>
    </ul>

    <!-- 备注信息 -->
    <el-dialog
      title="订单备注"
      :visible.sync="dialogRemarkVisible"
      width="580px"
    >
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="remarksText"
        :rows="9"
        resize="none"
      >
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogRemarkVisible = false" class="wieght195-btn"
          >取 消</el-button
        >
        <el-button type="primary" @click="saveRemarkInfo" class="wieght195-btn"
          >保存</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import goodsTable from './collect/GoodsTable';
export default {
  name: 'home',
  data() {
    return {
      searchGoods: '',
      remarks: '', //备注信息
      remarksText: '', //备注
      dialogRemarkVisible: false, //备注信息
      noCodeprice: '' //无码商品的价格
    };
  },
  computed: {},
  components: { goodsTable },
  mounted() {
    console.log(this.$route.meta.title);
  },
  methods: {
    ...mapMutations({}),
    //保存配送信息
    saveRemarkInfo() {
      this.dialogRemarkVisible = false;
      this.remarks = this.remarksText;
    }
  }
};
</script>
<style lang="scss" scoped>
@import '@/styles/collect.scss';
</style>
