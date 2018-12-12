// 商品的表格
<template>
  <el-table :data="tableDatas" ref="table" height="100%">
    <el-table-column prop="date" label="商品名称" show-overflow-tooltip>
    </el-table-column>
    <el-table-column prop="name" label="规格" show-overflow-tooltip>
    </el-table-column>
    <el-table-column prop="address" label="优惠活动" show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="price"
      label="零售价（优惠价）"
      show-overflow-tooltip
      :render-header="renderHeader"
      min-width="120"
    >
    </el-table-column>
    <el-table-column prop="address" label="数量" show-overflow-tooltip>
    </el-table-column>
    <el-table-column prop="address" label="小计" show-overflow-tooltip>
    </el-table-column>
    <el-table-column prop="address" label="导购员" show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="delete"
      label="删除"
      :render-header="renderHeader"
      width="120"
    >
      <template slot-scope="scope">
        <el-button @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
    <div slot="empty">
      <img src="../../assets/image/empty.png" alt="" />
      <div class="table-empty mt20">
        <span class="mb20 color-33">暂无商品~</span>
        <span class="font-16">请点击右边的商品列表或扫描商品条形码</span>
      </div>
    </div>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      tableDatas: []
    };
  },
  watch: {
    tableData(val) {
      if (val.length) {
        this.$nextTick(() => {
          let container = this.$el.querySelector('.el-table__body-wrapper');
          container.scrollTop = container.scrollHeight;
        });
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.setTableBottom();
    }, 100);
  },
  methods: {
    //表格出现滚动条滚动到底部
    setTableBottom() {
      let container = this.$el.querySelector('.el-table__body-wrapper');
      container.scrollTop = container.scrollHeight;
    },
    //修改表格的头信息
    renderHeader(h, { column }) {
      // 重新渲染表头
      if (column.property == 'price') {
        return (
          <span>
            {column.label}
            <el-tooltip class="item" effect="dark" placement="top">
              <div slot="content"> 点击价格可编辑修改 </div>
              <i class="el-icon-warning" style="color:#d2d2d2;font-size:20px" />
            </el-tooltip>
          </span>
        );
      }
      if (column.property == 'delete') {
        return (
          <span>
            <i class="el-icon-delete" style="font-size:24px" />
          </span>
        );
      }
    },
    //删除
    handleDelete(row) {
      let index = this.tableData.indexOf(row);
      this.tableData.splice(index, 1);
    }
  }
};
</script>
