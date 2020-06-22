<template>
  <div class="sign">
    <div class="model">
      <div class="content">
        <p class="title_zh">医院后台管理系统</p>
        <p class="title_en">Hospital Background Management </p>
        <div class="form">
          <el-input v-model="account" placeholder="请输入用户名称"></el-input>
          <el-input v-model="password" placeholder="请输入登录密码" type="password"></el-input>
          <el-button round @click="sign">登录</el-button>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>Copyright © 中医健康管理All Rights Reserved.</p>
      <p>Email : postmaster@jjiankangguanli.com  </p>
    </div>
  </div>
</template>

<script>
  export default {
        name: "index",
        data() {
            return {
                account: '',
                password:''
            }
        },
        methods:{
            sign(){
                let that = this
                if(that.account == ""){
                    that.$message({
                        message:'请填写账号',
                        type:'warning',
                        duration:1000
                    })
                }else if(that.password == ""){
                    that.$message({
                        message:'请填写密码',
                        type:'warning',
                        duration:1000
                    })
                }else{
                    that.$router.push({
                        path:'/layout',
                    })
                }
            }
        }
    }
</script>

<style scoped lang="less">
.sign{
  width: 100%;
  height: 100vh;
  background: url("../../assets/bj.jpg") no-repeat;
  background-size: cover;
  position: relative;
  .model{
    width: 100%;
    padding: 30px 0;
    box-sizing: border-box;
    background: rgba(0,0,0,.5);
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    .content{
      .title_zh{
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: center;
        color: #fff;
      }
      .title_en{
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: center;
        color: #fff;
      }
      .form{
        text-align: center;
        .el-input{
          width: 300px;
          input{
            margin-right: 30px;
          }
        }
      }
    }
  }
  .footer{
    width: 100%;
    position: fixed;
    bottom: 10px;
    left: 0;
    text-align: center;
    p{
      font-size: 12px;
      color: #fff;
      margin-bottom: 10px;
      &:last-child{
        margin-bottom: 0;
      }
    }
  }
}
</style>
