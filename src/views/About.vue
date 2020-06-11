<template>
  <div id="app">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button @click="TestApi">el-button</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
  methods: {
    async TestApi() {
      try {
        let params = {
          username: "admin"
        };
        let res = await window.axios.post("/Wechat/TestVueCli3", params);
        console.log("res:", res);
      } catch (error) {
        console.log("error:", error);
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
