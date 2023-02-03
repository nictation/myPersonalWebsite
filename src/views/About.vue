<template>
  <el-card>
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="关于我" name="first">
        <ComAbout />
      </el-tab-pane>
      <el-tab-pane label="兴趣爱好" name="second">
       <ComHobby/>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { ref } from "vue";
import ComHobby from "../components/about/ComHobby.vue";
import ComAbout from "../components/about/ComAbout.vue";
import { useStore } from 'vuex';
export default {
  setup() {
    let store = useStore();
    let activeName = ref("first");
    if(store.state.home.activeName){
      activeName = store.state.home.activeName
    }
    // const imageList = [
    //   {
    //     index: 1,
    //     url: "https://picture-99f.pages.dev/img/p1.jpg",
    //     label: "难过从来就不能解决任何问题",
    //     color: "#6b4c75",
    //   },
    //   {
    //     index: 2,
    //     url: "https://picture-99f.pages.dev/img/p2.jpg",
    //     label: "要是追不上光，那就变成光吧 ",
    //     color: "#e1917f",
    //   },

    //   {
    //     index: 3,
    //     url: "https://picture-99f.pages.dev/img/p3.png",
    //     label: "慢慢来，谁还没有一个努力的过程",
    //     color: "#e7c084",
    //   },
    //   {
    //     index: 4,
    //     url: "https://picture-99f.pages.dev/img/p4.jpg",
    //     label: "所谓宿命，其实都是最好的安排",
    //     color: "#7ab7e3",
    //   },
    // ];
    // const bookList = [
    //   {
    //     index: 1,
    //     url: "https://picture-99f.pages.dev/img/job/book7.webp",
    //   },
    //   {
    //     index: 2,
    //     url: "https://picture-99f.pages.dev/img/job/book2.webp",
    //   },

    //   {
    //     index: 3,
    //     url: "https://picture-99f.pages.dev/img/job/book3.webp",
    //   },
    //   {
    //     index: 4,
    //     url: "https://picture-99f.pages.dev/img/job/book5.webp",
    //   },
    //   {
    //     index: 5,
    //     url: "https://picture-99f.pages.dev/img/job/book6.webp",
    //   },
    // ];
    // const musicList = [
    //   {
    //     index: 1,
    //     url: "https://picture-99f.pages.dev/img/job/music1.webp",
    //   },
    //   {
    //     index: 2,
    //     url: "https://picture-99f.pages.dev/img/job/music4.webp",
    //   },

    //   {
    //     index: 3,
    //     url: "https://picture-99f.pages.dev/img/job/music3.webp",
    //   },
    //   {
    //     index: 4,
    //     url: "https://picture-99f.pages.dev/img/job/music5.webp",
    //   },
    // ];
    // const filmList = [
    //   {
    //     index: 1,
    //     url: "https://picture-99f.pages.dev/img/job/film1.jpg",
    //   },
    //   {
    //     index: 2,
    //     url: "https://picture-99f.pages.dev/img/job/film2.webp",
    //   },

    //   {
    //     index: 3,
    //     url: "https://picture-99f.pages.dev/img/job/film3.jpg",
    //   },
    //   {
    //     index: 4,
    //     url: "https://picture-99f.pages.dev/img/job/film4.jpg",
    //   },
    //   {
    //     index: 5,
    //     url: "https://picture-99f.pages.dev/img/job/film5.jpg",
    //   },
    // ];
    return {
      activeName,
    };
  },
  components: {
    ComHobby,
    ComAbout,
  },
};
</script>

<style lang="less" scoped>
.el-card {
  background-color: rgb(250, 250, 251);
  border-radius: 20px;
  width: 60vw;
  margin: auto;
  border: none;
  .el-tab-pane {
    margin-left: 50px;
    margin-right: 50px;
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
    .container {
      display: flex;
      flex-direction: column;
      h2{
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
  }
}
</style>>

