<template>
  <div class="details">
    <div class="title">产品详情</div>
    <div class="content">
      <el-row>
        <el-col :span="12">
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="产品名称" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="产品图片" prop="coverImg">
              <el-input v-model="form.coverImg"></el-input>
            </el-form-item>
            <el-form-item label="产品质地" prop="texture">
              <el-input v-model="form.texture"></el-input>
            </el-form-item>
            <el-form-item label="保质期" prop="qualityGuaranteePeriod">
              <el-input v-model="form.qualityGuaranteePeriod"></el-input>
            </el-form-item>
            <el-form-item label="适用部位" prop="applicableParts">
              <el-input v-model="form.applicableParts"></el-input>
            </el-form-item>
            <el-form-item label="适用群体" prop="applicableColony">
              <el-input v-model="form.applicableColony"></el-input>
            </el-form-item>
            <el-form-item label="产品功能" prop="function">
              <el-input v-model="form.function"></el-input>
            </el-form-item>
            <el-form-item label="文章内容" prop="content">
              <quill-editor v-model="form.content" ref="myQuillEditor"></quill-editor>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { addproduct, inquireiproduct } from "../../request/api";
export default {
  name: "addproduct",
  data() {
    return {
      id: "",
      form: {
        name: "",
        coverImg: "",
        texture: "",
        qualityGuaranteePeriod: "",
        content: "",
        applicableParts: "",
        applicableColony: "",
        display: "",
        function: ""
      }
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.initdata();
  },
  methods: {
    initdata() {
      let that = this;
      inquireiproduct({
        id: that.id
      }).then(res => {
        console.log(res);
        that.form = res.data;
      });
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
      .el-input.is-disabled .el-input__inner {
        color: none;
      }
      .main {
        width: 834px;
        height: 400px;
        border: 1px solid rgba(228, 228, 228, 1);
        padding: 10px;
        box-sizing: border-box;
      }
    }
    p {
      margin-bottom: 10px;
    }
  }
}
.details /deep/ .ql-editor {
  height: 260px;
}
</style>
