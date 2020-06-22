<template>
  <div class="feedback">
    <div class="title">
      <div class="title-top">操作日志</div>
      <div class="title-select">
        <el-row>
          <el-col :span="8">
            <span>操作人员</span>
            <el-input v-model="form.name"></el-input>
          </el-col>
          <el-col :span="8">
            <span>操作日期</span>
            <el-date-picker
              v-model="form.changedate"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
          <el-button plain>查询</el-button>
        </el-row>
      </div>
    </div>
    <div class="content">
      <el-row>
        <el-col :span="23" style="float: initial;margin: 0 auto">
          <div class="contents">
            <div class="tables">
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="id" label="编号"></el-table-column>
                <el-table-column prop="name" label="操作者"></el-table-column>
                <el-table-column prop="date" label="操作日期"></el-table-column>
                <el-table-column prop="ip" label="IP地址"></el-table-column>
                <el-table-column prop="record" label="操作记录"></el-table-column>
              </el-table>
            </div>
            <div class="pages">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                @current-change="currentchange"
              ></el-pagination>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "productList",
  data() {
    return {
      id: "",
      form: {
        name: "",
        changedate: "" //时间
      },
      total: 0,
      current: 1,
        tableData: [{
            id:1,
            name: '20170810165225.bak',
            date: '2017-08-05 15:47:44',
            ip: '15902208',
            record:'查看处方数据',
        },{
            id:1,
            name: '20170810165225.bak',
            date: '2017-08-05 15:47:44',
            ip: '15902208',
            record:'查看处方数据',
        },{
            id:1,
            name: '20170810165225.bak',
            date: '2017-08-05 15:47:44',
            ip: '15902208',
            record:'查看处方数据',
        },{
            id:1,
            name: '20170810165225.bak',
            date: '2017-08-05 15:47:44',
            ip: '15902208',
            record:'查看处方数据',
        },{
            id:1,
            name: '20170810165225.bak',
            date: '2017-08-05 15:47:44',
            ip: '15902208',
            record:'查看处方数据',
        } ]
    };
  },
  created() {

  },
  methods: {


  }
};
</script>

<style scoped lang="less">
.feedback {
  padding-bottom: 30px;
  .title {
    border: 1px solid #ccc;
    .title-top {
      width: 100%;
      height: 60px;
      background: rgba(243, 243, 243, 1);
      padding: 0 30px;
      font-size: 14px;
      font-weight: bold;
      border-bottom: 1px solid #ccc;
      line-height: 60px;
    }
    .title-select {
      width: 100%;
      font-size: 14px;
      font-weight: bold;
      line-height: 60px;
      span {
        margin: 0 30px;
        &.ids {
          margin-left: 30px;
        }
      }
      .el-input {
        width: 217px;
        margin-right: 30px;
      }
      .el-date-editor--daterange {
        width: 250px;
      }
    }
  }
  .contents {
    margin-top: 30px;
    box-sizing: border-box;
    .tables {
      margin-bottom: 20px;
    }
    .pages {
      text-align: right;
    }
  }
}
</style>
