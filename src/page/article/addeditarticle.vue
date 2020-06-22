<template>
  <div class="details">
    <div class="title">
      <span v-if="choice == 1">新增文章</span>
      <span v-else>编辑文章信息</span>
    </div>
    <div class="content">
      <el-row>
        <el-col :span="12">
          <el-form ref="form" :model="form" label-width="100px" :rules="rules" >
            <el-form-item label="文章标题" prop="title">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="标题图片" prop="coverImg">
              <el-upload
                class="avatar-uploader"
                :action="action"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :on-progress="imging"
                v-loading="loading"
              >
                <img v-if="form.coverImg" :src="form.coverImg" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="文章作者" prop="authorName">
              <el-input v-model="form.authorName"></el-input>
            </el-form-item>
            <el-form-item label="文章分类" prop="encyclopediaName">
              <el-select v-model="form.encyclopediaName" placeholder="请选择文章分类">
                <el-option
                  v-for="item in encyclopedialistall"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="是否显示" prop="display">
              <el-radio-group v-model="form.display">
                <el-radio :label="true">是</el-radio>
                <el-radio :label="false">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="是否推荐" prop="recommend">
              <el-radio-group v-model="form.recommend">
                <el-radio :label="1">是</el-radio>
                <el-radio :label="0">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="文章内容" prop="medicalAge">
              <quill-editor v-model="form.content"
                            ref="myQuillEditor"
                            >
              </quill-editor>
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
    import {addeiitarticle,encyclopedialistall,articleselectone,upload} from "../../request/api";
    export default {
        name: "addeditarticle",
        data(){
            return {
                choice:1,//新增和编辑区别
                editorOption: {
                    // some quill options
                },
                form: {
                    title:'',
                    coverImg:'',
                    authorName:'',
                    encyclopediaName:'',
                    content: '',
                    display:'',
                    recommend:''
                },
                encyclopedialistall:[],//文章分类
                rules: {
                    title: [
                        { required: true, message: '请输入文章标题', trigger: 'blur' },
                    ],
                    authorName: [
                        { required: true, message: '请输入文章作者', trigger: 'change' },
                    ],
                    encyclopediaName: [
                        { required: true, message: '请选择文章分类', trigger: 'change' },
                    ],
                    display: [
                        { required: true, message: '请选择是否显示', trigger: 'change' }
                    ],
                    recommend: [
                        { required: true, message: '请选择是否推荐', trigger: 'change' }
                    ],
                },
                id:'',
                action:upload+'/article',
                imgurl:'',//提交时调用
                loading:false
            }
        },
        created() {
            console.log(upload)
            this.choice = this.$route.query.choice
            if (this.choice == 0){
                this.id = this.$route.query.id
                this.initdata()
            }
            this.getdepartment()
        },
        methods: {
            onSubmit(formName) {
                let that = this
                that.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log(that.form)
                        addeiitarticle({
                            choice:that.choice,
                            id:that.id,
                            encyclopediaId:that.form.encyclopediaName,
                            title:that.form.title,
                            coverImg:that.imgurl,
                            authorName:that.form.authorName,
                            content:that.form.content,
                            video:that.form.video,
                            type:1,
                            display:that.form.display,
                            recommend:that.form.recommend,
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
                                        path:'/article'
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
                articleselectone({
                    id:that.id
                }).then(res => {
                    console.log(res)
                    that.form = res.data
                })
            },
            //获取分类
            getdepartment() {
                let that = this
                encyclopedialistall().then(res => {
                    that.encyclopedialistall = res.data
                    console.log(res.data)
                })
            },
            handleAvatarSuccess(res, file) {
                this.form.coverImg = URL.createObjectURL(file.raw);
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
  .details /deep/ .ql-editor{
    height:260px;
  }
</style>
