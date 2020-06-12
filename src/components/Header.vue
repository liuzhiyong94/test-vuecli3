<template>
  <div class="header">
    <el-header>
      <el-image class="logo" :src="src"></el-image>
    </el-header>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      src: require("../assets/logo.png")
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.header {
  background: blanchedalmond;
  height: 80px;
  .logo {
    float: left;
    width: 80px;
    height: 80px;
  }
}
</style>
