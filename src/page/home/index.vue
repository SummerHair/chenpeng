<template>
  <el-container>
    <el-header>
      <div class="nav">
        <div class="nav-left">后台管理系统</div>
        <div class="nav-right">
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            text-color="#fff"
            active-text-color="#fff"
            background-color="#545c64"
            :router="true"
          >
            <el-menu-item index="1">消息</el-menu-item>
            <el-menu-item index="2">锁屏</el-menu-item>
            <el-submenu index="3">
              <template slot="title">{{name}}</template>
              <el-menu-item index="/material">修改资料</el-menu-item>
              <el-menu-item index="/editpassword">修改密码</el-menu-item>
              <el-menu-item @click="exits()">退出系统</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="230px">
        <el-scrollbar style="height: 100%">
          <el-menu
            default-active="this.$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :router="true"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="/layout">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>患者管理</span>
              </template>
              <el-menu-item index="/patient">患者列表</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>医生管理</span>
              </template>
              <el-menu-item index="/doctor">医生列表</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>科室管理</span>
              </template>
              <el-menu-item index="/department">科室列表</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>内容管理</span>
              </template>
              <el-menu-item index="/encyclopedias">健康百科</el-menu-item>
              <el-menu-item index="/adlist">广告列表</el-menu-item>
              <el-menu-item index="/article">文章列表</el-menu-item>
              <el-menu-item index="/video">视频列表</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>投诉建议</span>
              </template>
              <el-menu-item index="/feedback">反馈管理</el-menu-item>
              <el-menu-item index="/complaint">投诉管理</el-menu-item>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>产品管理</span>
              </template>
              <el-menu-item index="/productList">产品列表</el-menu-item>
            </el-submenu>
            <el-submenu index="12">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>部门管理</span>
              </template>
              <el-menu-item index="/department">部门列表</el-menu-item>
              <el-menu-item index="/departmentjurisdiction">成员权限</el-menu-item>
            </el-submenu>
            <el-submenu index="11">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>成员管理</span>
              </template>
              <el-menu-item index="/memberlist">成员列表</el-menu-item>
              <el-menu-item index="/memberjurisdiction">成员权限</el-menu-item>
            </el-submenu>
            <el-submenu index="8">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>机构管理</span>
              </template>
              <el-menu-item index="/mechanismlist">机构列表</el-menu-item>
              <el-menu-item index="/jurisdiction">机构权限</el-menu-item>
            </el-submenu>
            <el-submenu index="9">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>操作日志</span>
              </template>
              <el-menu-item index="/journal">操作日志</el-menu-item>
            </el-submenu>
            <el-submenu index="10">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据库管理</span>
              </template>
              <el-menu-item index="/database">数据库管理</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main>
        <el-scrollbar style="height: 100%">
          <router-view />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      name: ""
    };
  },
  created() {

  },
  methods: {

  }
};
</script>

<style scoped lang="less">
.el-container {
  .el-header {
    padding: 0 0;
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;
      box-sizing: border-box;
      background: #545c64;
      color: #fff;
      .nav-left {
        font-size: 25px;
      }
      .nav-right {
        font-size: 14px;
      }
    }
  }
  .el-aside {
    background: #545c64;
    height: calc(100vh - 60px);
    ul {
      li {
        width: 230px;
      }
    }
  }
  .el-main {
    padding: 0 0;
    height: calc(100vh - 60px);
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none !important;
  }
}
.el-container /deep/ .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
