<template>
  <aside>
    <el-menu
      class="el-menu-vertical-demo"
      active-text-color="#fff"
      text-color="#fff"
      background-color="#13141433"
      :collapse="$store.state.home.isCollapse"
    >
      <el-sub-menu v-for="(item,index) in menuList" :key="item.name" :index="item.id" >
        <template #title>
          <el-icon>
            <component class="icons" :is="item.icon"></component>
          </el-icon>
          <span>{{item.label}}</span>
        </template>
        <el-menu-item v-for="(subItem,subIndex) in item.children" :index="subItem.id"
        @click="clickMenu(subItem)"
        >
        {{subItem.label}}</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </aside>
</template>

<script>
import store from "../store";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const menuList = [
      {
        path: "/about",
        name: "about",
        label: "个人介绍",
        icon: "user",
        id:"1",
        children: [
          {
            name: "about",
            label: "关于我",
            id:"11",
            index:"1"
          },
          {
            name: "about",
            label: "兴趣爱好",
            id:"12",
            index:"2"
          },
        ],
      },
      {
        path: "/star",
        name: "star",
        label: "追星日志",
        icon: "star",
        id:"2",
        children: [
          {
            name: "star",
            label: "爱豆",
            id:"21",
            index:"1"
          },
          {
            name: "star",
            label: "作品",
            id:"22",
            index:"2"
          },
        ],
      },
      {
        path: "/box",
        name: "box",
        label: "百宝箱",
        icon: "collection",
        id:"3",
        children: [
          {
            name: "box",
            label: "记忆收纳",
            id:"31",
            index:"1"
          },
          {
            name: "box",
            label: "图片收藏",
            id:"32",
            index:"2"
          },
        ],
      }
    ];
    const clickMenu = (item)=>{
      router.push({
        name:item.name
      });
      store.commit('changePage',item.index)
    }
    return {
      menuList,
      clickMenu
    };
  },
};
</script>

<style lang="less">
aside {
  .el-menu {
    background-color: rgba(255, 255, 255, 0);
  }
  height: 120vh;
  .el-menu-vertical-demo {
    border-right: none;
    height: 100%;
    padding-top: 200px;
    background-color: #13141456;
    // background-color: rgba(193, 197, 201, 0.395);
    color: rgb(242, 245, 247);
    .open {
      text-align: center;
    }
    h3 {
      text-align: center;
    }
  }
}
</style>