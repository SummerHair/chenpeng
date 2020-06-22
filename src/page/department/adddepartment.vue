<template>
    <div class="details">
      <div class="title">新增科室</div>
      <div class="content">
        <el-row>
          <el-col :span="12">
            <el-form ref="form" :model="form" label-width="100px" :rules="rules">
              <el-form-item label="科室名称" prop="name">
                <el-input v-model="form.name" ></el-input>
              </el-form-item>
              <el-form-item label="科室介绍" prop="introduce">
                <el-input type="textarea" v-model="form.introduce" resize="none"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit('form')">确定添加</el-button>
                <el-button @click="goback()">取消</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
  import {adddepartment} from "../../request/api";
  export default {
        name: "adddepartment",
        data(){
            return {
                form: {
                    name:'',
                    introduce:'',
                    display:'',
                    prescription:''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入科室名称', trigger: 'blur' },
                    ],
                    introduce: [
                        { required: true, message: '请输入科室介绍', trigger: 'blur' },
                    ]
                }
            }
        },
        methods: {
            goback() {
                this.$router.go(-1);//返回上一层
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
