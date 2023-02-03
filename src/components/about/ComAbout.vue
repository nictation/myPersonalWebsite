<template>
  <el-row class="about">
    <el-col class="picture">
      <el-carousel :interval="5000" arrow="always" :height="510 + 'px'">
        <el-carousel-item v-for="(item, index) in imageList" :key="item.index">
          <div class="image" :style="{ borderColor: item.color }">
            <img :src="item.url" alt="" />
          </div>
          <h3 text="2xl" justify="center" :style="{ color: item.color }">
            {{ item.label }}
          </h3>
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <el-col class="self-info">
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;👀嗨，这里是来自山东枣庄的狮子座的大学牲，就读于合肥工业大学，目前大二。平时喜欢追星，长期活跃在微博的夜猫子。喜欢磕糖，游逛在各大TF家族的CP超话。
        喜欢吃辣，但是吃不了很辣，属于人菜瘾大。喜欢玩推理游戏，但是却总是被剧情绕晕。
      </p>
    </el-col>
  </el-row>
</template>

<script>
import { useStore } from "vuex";
import { onMounted } from "vue";
export default {
  setup() {
    let store = useStore();
    const imageList = store.state.about.imageList;
    onMounted(() => {
      store.dispatch("imageList");
    });
    return {
      imageList,
    };
  },
};
</script>

<style lang="less" scoped>
.about {
  display: flex;
  //   color:#fff;
  .self-info {
    line-height: 40px;
    span {
      margin-left: 20px;
      margin-right: 200px;
    }
  }
  .picture {
    .image {
      width: 860px;
      height: 470px;
      // border:10px solid #c4d1fa;
      border: 10px solid #7ab7e3;
      border-radius: 10px;
      overflow: hidden;
      img {
        // border-radius: 30px;
        // height: 500px;
        width: 900px;
      }
    }
    h3 {
      position: relative;
      top: -60px;
      right: -300px;
      color: #fff;
      font-size: 20px;
    }
  }
}
</style>