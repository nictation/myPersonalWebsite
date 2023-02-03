<template>
  <div class="job">
          <video src="https://picture-99f.pages.dev/img/job/bo2.mp4" controls = "true" ></video>
          <div class="other">
            <p>其他热门直拍，可以跳转B站，在收藏夹《刷播》中：</p>
            <ul>
              <li v-for="(item,index) in videoList" :key="item.index"><a :href="item.url"><p>{{ item.label }}</p></a></li>
            </ul>
            <p class="fighting">赶快回去做数据了，今年一定送小极出道！(ง •_•)ง</p>
          </div>
        </div>
</template>

<script>
export default {
    setup(){
        const videoList = [
            {
                index:"1",
                url:"https://www.bilibili.com/video/BV1hR4y1h7u7/?spm_id_from=333.999.0.0",
                label:"Gee"
            },
            {
                index:"2",
                url:"https://www.bilibili.com/video/BV1VP4y167Zo/?spm_id_from=333.999.0.0",
                label:"十二月的奇迹"
            },
            {
                index:"3",
                url:"https://www.bilibili.com/video/BV1AM4y197Xk/?spm_id_from=333.999.0.0",
                label:"流浪记"
            },
            {
                index:"4",
                url:"https://www.bilibili.com/video/BV1fb4y1r7t4/?spm_id_from=333.999.0.0",
                label:"全部都是你"
            },
            {
                index:"5",
                url:"https://www.bilibili.com/video/BV1dy4y197ay/?spm_id_from=333.999.0.0",
                label:"BangBang"
            },
            {
                index:"6",
                url:"https://www.bilibili.com/video/BV1ET411o7KL/?spm_id_from=333.999.0.0",
                label:"RingRingRing"
            },
            {
                index:"7",
                url:"https://www.bilibili.com/video/BV1vy4y197Ym/?spm_id_from=333.999.0.0",
                label:"飞机场的10：30"
            },
        ]
        return{
            videoList
        }
    }
}
</script>

<style lang="less" scoped>

.job{
    display: flex;
    video{
      width:1000px;
      border-radius: 2%;
      border:30px solid black;
    }
    .other{
      margin-left:30px;
      font-size: 18px;
      line-height: 38px;
      ul{
        margin-left: 15px;
        li{
          margin-top:20px;
          p{
            // width:fit-content;
            
            background-color:rgba(240, 175, 89);
            // background-color: #01e1b3;;
            text-align: center;
            border-radius: 5%;
            border:2px solid rgba(240, 175, 89, 0.482);
          }
        }
      }
      a{
        color:#000;
        text-decoration: none;
      }
    }
  }

</style>