<template>
  <el-aside class="aside">
    <el-menu router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                <i :class="subItem.icon"></i>
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "Aside",
  components: {},
  data() {
    return {
      items: [
        {
          index: "user",
          icon: "el-icon-s-custom",
          title: "人员管理",
          subs: [
            {
              index: "yf",
              icon: "el-icon-user",
              title: "研发部"
            },
            {
              index: "cp",
              icon: "el-icon-user",
              title: "产品部"
            }
          ]
        },
        {
          index: "location",
          icon: "el-icon-location",
          title: "位置管理"
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.aside {
  width: 200px !important;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid #ddd;
}
.el-menu {
  border: 0 !important;
}
</style>

