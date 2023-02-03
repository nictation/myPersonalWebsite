<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#fff"
      background-color="#6fbefe"
      text-color="#fff"
      :ellipsis="false"
    >
      <el-icon
        v-show="$route.meta.show"
        class="change"
        @click="handleCollapse()"
        ><Guide
      /></el-icon>
      <el-dropdown>
        <el-menu-item> 贰拾柒↓</el-menu-item>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item class="ershiqi">
              <img class="myQQ" src="../assets/images/QQ.jpg" alt="" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-icon  class="change" @click="logout()"><SwitchButton /></el-icon>
      <div class="flex-grow" />
      <el-menu-item
        v-for="(item, index) in menuList"
        :key="item.index"
        :index="item.index"
        :style="{ marginRight: item.margin }"
        @click="change(item)"
        >{{ item.label }}</el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
export default {
  setup() {
    let store = useStore();
    let router = useRouter();
    let route = useRoute();
    const handleCollapse = () => {
      store.commit("updateIsCollapse");
    };
    let activeIndex = route.index;
    const menuList = [
      {
        index: "1",
        path: "/home",
        name: "home",
        label: "首页",
      },
      {
        index: "2",
        path: "/about",
        name: "about",
        label: "个人介绍",
      },
      {
        index: "3",
        path: "/star",
        name: "star",
        label: "追星日志",
      },
      {
        index: " 4",
        path: "/box",
        name: "box",
        label: "百宝箱",
        margin: "200px",
      },
    ];
    const change = (item) => {
      router.push({ name: item.name });
    };
    const logout = ()=>{
      router.push('/login')
    }
    return {
      handleCollapse,
      menuList,
      change,
      activeIndex,
      logout
    };
  },
};
</script>

<style lang="less" scoped>
.header {
  .el-menu {
    border-bottom: none;
    background-color: rgba(193, 197, 201, 0.395);
  }
  .el-menu-demo {
    .el-menu-item:hover {
      background-color: rgba(193, 197, 201, 0.395);
    }
  }
  .change {
    font-size: 25px;
    padding: 15px;
    // color:#4f7a9a;
    color: #fff;
  }
  .flex-grow {
    flex-grow: 1;
  }
}
.ershiqi {
  .myQQ {
    width: 200px;
  }
}
</style>