<template>
  <div class="details">
    <el-tabs v-model="activeName">
      <el-tab-pane label="基本信息" name="first">
        <div class="contents">
          <div class="title">
            <div class="title-left">基本信息</div>
            <div class="title-right" @click="edit()">编辑</div>
          </div>
          <div class="infos">
            <div class="imgbox">
              <img src="http://b-ssl.duitang.com/uploads/item/201410/09/20141009224754_AswrQ.jpeg" alt="">
            </div>
            <div class="lists">
              <div class="list">
                <div class="titles">医生姓名</div>
                <div class="info">{{name}}</div>
              </div>
              <div class="list">
                <div class="titles">所属科室</div>
                <div class="info">{{departmentName}}</div>
              </div>
              <div class="list">
                <div class="titles">头衔</div>
                <div class="info">{{jobRank}}</div>
              </div>
              <div class="list">
                <div class="titles">门诊号</div>
                <div class="info">{{registerCategory}}</div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="排班信息" name="second">配置管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import {doctorsdetails} from "../../request/api";
  export default {
        name: "doctordetails",
        data() {
            return {
                activeName:'first',
                id:'',
                name:'',
                departmentName:'',
                jobRank:'',
                registerCategory:''
            }
        },
        created(){
            this.id = this.$route.query.id
            this.getdepartment()
        },
        methods:{
            //医生详情
            getdepartment() {
                let that = this
                doctorsdetails({
                    id:that.id
                }).then(res => {
                    console.log(res)
                    that.name = res.data.name
                    that.departmentName = res.data.departmentName
                    that.jobRank = res.data.jobRank
                    that.registerCategory = res.data.registerCategory
                })
            },
            //编辑
            edit(){
                this.$router.push({
                    path:'/adddoctor',
                    query:{
                        type:2,
                        id:this.id
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
.details{
  padding: 30px 30px;
  box-sizing: border-box;
  .contents{
    padding: 15px 30px;
    box-sizing: border-box;
    .title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      .title-left{
        font-size: 20px;
        font-weight: bold;
      }
      .title-right{
        padding: 10px 20px;
        font-size: 14px;
        border: 1px solid #ccc;
        cursor: pointer;
      }
    }
    .infos{
      display: flex;
      justify-content: start;
      align-items: center;
      .imgbox{
        width: 120px;
        height: 120px;
        border-radius: 50%;
        overflow: hidden;
        img{
          object-fit: cover;
          display: block;
          width: 120px;
          height: 120px;
        }
      }
      .lists{
        flex: 1;
        padding-left: 50px;
        box-sizing: border-box;
        .list{
          display: flex;
          justify-content: start;
          align-items: center;
          &:last-child{
            .titles{
              border-bottom: 1px solid #ccc;
            }
            .info{
              border-bottom: 1px solid #ccc;
            }
          }
          .titles{
            width: 202px;
            height: 40px;
            background: rgba(242, 242, 242, 1);
            border: 1px solid #ccc;
            border-bottom: none;
            line-height: 40px;
            font-size: 14px;
            padding-left: 30px;
            box-sizing: border-box;
            border-right: none;
          }
          .info{
            width: 497px;
            height: 40px;
            border: 1px solid #ccc;
            border-bottom: none;
            line-height: 40px;
            font-size: 14px;
            padding-left: 30px;
            box-sizing: border-box;
          }
        }
      }
    }
  }
}
</style>
