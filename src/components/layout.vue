<template>
  <div class="layout">
    <el-row>
      <el-col :span="11">
        <div class="rank">
          <div class="title">
            <div class="title-left">科室排行</div>
            <div class="title-right">
              <el-date-picker
                v-model="date"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
          </div>
          <div class="content">
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="rank"
                label="排名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="科室"
                width="180">
              </el-table-column>
              <el-table-column
                prop="people"
                label="接诊人数">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
      <el-col :span="11" :offset="1">
        <div class="information">
          <div class="title">
            <div class="title-left">系统公告</div>
            <div class="title-right">
              <el-button plain>发布公告</el-button>
              <el-button plain>查看更多</el-button>
            </div>
          </div>
          <div class="content">
            <ul>
              <li v-for="item in 6">
                <div><router-link to="">如何建立医患关系</router-link></div>
                <div>2019-10-78 09:00</div>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "layout",
        data(){
            return {
                date:"",
                tableData: [{
                    rank: '1',
                    name: '王小虎',
                    people: '3'
                }, {
                    rank: '1',
                    name: '王小虎',
                    people: '3'
                },{
                    rank: '1',
                    name: '王小虎',
                    people: '3'
                },{
                    rank: '1',
                    name: '王小虎',
                    people: '3'
                },{
                    rank: '1',
                    name: '王小虎',
                    people: '3'
                },]
            }
        }
    }
</script>

<style scoped lang="less">
.layout{
  padding: 15px 15px;
  box-sizing: border-box;
  .rank{
    .title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      box-sizing: border-box;
      height: 60px;
      background: rgba(249, 249, 249, 1);
      border-top: 1px solid #EBEEF5;
      border-right: 1px solid #EBEEF5;
      border-left: 1px solid #EBEEF5;
      .title-left{
        font-size: 13px;
        font-weight: bold;
      }
    }
    .content{
      th,td{
        .cell{
          text-align: center !important;
        }
      }
    }
  }
  .information{
    .title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      box-sizing: border-box;
      height: 60px;
      background: rgba(249, 249, 249, 1);
      border: 1px solid #EBEEF5;
      font-size: 13px;
      .title-left{
        font-weight: bold;
      }
    }
    .content{
      ul{
        li{
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 48px;
          border: 1px solid #EBEEF5;
          border-top: none;
          font-size: 14px;
          padding: 0 15px;
          box-sizing: border-box;
          a{
            color: #333;
          }
        }
      }
    }
  }
}
</style>
