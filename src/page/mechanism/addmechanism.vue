<template>
  <div class="details">
    <div class="title">
      <span v-if="choice == 1">新增机构</span>
      <span v-else>添加机构</span>
    </div>
    <div class="content">
      <el-row>
        <el-col :span="12">
          <el-form ref="form" :model="form" label-width="100px" :rules="rules">
            <el-form-item label="机构名称" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" prop="name">
              <el-input v-model="form.tel"></el-input>
            </el-form-item>
            <el-form-item label="登录账号" prop="name">
              <el-input v-model="form.account"></el-input>
            </el-form-item>
            <el-form-item label="登录密码" prop="name">
              <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="name">
              <el-input v-model="form.surepassword"></el-input>
            </el-form-item>
            <el-form-item label="机构介绍" prop="medicalAge">
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
import { addproduct, inquireiproduct, upload } from "../../request/api";
export default {
  name: "addproduct",
  data() {
    return {
      value1: "",
      choice: 1, //新增和编辑区别
      id: "",
      editorOption: {
        // some quill options
      },
      form: {
        name: "",
        galleryList: [],
        texture: "",
        qualityGuaranteePeriod: "",
        content: "",
        applicableParts: "",
        applicableColony: "",
        display: "",
        function: ""
      },
      loading:false,
    };
  },
  created() {

  },
  methods: {

  }
};
</script>

<style scoped lang="less">
  @font-face {
    font-family: 'iconfont';  /* project id 1540623 */
    src: url('//at.alicdn.com/t/font_1540623_vy4n27i8nm.eot');
    src: url('//at.alicdn.com/t/font_1540623_vy4n27i8nm.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1540623_vy4n27i8nm.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1540623_vy4n27i8nm.woff') format('woff'),
    url('//at.alicdn.com/t/font_1540623_vy4n27i8nm.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1540623_vy4n27i8nm.svg#iconfont') format('svg');
  }
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
.imgboxs{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .imgboxlist{
    position: relative;
    img{
      width: 200px;
      height: 200px;
    }
    .iconfont{
      font-family:"iconfont" !important;
      font-size:16px;font-style:normal;
      -webkit-font-smoothing: antialiased;
      -webkit-text-stroke-width: 0.2px;
      -moz-osx-font-smoothing: grayscale;
      position: absolute;
      top: 10px;
      right: 10px;
      color: red;
      line-height: normal;
      cursor: pointer;
    }
  }
}
.details /deep/ .ql-editor {
  height: 260px;
}
</style>
