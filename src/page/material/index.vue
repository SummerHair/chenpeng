<template>
<div class="material">
  <div class="title">修改用户信息</div>
  <div class="content">
    <el-row>
      <el-col :span="24">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="form.tel"></el-input>
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
        data() {
            return {
                imageUrl: '',
                form: {
                    name: '',
                    email:'',
                    tel:''
                }
            }
        },
        methods: {
            goBack() {
                console.log('go back');
            },
            onSubmit() {
                console.log('submit!');
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }
</script>

<style scoped lang="less">
.material{
  .content{
    width: 400px;
    margin: 0 auto;
    padding-top: 30px;
    .avatar-uploader{
      width: 120px;
      height: 120px;
      border: 1px dashed #999999;
      margin: 0 auto;
      margin-bottom: 22px;
      text-align: center;
      line-height: 120px;
    }
  }
}
.title{
  width: 100%;
  height: 60px;
  background: rgba(243, 243, 243, 1);
  line-height: 60px;
  font-size: 14px;
  font-weight: bold;
  padding-left: 30px;
  box-sizing: border-box;
}
</style>
