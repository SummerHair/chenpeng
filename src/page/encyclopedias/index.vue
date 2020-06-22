<template>
    <div class="feedback">
      <div class="title">
        <div class="title-left">健康百科</div>
        <div class="title-right" @click="adds()">新增分类</div>
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
                    label="分类ID"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="分类名称"
                  >
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
      <div class="models">
        <el-dialog title="新增分类" :visible.sync="dialogFormVisible">
          <el-form ref="form" :model="form" label-width="100px" :rules="rules">
            <el-form-item label="科室名称" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="是否显示" prop="display">
              <el-radio-group v-model="form.display">
                <el-radio label="true">是</el-radio>
                <el-radio label="false">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit('form')">确定添加</el-button>
              <el-button @click="dialogFormVisible = false">取消</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </div>
    </div>
</template>

<script>
  import {encyclopedialist,addencyclopedialist} from "../../request/api";
  export default {
        name: "index",
        data(){
            return {
                tableData: [],
                current:1,
                size:10,
                total:0,
                dialogFormVisible: false,
                form: {
                    name: '',
                    display:'',
                },
                formLabelWidth: '120px',
                rules:{
                    name: [
                        { required: true, message: '请输入科室名称', trigger: 'blur' },
                    ],
                    display: [
                        { required: true, message: '请选择是否显示', trigger: 'change' }
                    ],
                }
            }
        },
        created(){
            this.initdata(this.current)
        },
        methods:{
            handleClick(row) {
                console.log(row);
            },
            //初始化
            initdata(current){
                let that = this
                encyclopedialist({
                    current:current,
                    size:10
                }).then(res => {
                    console.log(res)
                    that.tableData = res.data.records
                    that.total = res.data.total
                    that.current = res.data.current + 1
                })
            },
            //页数
            currentchange(val) {
                this.initdata(val)
            },
            //新增
            adds(){
                this.dialogFormVisible = true
            },
            //新增保存
            onSubmit(formName) {
                let that = this
                that.$refs[formName].validate((valid) => {
                    if (valid) {
                        addencyclopedialist({
                            choice:1,
                            name:that.form.name,
                            display:that.form.display,
                        }).then(res => {
                            console.log(res)
                            if (res.code == 200){
                                that.$message({
                                    message:'添加成功',
                                    type:"success",
                                    duration:1000
                                })
                                that.dialogFormVisible = false
                                that.initdata(1)
                            }else{
                                that.$message({
                                    message:"新增失败",
                                    type:"warning",
                                    duration:1000
                                })
                            }
                        })
                    } else {
                        return false;
                    }
                })
            },
            //编辑
            //编辑
            switchchange(value)
            {
                console.log(value)
                let that = this
                addencyclopedialist({
                    id:value.id,
                    choice:0,
                    name:value.name,
                    display:value.display,
                }).then(res => {
                    console.log(res)
                    if (res.code == 200){
                        that.$message({
                            message:res.message,
                            type:"success",
                            duration:1000
                        })
                    }else{
                        that.$message({
                            message:res.message,
                            type:"warning",
                            duration:1000
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
.feedback{
  padding-bottom: 30px;
  .title{
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background: rgba(243, 243, 243, 1);
    padding: 0 30px;
    box-sizing: border-box;
    .title-left{
      font-size: 14px;
      font-weight: bold;
      line-height: 60px;
    }
    .title-right{
      width: 100px;
      text-align: center;
      height: 40px;
      line-height: 40px;
      border: 1px solid #ccc;
      font-size: 14px;
      background: #fff;
      cursor: pointer;
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
