<template>
  <div>
    <el-row>
      <el-col :offset="6" :span="12">
        <el-input v-model="username" autofocus>
          <template slot="prepend">账 号</template>
        </el-input>
      </el-col>
    </el-row>

    <el-row>
      <el-col :offset="6" :span="12">
        <el-input v-model="password" autofocus>
          <template slot="prepend">密 码</template>
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      username: "",
      password: ""
    };
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
