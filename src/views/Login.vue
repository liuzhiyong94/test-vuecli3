<template>
  <div>
    <el-row>
      <el-col :offset="6" :span="12">
        <el-input v-model="username" autofocus clearable>
          <template slot="prepend">账 号</template>
        </el-input>
      </el-col>
    </el-row>

    <el-row>
      <el-col :offset="6" :span="12">
        <el-input type="password" v-model="password" clearable show-password>
          <template slot="prepend">密 码</template>
        </el-input>
      </el-col>
    </el-row>

    <el-row>
      <el-col :offset="6" :span="12">
        <el-button size="medium" @click="Login">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
require ("../mock/login.js")
export default {
  name: "Login",
  components: {},
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async Login() {
      try {
        let params = {
          username: "admin"
        };
        let res = await window.axios.post("/api/Wechat/Login", params);
        console.log("res:", res);
        // this.$router.push("/Home");
      } catch (error) {
        console.log("error:", error);
      }
    }
  }
};
</script>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
