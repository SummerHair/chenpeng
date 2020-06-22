<template>
  <div class="feedback">
    <div class="title">
      <div class="title-top">产品列表</div>
      <div class="title-select">
        <el-row>
          <el-col :span="8">
            <span>产品名称</span>
            <el-input v-model="form.name"></el-input>
          </el-col>
          <el-col :span="8">
            <span>上传时间</span>
            <el-date-picker
              v-model="form.changedate"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </el-col>
          <el-button plain @click="search()">查询</el-button>
          <el-button plain @click="adds()">添加产品</el-button>
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
                <el-table-column prop="name" label="产品名称"></el-table-column>
                <el-table-column prop="applicableParts" label="适用部位"></el-table-column>
                <el-table-column prop="function" label="功能"></el-table-column>
                <el-table-column label="是否显示">
                  <template slot-scope="scope">
                    <el-switch
                      v-model="scope.row.display"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      @change="switchchange(scope.row)"
                    ></el-switch>
                  </template>
                </el-table-column>
                <el-table-column prop="createTime" label="上传时间"></el-table-column>
                <el-table-column label="操作" width="150">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click="productClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">删除</el-button>
                  </template>
                </el-table-column>
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
      tableData: []
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
