<template>
  <el-card>
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="人物" name="first">
        <ComIdol/>
      </el-tab-pane>
      <el-tab-pane label="作品" name="second">
        <ComJob/>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import ComIdol from "../components/star/ComIdol.vue";
import ComJob from "../components/star/ComJob.vue";
export default {
  setup() {
    let store = useStore();
    let activeName = ref("first");
    if (store.state.home.activeName) {
      activeName = store.state.home.activeName;
    }
    return {
      activeName,
    };
  },
  components:{
    ComIdol,
    ComJob
  }
};
</script>

<style lang="less" scoped>
.el-card {
  background-color: rgba(236, 220, 240, 0.598);
  border: none;
  // width: 1200px;
  margin: auto;
  
}
</style>