<template>
  <div class="feedback">
    <div class="title">
      <div class="title-top">广告列表</div>
      <div class="title-select">
        <el-row>
          <el-col :span="8">
            <span>广告名称</span>
            <el-input v-model="form.name"></el-input>
          </el-col>
          <el-col :span="8">
            <span>到期时间</span>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </el-col>
          <el-button plain @click="search()">查询</el-button>
          <el-button plain @click="adds()">添加广告</el-button>
        </el-row>
      </div>
    </div>
    <div class="content">
      <el-row>
        <el-col :span="23" style="float: initial;margin: 0 auto">
          <div class="contents">
            <div class="tables">
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column type="index" label="编号" width="100px"></el-table-column>
                <el-table-column prop="name" label="广告名称"></el-table-column>
                <el-table-column prop="img" label="广告图片">
                  <template slot-scope="scope">
                    <el-popover
                      placement="right"
                      title=""
                      trigger="hover">
                      <img :src="scope.row.img" style="max-height: 120px;max-width: 400px;"/>
                      <img slot="reference" :src="scope.row.img"
                           style="max-height: 45px;max-width: 45px;border-radius: 50%;">
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column prop="startTime" label="时间">
                  <template slot-scope="scope">
                    <p>{{scope.row.startTime | changedates}}</p>
                    <p>{{scope.row.endTime | changedates}}</p>
                  </template>
                </el-table-column>
                <el-table-column prop="display" label="上线/下线">
                  <template slot-scope="scope">
                    <el-switch
                      v-model="scope.row.display"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      @change="switchchange(scope.row)"
                    ></el-switch>
                  </template>
                </el-table-column>
                <el-table-column prop="clicks" label="点击次数"></el-table-column>
                <el-table-column prop="top" label="置顶">
                  <template slot-scope="scope">
                    <el-switch
                      v-model="scope.row.display"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      @change="switchchange(scope.row)"
                    ></el-switch>
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div class="pages">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                @current-change="currentchange"
              ></el-pagination>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { inquireadlist } from "../../request/api";
export default {
  name: "productList",
  data() {
    return {
      id: "",
      form: {
        name: "",
        changedate: "" //时间
      },
      total: 0,
      current: 1,
      tableData: [],
      value1: ""
    };
  },
  created() {
    this.initdata(this.current);
  },
  methods: {
    //产品列表初始化
    initdata(current) {
      let that = this;
      inquireadlist({
        name: that.form.name,
        current: current,
        size: 10
      }).then(res => {
        console.log(res, 11);
        that.tableData = res.data.records;
        that.total = res.data.total;
        that.current = res.data.current + 1;
      });
    },
    //上一页下一页
    currentchange(val) {
      console.log(val);
      this.initdata(val);
    },
    //查询
    search() {
      this.initdata(1);
    },
    //编辑
    handleClick(row) {
      this.$router.push({
        path: "/addad",
        query: {
          choice: 0,
          id: row.id
        }
      });
    },
    //查看产品详情
    productClick(row) {
      this.$router.push({
        path: "/productdetails",
        query: {
          id: row.id
        }
      });
      console.log(row.id);
    },
    //新增产品
    adds() {
      this.$router.push({
        path: "/addad",
        query: {
          choice: 1
        }
      });
    },
    //编辑
    switchchange(value) {
      let that = this;
      console.log(value);
      addproduct({
        id: value.id,
        name: value.name,
        productTexture: value.productTexture,
        img: "",
        content: "",
        display: value.display,
        choice: 0
      }).then(res => {
        console.log(res);
      });
    }
  },
  filters:{
      changedates(val){
          var arr
          if(val == null){
              arr = ""
          }else{
              arr= val.split(" ")
          }
          console.log(arr)
          return arr[0]
      }
  }
};
</script>

<style scoped lang="less">
.feedback {
  padding-bottom: 30px;
  .title {
    border: 1px solid #ccc;
    .title-top {
      width: 100%;
      height: 60px;
      background: rgba(243, 243, 243, 1);
      padding: 0 30px;
      font-size: 14px;
      font-weight: bold;
      border-bottom: 1px solid #ccc;
      line-height: 60px;
    }
    .title-select {
      width: 100%;
      font-size: 14px;
      font-weight: bold;
      line-height: 60px;
      span {
        margin: 0 30px;
        &.ids {
          margin-left: 30px;
        }
      }
      .el-input {
        width: 217px;
        margin-right: 30px;
      }
      .el-date-editor--daterange {
        width: 250px;
      }
    }
  }
  .contents {
    margin-top: 30px;
    box-sizing: border-box;
    .tables {
      margin-bottom: 20px;
    }
    .pages {
      text-align: right;
    }
  }
}
</style>

