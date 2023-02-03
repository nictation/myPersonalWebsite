<template>
  <div class="container">
    <div class="book">
      <h2>书&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;籍</h2>
      <div class="box">
        <div class="img" v-for="(item, index) in bookList" :key="item.index">
          <img :src="item.url" alt="" />
        </div>
      </div>
    </div>
    <div class="music">
      <h2>音&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;乐</h2>
      <div class="box">
        <div class="img" v-for="(item, index) in musicList" :key="item.index">
          <img :src="item.url" alt="" />
        </div>
      </div>
    </div>
    <div class="video">
      <h2>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;影</h2>
      <div class="box">
        <div class="img" v-for="(item, index) in filmList" :key="item.index">
          <img :src="item.url" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import store from '../../store';

import { useStore } from "vuex";
import { onMounted } from "vue";
export default {
  setup() {
    let store = useStore();
    const bookList = store.state.about.bookList;
    const musicList = store.state.about.musicList;
    const filmList = store.state.about.filmList;
    onMounted(() => {
      store.dispatch("bookList");
      store.dispatch("musicList");
      store.dispatch("filmList");
    });
    return {
      bookList,
      musicList,
      filmList,
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 20px;
    line-height: 48px;
    text-align: center;
    font-weight: 1000;
  }
  .box {
    display: flex;
    .img {
      height: 180px;
      width: 250px;
      img {
        height: 180px;
      }
    }
  }
}
</style>