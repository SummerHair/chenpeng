<template>
  <div class="feedback">
    <div class="title">
      <div class="title-top">文章管理</div>
      <div class="title-select">
        <el-row>
          <el-col :span="8">
            <span>文章名称</span>
            <el-input v-model="form.articlename"></el-input>
          </el-col>
          <el-col :span="8">
            <span>文章分类</span>
            <el-select v-model="form.classification" placeholder="请选择" clearable>
              <el-option
                v-for="item in encyclopedialistall"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            <span>上传时间</span>
            <el-date-picker
              v-model="form.changedate"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </el-col>
        </el-row>
        <div>
          <span class="ids">文章作者</span>
          <el-input v-model="form.authorname"></el-input>
          <el-button plain @click="search()">查询</el-button>
          <el-button plain @click="adds()">新增文章</el-button>
        </div>
      </div>
    </div>
    <div class="content">
      <el-row>
        <el-col :span="23" style="float: initial;margin: 0 auto">
          <div class="contents">
            <div class="tables">
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="id" label="编号"></el-table-column>
                <el-table-column prop="title" label="文章名称"></el-table-column>
                <el-table-column prop="encyclopediaName" label="所属分类"></el-table-column>
                <el-table-column prop="authorName" label="作者"></el-table-column>
                <el-table-column prop="createTime" label="上传时间"></el-table-column>
                <el-table-column label="是否显示">
                  <template slot-scope="scope">
                    <el-switch
                      v-model="scope.row.display"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      @change="switchchange(scope.row)"
                    ></el-switch>
                  </template>
                </el-table-column>
                <el-table-column prop="recommend" label="推荐"></el-table-column>
                <el-table-column prop="collection" label="收藏"></el-table-column>
                <el-table-column label="操作" width="100">
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
import {
  articlelist,
  encyclopedialistall,
  addeiitarticle
} from "../../request/api";
export default {
  name: "index",
  data() {
    return {
      form: {
        authorname: "",
        articlename: "",
        changedate: "", //时间
        classification: "" //职称
      },
      total: 0,
      current: 1,
      encyclopedialistall: [], //文章分类
      tableData: []
    };
  },
  created() {
    this.initdata(this.current);
    this.getdepartment();
  },
  methods: {
    //获取分类
    getdepartment() {
      let that = this;
      encyclopedialistall().then(res => {
        that.encyclopedialistall = res.data;
        console.log(res.data);
      });
    },
    //编辑
    handleClick(row) {
      this.$router.push({
        path: "/addeditarticle",
        query: {
          choice: 0,
          id: row.id
        }
      });
      console.log(row.id);
    },
    //新增
    adds() {
      this.$router.push({
        path: "/addeditarticle",
        query: {
          choice: 1
        }
      });
    },
    //医生列表初始化
    initdata(current) {
      let that = this;
      articlelist({
        type: 1,
        encyclopediaId: that.form.classification,
        current: current,
        size: 10,
        title: that.form.articlename,
        authorName: that.form.authorname,
        startTime: that.form.changedate[0],
        endTime: that.form.changedate[1]
      }).then(res => {
        console.log(res, 11);
        for (var i = 0; i < res.data.records.length; i++) {
          if (res.data.records[i].recommend == 1) {
            res.data.records[i].recommend = "推荐";
            res.data.records[i].isrecomed = 1;
          } else {
            res.data.records[i].recommend = "不推荐";
            res.data.records[i].isrecomed = 0;
          }
        }
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
      console.log(this.form.changedate);
      this.initdata(1);
    },
    //编辑
    switchchange(value) {
      let that = this;
      console.log(value);
      addeiitarticle({
        id: value.id,
        title: value.title,
        authorName: value.authorName,
        authorImg: "",
        content: "",
        video: "",
        type: 1,
        display: value.display,
        recommend: value.isrecomed,
        choice: 0
      }).then(res => {
        console.log(res);
      });
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
