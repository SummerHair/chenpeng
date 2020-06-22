<template>
  <div class="feedback">
    <div class="title">
      <div class="title-top">机构列表</div>
      <div class="title-select">
        <el-row style="text-align: right">
          <el-button plain @click="goadd">添加</el-button>
        </el-row>
      </div>
    </div>
    <div class="content">
      <el-row>
        <el-col :span="23" style="float: initial;margin: 0 auto">
          <div class="contents">
            <div class="tables">
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="name" label="机构名称"></el-table-column>
                <el-table-column prop="applicableParts" label="机构介绍"></el-table-column>
                <el-table-column prop="num" label="成员数量"></el-table-column>
                <el-table-column prop="date" label="添加时间"></el-table-column>
                <el-table-column label="是否启用">
                  <template slot-scope="scope">
                    <el-switch
                      v-model="scope.row.display"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      @change="switchchange(scope.row)"
                    ></el-switch>
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="150">
                  <template slot-scope="scope">
                    <el-button  type="text" size="small">权限设置</el-button>
                    <el-button  type="text" size="small">编辑</el-button>
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
      tableData: [{
          name:'asd',
          applicableParts:'asldkjaslk',
          num:10,
          date:'2020-1-1'
      },
          {
              name:'asd',
              applicableParts:'asldkjaslk',
              num:10,
              date:'2020-1-1'
          },
          {
              name:'asd',
              applicableParts:'asldkjaslk',
              num:10,
              date:'2020-1-1'
          }]
    };
  },
  created() {

  },
  methods: {
      goadd(){
          this.$router.push({
              path:'/addmechanism'
          })
      }

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
