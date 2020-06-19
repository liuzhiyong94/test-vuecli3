<template>
  <el-header class="header">
    <el-image class="logo" :src="src" @click="BackHome"></el-image>
    <el-dropdown class="userinfo">
      <span class="el-dropdown-link">
        {{realname}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item @click.native="SignOut">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      src: require("../assets/logo.png"),
      realname: ""
    };
  },
  created() {
    this.realname = JSON.parse(
      this.uncompileStr(sessionStorage.getItem("UserInfo"))
    ).realname;
  },
  methods: {
    SignOut() {
      sessionStorage.setItem("JwtToken", "");
      sessionStorage.setItem("UserInfo", "");
      location.reload();
    },
    BackHome() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  background: $header-background-color;
  height: $header-height !important;
  .logo {
    float: left;
    width: $header-height;
    height: $header-height;
    cursor: pointer;
  }
}
.userinfo {
  cursor: default;
  float: right;
  margin-top: 25px;
}
.el-dropdown-link {
  font-size: 16px;
}
</style>
