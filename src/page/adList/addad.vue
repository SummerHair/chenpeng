<template>
  <div class="details">
    <div class="title">
      <span v-if="choice == 1">新增广告</span>
      <span v-else>编辑广告信息</span>
    </div>
    <div class="content">
      <el-row>
        <el-col :span="12">
          <el-form ref="form" :model="form" label-width="100px" :rules="rules">
            <el-form-item label="广告名称" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="起止时间">
              <el-date-picker
                v-model="form.time"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="上线/下线：">
              <el-radio-group v-model="form.display">
                <el-radio :label="true">是</el-radio>
                <el-radio :label="false">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="是否置顶">
              <el-radio-group v-model="form.top">
                <el-radio :label="true">是</el-radio>
                <el-radio :label="false">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="广告图片" prop="img">
              <el-upload
                class="avatar-uploader"
                :action="action"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :on-progress="imging"
                v-loading="loading"
              >
                <img v-if="form.img" :src="form.img" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="广告备注" prop="content">
              <quill-editor v-model="form.content" ref="myQuillEditor"></quill-editor>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit('form')" v-if="choice == 1">确定添加</el-button>
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
import { addadlist, inquiread, upload } from "../../request/api";
export default {
  name: "addproduct",
  data() {
    return {
      choice: 1, //新增和编辑区别
      id: "",
      editorOption: {
        // some quill options
      },
      form: {
        name: "",
        time: [],
        content: "",
        display: "",
        function: "",
        img: "",
        top: ""
      },
      rules: {
        name: [{ required: true, message: "请输入广告名称", trigger: "blur" }]
      },
      imgurl:'',
      loading:false,
      action:upload+'/advertisement',
    };
  },
  created() {
    this.choice = this.$route.query.choice;
    if (this.choice == 0) {
      this.id = this.$route.query.id;
      this.initdata();
    }
  },
  methods: {
    onSubmit(formName) {
      let that = this;
      that.$refs[formName].validate(valid => {
        if (valid) {
          console.log(that.form);
          addadlist({
            choice: that.choice,
            id: that.id,
            name: that.form.name,
            startTime: that.form.time[0],
            content: that.form.content,
            endTime: that.form.time[1],
            img: that.imgurl,
            top: that.form.top,
            display: that.form.display
          }).then(res => {
            console.log(res);
            if (res.code == 200) {
              that.$message({
                message: "添加成功",
                type: "success",
                duration: 1000
              });
              setTimeout(function() {
                that.$router.push({
                  path: "/adlist"
                });
              }, 1000);
            } else {
              that.$message({
                message: "新增失败",
                type: "warning",
                duration: 1000
              });
            }
          });
        } else {
          return false;
        }
      });
    },
    goback() {
      this.$router.go(-1); //返回上一层
    },
    //修改回显
    initdata() {
      let that = this;
      inquiread({
        id: that.id
      }).then(res => {
        console.log(res);
        that.form = res.data;
        Object.assign(that.form, {
          time: [res.data.startTime, res.data.endTime]
        });
      });
    },
    handleAvatarSuccess(res, file) {
          this.form.img = URL.createObjectURL(file.raw);
          this.imgurl = res
        this.loading = false
      },
    beforeAvatarUpload(file) {
          const isLt5M = file.size / 1024 / 1024 < 5;
          if (!isLt5M) {
              this.$message.error('上传头像图片大小不能超过 5MB!');
          }
          return isLt5M;
      },
    imging() {
        this.loading = true
    }
  }
};
</script>

<style scoped lang="less">
.details {
  padding: 30px 30px;
  box-sizing: border-box;
  .title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 50px;
  }
  .content {
    font-size: 14px;
    .el-col-12 {
      margin: 0 auto;
      float: initial;
    }
    p {
      margin-bottom: 10px;
    }
  }
}
.avatar-uploader{
  width: 100%;
  height: 200px;
  overflow: hidden;
  border: 1px dashed #ccc;
  text-align: center;
  line-height: 200px;
  i{
    font-size: 30px;
  }
  img{
    max-width: 100%;
    object-fit: fill;
  }
}
.details /deep/ .ql-editor {
  height: 260px;
}
</style>
