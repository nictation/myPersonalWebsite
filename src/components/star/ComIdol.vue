<template>
  <div class="container">
    <div class="picture">
      <el-carousel :interval="4000" type="card" height="600px">
        <el-carousel-item v-for="(item, index) in imageList" :key="item.index">
          <div class="img">
            <img :src="item.url" alt="" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="desc">
      <p>
        2020年1月11日，作为TF家族三代练习生参加TF家族“重逢”新年音乐会，带来《大圣》、《街舞少年》等唱跳曲目。8月31日，张极和TF家族三代其他成员共同演唱的歌曲《是你（live）》音频正式上线，收录于专辑《TFBOYS「日光旅行」七周年演唱会》中。
        2021年8月21日，随TF家族参加综艺节目《快乐大本营》。12月31日，张极和TF家族成员共同演唱的歌曲《长大》上线。
        2022年1月30日，张极和TF家族成员共同演唱的歌曲《笨小孩的道歉信》上线。8月7日，张极和TF家族其他成员共同演唱的歌曲《将军话》上线。8月11日，张极和TF家族其他成员共同演唱的歌曲《Better
        Now
        (拜～特闹！)》上线。8月14日，张极和TF家族三代成员共同演唱的歌曲《灵魂冲浪
        (Surfing in a
        hurricane)》上线。8月29日，他和TF家族其他成员共同演唱的歌曲《让我完整
        (Complete
        me)》上线。9月4日，张极和TF家族成员共同演唱的歌曲《写给他们的歌》上线
      </p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const imageList = [
      {
        index: 1,
        url: "https://picture-99f.pages.dev/img/job/zj7.jpg",
      },
      {
        index: 2,
        url: "https://picture-99f.pages.dev/img/job/zj2.jpg",
      },

      {
        index: 3,
        url: "https://picture-99f.pages.dev/img/job/zj3.jpg",
      },
      {
        index: 4,
        url: "https://picture-99f.pages.dev/img/job/zj4.jpg",
      },
      {
        index: 5,
        url: "https://picture-99f.pages.dev/img/job/zj5.jpg",
      },
      {
        index: 6,
        url: "https://picture-99f.pages.dev/img/job/zj6.jpg",
      },
    ];
    const desc = [
      {
        key: "姓名",
        value: "张极",
      },
      {
        key: "生日",
        value: "2007年2月3日",
      },
      {
        key: "昵称",
        value: "极极国王、极哥、豆儿",
      },
      {
        key: "擅长",
        value: "唱歌、跳舞",
      },
      {
        key: "爱好",
        value: "唱歌、跳舞、平面模特",
      },
      {
        key: "个人评价",
        value: "爱唱歌、爱跳舞、爱吃糖醋排骨!也是一个活跃气氛者~",
      },
    ];
    return{
        imageList,
        desc
    }
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  .picture {
    width: 800px;
    height: 600px;
    .img {
      width: 1200px;
      img {
        height: 600px;
      }
    }
  }
  .desc {
    width: 400px;
    margin-left: 50px;
    line-height: 38px;
  }
}
</style>