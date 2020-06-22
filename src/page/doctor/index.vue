<template>
  <div class="feedback">
    <div class="title">
      <div class="title-top">医生管理</div>
      <div class="title-select">
        <span>所属科室</span>
        <el-select v-model="department" placeholder="请选择" clearable>
          <el-option
            v-for="item in departments"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
        <span>职称</span>
        <el-select v-model="title" placeholder="请选择" clearable>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.id">
          </el-option>
        </el-select>
        <span>从医年限</span>
        <el-select v-model="age" placeholder="请选择" clearable>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.id">
          </el-option>
        </el-select>
        <div>
          <span class="ids">医生姓名</span>
          <el-input v-model="form.name"></el-input>
          <el-button plain @click="search()">查询</el-button>
          <el-button plain @click="adds()">新增医生</el-button>
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
                  label="医生姓名"
                  >
                </el-table-column>
                <el-table-column
                  prop="departmentName"
                  label="所属科室">
                </el-table-column>
                <el-table-column
                  prop="jobRank"
                  label="职称">
                </el-table-column>
                <el-table-column
                  prop="medicalAge"
                  label="从医年限">
                </el-table-column>
                <el-table-column
                  prop="registerCategory"
                  label="门诊号">
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
  import {doctors,departmentall} from "../../request/api";
  export default {
        name: "index",
        data(){
            return {
                form:{
                    name:''
                },
                total:0,
                current:1,
                department:'',//科室
                departments:[],
                title:'',//职称
                age:'',//年限
                options: [{
                    value: '选项1',
                    label: '黄金糕',
                    id:1
                }, {
                    value: '选项2',
                    label: '双皮奶',
                    id:1
                }, {
                    value: '选项3',
                    label: '蚵仔煎',
                    id:1
                }, {
                    value: '选项4',
                    label: '龙须面',
                    id:1
                }, {
                    value: '选项5',
                    label: '北京烤鸭',
                    id:1
                }],
                tableData: []
            }
        },
        created(){
            this.initdata(this.current)
            this.getdepartment()
        },
        methods:{
            //获取科室
            getdepartment() {
                let that = this
                departmentall().then(res => {
                    that.departments = res.data
                })
            },
            //查看医生详情
            handleClick(row) {
                this.$router.push({
                    path:'/doctordetails',
                    query:{
                        id:row.id
                    }
                })
            },
            //新增医生
            adds() {
                this.$router.push({
                    path:'/adddoctor',
                    query:{
                        type:1
                    }
                })
            },
            //医生列表初始化
            initdata(current) {
                let that = this
                doctors({
                    name:that.form.name,
                    departmentId:that.department,
                    jobRank:that.title,
                    medicalAge:that.age,
                    current:current,
                    size:10,
                }).then(res => {
                    console.log(res)
                    that.tableData = res.data.records
                    that.total = res.data.total
                    that.current = res.data.current + 1
                })
            },
            //上一页下一页
            currentchange(val){
                console.log(val)
                this.initdata(val)
            },
            //查询
            search(){
                this.initdata(1)
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
