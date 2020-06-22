<template>
    <div class="feedback">
      <div class="title">
        <div class="title-top">反馈管理</div>
        <div class="title-select">
          <span>反馈类型</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="content">
        <el-row>
          <el-col :span="23" style="float: initial;margin: 0 auto">
            <div class="contents">
              <div class="tables">
                <el-table
                  :data="tableData"
                  border
                  style="width: 100%">
                  <el-table-column
                    prop="rank"
                    label="序号"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="id"
                    label="ID"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="nickname"
                    label="昵称">
                  </el-table-column>
                  <el-table-column
                    prop="type"
                    label="反馈类型">
                  </el-table-column>
                  <el-table-column
                    prop="date"
                    label="反馈时间">
                  </el-table-column>
                  <el-table-column
                    label="操作"
                    width="100">
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                      <el-button type="text" size="small">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div class="pages">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="100">
                </el-pagination>
              </div>
            </div>
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
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value:'',
                tableData: [{
                    rank: '1',
                    id: '王小虎',
                    nickname: '3',
                    type:'反馈使用问题',
                    date:'2019-5-9'
                }, {
                    rank: '1',
                    id: '王小虎',
                    nickname: '3',
                    type:'反馈使用问题',
                    date:'2019-5-9'
                },{
                    rank: '1',
                    id: '王小虎',
                    nickname: '3',
                    type:'反馈使用问题',
                    date:'2019-5-9'
                },{
                    rank: '1',
                    id: '王小虎',
                    nickname: '3',
                    type:'反馈使用问题',
                    date:'2019-5-9'
                },{
                    rank: '1',
                    id: '王小虎',
                    nickname: '3',
                    type:'反馈使用问题',
                    date:'2019-5-9'
                },{
                    rank: '1',
                    id: '王小虎',
                    nickname: '3',
                    type:'反馈使用问题',
                    date:'2019-5-9'
                }, {
                    rank: '1',
                    id: '王小虎',
                    nickname: '3',
                    type:'反馈使用问题',
                    date:'2019-5-9'
                },{
                    rank: '1',
                    id: '王小虎',
                    nickname: '3',
                    type:'反馈使用问题',
                    date:'2019-5-9'
                },{
                    rank: '1',
                    id: '王小虎',
                    nickname: '3',
                    type:'反馈使用问题',
                    date:'2019-5-9'
                },{
                    rank: '1',
                    id: '王小虎',
                    nickname: '3',
                    type:'反馈使用问题',
                    date:'2019-5-9'
                }]
            }
        },
        methods:{
            handleClick(row) {
                console.log(row);
            }
        }
    }
</script>

<style scoped lang="less">
.feedback{
  padding-bottom: 30px;
  .title{
    border: 1px solid #ccc;
    .title-top{
      width: 100%;
      height: 60px;
      background: rgba(243, 243, 243, 1);
      padding: 0 30px;
      font-size: 14px;
      font-weight: bold;
      border-bottom: 1px solid #ccc;
      line-height: 60px;
    }
    .title-select{
      width: 100%;
      height: 60px;
      padding: 0 30px;
      font-size: 14px;
      font-weight: bold;
      line-height: 60px;
      span{
        margin-right: 30px;
      }
    }
  }
  .contents{
    margin-top: 30px;
    box-sizing: border-box;
    .tables{
      margin-bottom: 20px;
    }
    .pages{
      text-align: right;
    }
  }
}
</style>
