<template>
  <div class="feedback">
    <div class="title">
      <div class="title-top">数据列表</div>
      <div class="title-select">
        <div>
          <el-button plain @click="add()">添加</el-button>
        </div>
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
                  prop="name"
                  label="部门名称"
                >
                </el-table-column>
                <el-table-column
                  prop="introduce"
                  label="职能描述">
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="成员数量">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="添加时间">
                </el-table-column>
                <el-table-column
                  label="科室启用状态">
                  <template slot-scope="scope">
                    <el-switch
                      v-model="scope.row.display"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      @change="switchchange(scope.row)"
                    >
                    </el-switch>
                  </template>
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="100">
                  <template slot-scope="scope">
                    <el-button type="text" size="small">权限设置</el-button>
                    <el-button type="text" size="small">编辑</el-button>
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
              >
              </el-pagination>
            </div>
          </div>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
  import {initdepartment,adddepartment} from "../../request/api";
  export default {
        name: "index",
        data(){
            return {
                name:'',
                tableData: [{
                    name:'asdkj',
                    introduce:'啊实打实大',
                    num:'12',
                    date:'2010-1-1',
                }],
                current:1,
                size:10,
                total:0
            }
        },
        created(){
        },
        methods:{
            //新增科室
            add() {
                this.$router.push({
                    path:'/adddepartment'
                })
            },
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
        font-size: 14px;
        font-weight: bold;
        line-height: 60px;
        span{
          margin: 0 30px;
          &.ids{
            margin-left: 30px;
          }
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
