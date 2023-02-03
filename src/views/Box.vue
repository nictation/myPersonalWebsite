<template>
  <el-card>
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="记忆收纳" name="first">
        <ComMemory/>
      </el-tab-pane>
      <el-tab-pane label="图片收藏" name="second">
        <ComCollection/>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import ComMemory from "../components/box/ComMemory.vue";
import ComCollection from "../components/box/ComCollection.vue";
export default {
  setup() {
    let store = useStore();
    let activeName = ref("first");
    if (store.state.home.activeName) {
      activeName = store.state.home.activeName;
    }
    // const imgList = [
    //   {
    //     index: 1,
    //     url: "https://picture-99f.pages.dev/img/job/school1.jpg",
    //   },
    // ];
    return {
      activeName,
      // imgList,
    };
  },
  components:{
    ComCollection,
    ComMemory
  }
};
</script>

<style lang="less" scoped>
.el-card {
  background-color: rgba(252, 252, 252, 0.589);
}
</style>