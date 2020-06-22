<template>
  <div class="details">
    <div class="title">
      <span v-if="type == 1">新增医生</span>
      <span v-else>编辑医生信息</span>
    </div>
    <div class="content">
      <el-row>
        <el-col :span="12">
          <el-form ref="form" :model="form" label-width="100px" :rules="rules" >
            <el-form-item label="医生姓名" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="从医年限" prop="medicalAge">
              <el-select v-model="form.medicalAge" placeholder="请选择从医年限">
                <el-option label="一年" value="1"></el-option>
                <el-option label="二年" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="职称" prop="jobRank">
              <el-select v-model="form.jobRank" placeholder="请选择职称">
                <el-option label="主任医师" value="主任医师"></el-option>
                <el-option label="副主任医师" value="副主任医师"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所属科室" prop="departmentId">
              <el-select v-model="form.departmentId" placeholder="请选择所属科室">
                <el-option label="骨外科" value="1"></el-option>
                <el-option label="骨内科" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="挂号类别" prop="registerCategory">
              <el-select v-model="form.registerCategory" placeholder="请选择挂号类别">
                <el-option label="普通" value="0"></el-option>
                <el-option label="专家" value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="科室介绍" prop="introduce">
              <el-input type="textarea" v-model="form.introduce" resize="none"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit('form')" v-if="type == 1">确定添加</el-button>
              <el-button type="primary" @click="onSubmit('form')" v-else>修改</el-button>
              <el-button @click="goback()">取消</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    import {adddoctor,doctorsdetails} from "../../request/api";
    export default {
        name: "adddoctor",
        data(){
            return {
                type:1,
                form: {
                    name:'',
                    medicalAge:'',
                    jobRank:'',
                    departmentId:'',
                    registerCategory:'',
                    introduce:''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入医生名称', trigger: 'blur' },
                    ],
                    medicalAge: [
                        { required: true, message: '请选择从医年限', trigger: 'change' },
                    ],
                    jobRank: [
                        { required: true, message: '请选择职称', trigger: 'change' },
                    ],
                    departmentId: [
                        { required: true, message: '请选择所属科室', trigger: 'change' },
                    ],
                    registerCategory: [
                        { required: true, message: '请选择挂号类别', trigger: 'change' },
                    ]
                },
                id:''
            }
        },
        created() {
            this.type = this.$route.query.type
            if (this.type == 2){
                this.id = this.$route.query.id
                this.initdata()
            }
        },
        methods: {
            onSubmit(formName) {
                let that = this
                that.$refs[formName].validate((valid) => {
                    if (valid) {
                        adddoctor({
                            choice:parseInt(that.type),
                            name:that.form.name,
                            medicalAge:parseInt(that.form.medicalAge),
                            jobRank:that.form.jobRank,
                            departmentId:parseInt(that.form.departmentId),
                            registerCategory:parseInt(that.form.registerCategory),
                            introduce:that.form.introduce,
                        }).then(res => {
                            console.log(res)
                            if (res.code == 200){
                                that.$message({
                                    message:'添加成功',
                                    type:"success",
                                    duration:1000
                                })
                                setTimeout(function () {
                                    that.$router.push({
                                        path:'/doctor'
                                    })
                                },1000)
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
            goback() {
                this.$router.go(-1);//返回上一层
            },
            //修改回显
            initdata(){
                let that = this
                doctorsdetails({
                    id:that.id
                }).then(res => {
                    console.log(res)
                    that.form = res.data
                })
            }
        }
    }
</script>

<style scoped lang="less">
  .details{
    padding: 30px 30px;
    box-sizing: border-box;
    .title{
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 50px;
    }
    .content{
      font-size: 14px;
      .el-col-12{
        margin: 0 auto;
        float: initial;
      }
      p{
        margin-bottom: 10px;
      }
    }
  }
</style>
