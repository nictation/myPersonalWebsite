<template>
  <div class="container">
    <el-timeline>
      <el-timeline-item timestamp="公众号里的工大" placement="top">
        <el-card>
          <div class="box">
            <div class="img" v-for="item in 3" :key="item">
              <img
                :src="`https://picture-99f.pages.dev/img/job/school${item}.jpg`"
                alt=""
              />
            </div>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <el-timeline>
      <el-timeline-item timestamp="傍晚的校园" placement="top">
        <el-card>
          <div class="box">
            <div class="img" v-for="item in 4" :key="item">
              <img
                :src="`https://picture-99f.pages.dev/img/job/school${
                  item + 3
                }.jpg`"
                alt=""
              />
            </div>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <el-timeline>
      <el-timeline-item timestamp="运动会老区一日游" placement="top">
        <el-card>
          <div class="box">
            <div class="img" v-for="item in 4" :key="item">
              <img
                :src="`https://picture-99f.pages.dev/img/job/school${
                  item + 7
                }.jpg`"
                alt=""
              />
            </div>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <el-timeline>
      <el-timeline-item timestamp="雨后的校园" placement="top">
        <el-card>
          <div class="box">
            <div class="img" v-for="item in 4" :key="item">
              <img
                :src="`https://picture-99f.pages.dev/img/job/school${
                  item + 11
                }.jpg`"
                alt=""
              />
            </div>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <el-timeline>
      <el-timeline-item timestamp="军训进行时" placement="top">
        <el-card>
          <div class="box">
            <div class="img" v-for="item in 4" :key="item">
              <img
                :src="`https://picture-99f.pages.dev/img/job/school${
                  item + 15
                }.jpg`"
                alt=""
              />
            </div>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <el-timeline>
      <el-timeline-item timestamp="熟悉校园中" placement="top">
        <el-card>
          <div class="box">
            <div class="img" v-for="item in 4" :key="item">
              <img
                :src="`https://picture-99f.pages.dev/img/job/school${
                  item + 19
                }.jpg`"
                alt=""
              />
            </div>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <el-timeline>
      <el-timeline-item timestamp="第一次进入校园" placement="top">
        <el-card>
          <div class="box">
            <div class="img" v-for="item in 6" :key="item">
              <img
                :src="`https://picture-99f.pages.dev/img/job/school${
                  item + 24
                }.jpg`"
                alt=""
              />
            </div>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  overflow-y: scroll;
  height: 600px;
  .el-card {
    width: fit-content;
    background-color: #0000111b;
  }
  h2 {
    line-height: 38px;
    font-size: 18px;
  }
  .box {
    display: flex;
    flex-wrap: wrap;
    .img {
      img {
        // width:300px;
        height: 220px;
        // border-radius: 10%;
      }
    }
  }
}
</style>