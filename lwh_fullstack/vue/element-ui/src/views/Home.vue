<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="title">LWH管理系统</div>
        <div class="info">
          <el-dropdown @command="handleCommand">
            <el-button type="primary">
              {{ userName }}<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1">修改密码</el-dropdown-item>
              <el-dropdown-item command="2">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="1-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>学生列表</span>
              </template>
              <el-menu-item index="/home/userInfo">
                <span slot="title">罗文浩</span>
              </el-menu-item>
              <el-menu-item index="/home/form">
                <span slot="title">lwh</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">作业情况</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
    };
  },
  created() {
    this.userName = localStorage.getItem("user");
  },
  methods: {
    handleCommand(e) {
      if (e == 2) {
        this.$router.push("/");
        localStorage.removeItem("user");
      }
    },
  },
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container {
  height: calc(100vh - 60px);
}

.title {
  float: left;
  flex-wrap: 700;
  font-size: 24px;
}

.info {
  float: right;
}

.el-menu {
    height: 100%;
}

.el-menu .el-menu-item {
    min-width: auto !important;
}
</style>