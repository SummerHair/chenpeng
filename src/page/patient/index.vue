<template>
  <div class="feedback">
    <div class="title">
      <div class="title-top">患者管理</div>
      <div class="title-select">
        <span class="ids">患者姓名</span>
        <el-input v-model="form.name"></el-input>
        <el-button plain>查询</el-button>
      </div>
    </div>
    <div class="content">
      <el-row>
        <el-col :span="23" style="float: initial;margin: 0 auto">
          <div class="contents">
            <div class="tables">
              <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                  prop="id"
                  label="患者ID"
                  >
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="患者姓名"
                  >
                </el-table-column>
                <el-table-column
                  prop="tel"
                  label="联系电话">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="最近预约时间">
                </el-table-column>
                <el-table-column
                  prop="department"
                  label="最近预约科室">
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="100">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div class="pages">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="100">
              </el-pagination>
            </div>
          </div>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                form:{
                    name:''
                },
                tableData: [{
                    id: '1',
                    name: '王小虎',
                    tel: '3',
                    date:'反馈使用问题',
                    department:'2019-5-9'
                }, {
                    id: '1',
                    name: '王小虎',
                    tel: '3',
                    date:'反馈使用问题',
                    department:'2019-5-9'
                },{
                    id: '1',
                    name: '王小虎',
                    tel: '3',
                    date:'反馈使用问题',
                    department:'2019-5-9'
                },{
                    id: '1',
                    name: '王小虎',
                    tel: '3',
                    date:'反馈使用问题',
                    department:'2019-5-9'
                },{
                    id: '1',
                    name: '王小虎',
                    tel: '3',
                    date:'反馈使用问题',
                    department:'2019-5-9'
                },{
                    id: '1',
                    name: '王小虎',
                    tel: '3',
                    date:'反馈使用问题',
                    department:'2019-5-9'
                }, {
                    id: '1',
                    name: '王小虎',
                    tel: '3',
                    date:'反馈使用问题',
                    department:'2019-5-9'
                },{
                    id: '1',
                    name: '王小虎',
                    tel: '3',
                    date:'反馈使用问题',
                    department:'2019-5-9'
                },{
                    id: '1',
                    name: '王小虎',
                    tel: '3',
                    date:'反馈使用问题',
                    department:'2019-5-9'
                },{
                    id: '1',
                    name: '王小虎',
                    tel: '3',
                    date:'反馈使用问题',
                    department:'2019-5-9'
                }]
            }
        },
        methods:{
            handleClick(row) {
                console.log(row);
            }
        }
    }
</script>

<style scoped lang="less">
  .feedback{
    padding-bottom: 30px;
    .title{
      border: 1px solid #ccc;
      .title-top{
        width: 100%;
        height: 60px;
        background: rgba(243, 243, 243, 1);
        padding: 0 30px;
        font-size: 14px;
        font-weight: bold;
        border-bottom: 1px solid #ccc;
        line-height: 60px;
      }
      .title-select{
        width: 100%;
        height: 60px;
        padding: 0 30px;
        font-size: 14px;
        font-weight: bold;
        line-height: 60px;
        span{
          margin-right: 30px;
        }
        .el-input{
          width: 217px;
          margin-right: 30px;
        }
      }
    }
    .contents{
      margin-top: 30px;
      box-sizing: border-box;
      .tables{
        margin-bottom: 20px;
      }
      .pages{
        text-align: right;
      }
    }
  }
</style>
