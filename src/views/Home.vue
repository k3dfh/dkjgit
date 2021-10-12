<template>
  <div class="home">
    <el-container>
      <el-aside>
        <el-row class="tac">
          <el-col>
            <el-menu
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              unique-opened
              router
            >
              <div v-for="(v, i) in menus" :key="i">
                <el-menu-item :index="v.path" v-if="!v.children">{{
                  v.title
                }}</el-menu-item>
                <el-submenu :index="String(i)" v-else>
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{ v.title }}</span>
                  </template>
                  <el-menu-item-group v-for="(k, j) in v.children" :key="j">
                    <el-menu-item :index="k.path" v-if="!k.children">{{
                      k.title
                    }}</el-menu-item>
                    <el-submenu :index="k.path" v-else>
                      <template slot="title">
                        <span>{{k.title }}</span>
                      </template>
                      <el-menu-item-group v-for="(a, b) in k.children" :key="b">
                        <el-menu-item :index="a.path">{{
                          k.title
                        }}</el-menu-item>
                      </el-menu-item-group>
                    </el-submenu>
                  </el-menu-item-group>
                </el-submenu>
              </div>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      menus: {},
    };
  },
  methods: {},
  mounted() {
    this.menus = this.$store.state.menus;
    console.log(this.menus);
  },
};
</script>
<style lang='less'>
.home,
html {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
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
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
}
</style>