<template>
  <div>
    <el-container direction="vertical">
      <Header></Header>
      <el-container>
        <el-aside>Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
      <Footer></Footer>
    </el-container>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {
    Header,
    Footer
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>
