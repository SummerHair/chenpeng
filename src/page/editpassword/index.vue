<template>
    <div class="editpassword">
      <div class="title">
        <div>修改密码</div>
        <div><span>*</span><span>为必填项</span></div>
      </div>
      <div class="content">
        <el-row>
          <el-col :span="24">
            <el-form ref="form" :model="form" label-width="100px" :rules="rules">
              <el-form-item label="原登录" prop="password">
                <el-input v-model="form.password"></el-input>
              </el-form-item>
              <el-form-item label="新密码" prop="newpassword">
                <el-input v-model="form.newpassword"></el-input>
              </el-form-item>
              <el-form-item label="确认新密码" prop="surenewpassword">
                <el-input v-model="form.surenewpassword"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
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
                form: {
                    password: '',
                    newpassword:'',
                    surenewpassword:''
                },
                rules:{
                    password:[
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                    ],
                    newpassword:[
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 8, message: '请输入正确配置密码', trigger: 'blur' }
                    ],
                    surenewpassword:[
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 8, message: '请输入正确配置密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            onSubmit() {
                console.log('submit!');
            },
        }
    }
</script>

<style scoped lang="less">
  .editpassword{
    .title{
      width: 100%;
      height: 60px;
      background: rgba(243, 243, 243, 1);
      line-height: 60px;
      font-size: 14px;
      font-weight: bold;
      padding: 0 30px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span{
        font-weight: normal;
        &:first-child{
          color: red;
        }
      }
    }
    .content{
      width: 400px;
      margin: 0 auto;
      padding-top: 100px;
    }
  }
</style>
