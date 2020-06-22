<template>
  <div class="details">
    <div class="title">
      <span v-if="choice == 1">新增产品</span>
      <span v-else>编辑产品信息</span>
    </div>
    <div class="content">
      <el-row>
        <el-col :span="12">
          <el-form ref="form" :model="form" label-width="100px" :rules="rules">
            <el-form-item label="产品名称" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="产品图片">
              <div class="imgboxs">
                <div class="imgboxlist" v-for="(item,index) in form.galleryList" >
                  <img  :src="item" class="avatar">
                  <i class="iconfont" @click="deleteimg(index)">&#xe612;</i>
                </div>
              </div>
              <el-upload
                class="avatar-uploader"
                :action="action"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :on-progress="imging"
                v-loading="loading"
                multiple
                :limit="3"
                :on-exceed="exceeds"
              >
                <i class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="产品质地" prop="texture">
              <el-input v-model="form.texture"></el-input>
            </el-form-item>
            <el-form-item label="保质期" prop="qualityGuaranteePeriod">
              <el-select v-model="form.qualityGuaranteePeriod" placeholder="保质期">
                <el-option
                  v-for="item in optionsdate"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="适用部位" prop="suitPlace">
              <el-select v-model="form.applicableParts" placeholder="选择部位">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="适用群体" prop="suitPeople">
              <el-select v-model="form.applicableColony" placeholder="选择群体">
                <el-option
                  v-for="item in optionssuit"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="产品功能" prop="function">
              <el-input v-model="form.function"></el-input>
            </el-form-item>
            <el-form-item label="是否显示" prop="display">
              <el-radio-group v-model="form.display">
                <el-radio :label="true">是</el-radio>
                <el-radio :label="false">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="文章内容" prop="medicalAge">
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
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      optionsdate: [
        {
          value: "选项1",
          label: "一月"
        },
        {
          value: "选项2",
          label: "二月"
        },
        {
          value: "选项3",
          label: "三月"
        },
        {
          value: "选项4",
          label: "四月"
        },
        {
          value: "选项5",
          label: "五月"
        },
        {
          value: "选项6",
          label: "六月"
        },
        {
          value: "选项7",
          label: "七月"
        },
        {
          value: "选项8",
          label: "八月"
        },
        {
          value: "选项9",
          label: "九月"
        },
        {
          value: "选项10",
          label: "十月"
        },
        {
          value: "选项11",
          label: "十一月"
        },
        {
          value: "选项12",
          label: "十二月"
        }
      ],
      optionssuit: [
        {
          value: "选项1",
          label: "一月"
        },
        {
          value: "选项2",
          label: "二月"
        },
        {
          value: "选项3",
          label: "三月"
        },
        {
          value: "选项4",
          label: "四月"
        },
        {
          value: "选项5",
          label: "五月"
        },
        {
          value: "选项6",
          label: "六月"
        },
        {
          value: "选项7",
          label: "七月"
        },
        {
          value: "选项8",
          label: "八月"
        },
        {
          value: "选项9",
          label: "九月"
        },
        {
          value: "选项10",
          label: "十月"
        },
        {
          value: "选项11",
          label: "十一月"
        },
        {
          value: "选项12",
          label: "十二月"
        }
      ],
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
      rules: {
        name: [{ required: true, message: "请输入产品名称", trigger: "blur" }],
        texture: [
          { required: true, message: "请输入产品质地", trigger: "blur" }
        ],
        function: [
          { required: true, message: "请输入产品功能", trigger: "blur" }
        ]
      },
      action:upload+'/article',
      loading:false,
      deletearr:[],
      addres:[]
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
          addproduct({
            choice: that.choice,
            id: that.id,
            galleryList: that.addres,
            name: that.form.name,
            texture: that.form.texture,
            content: that.form.content,
            display: that.form.display,
            qualityGuaranteePeriod: that.form.qualityGuaranteePeriod,
            applicableParts: that.form.applicableParts,
            applicableColony: that.form.applicableColony,
            function: that.form.function
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
                  path: "/productList"
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
      inquireiproduct({
        id: that.id
      }).then(res => {
        console.log(res);
        that.form = res.data;
      });
    },
      //上传成功
    handleAvatarSuccess(res, file) {
          this.loading = false
          this.form.galleryList.push(URL.createObjectURL(file.raw))
          this.addres.push(res)
          console.log(this.form)
      },
      //上传之前
    beforeAvatarUpload(file) {
          const isLt5M = file.size / 1024 / 1024 < 5;
          if (!isLt5M) {
              this.$message.error('上传头像图片大小不能超过 5MB!');
          }
          return isLt5M;
      },
      //上传中
    imging() {
        this.loading = true
    },
      //上传超过限制
    exceeds(){
        this.$message.error('最多上传三张');
    },
     //删除图片
      deleteimg(index){
          this.deletearr.push(this.addres[index])
          this.form.galleryList.splice(index,1)
          this.addres.splice(index,1)
          console.log(this.form.galleryList)
          console.log(this.deletearr)
      }
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
