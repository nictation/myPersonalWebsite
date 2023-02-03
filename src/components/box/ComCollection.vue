<template>
  <div class="plan">
    <el-card>
      <div class="box">
        <div class="img" v-for="item in 8" :key="item">
          <img
            :src="`https://picture-99f.pages.dev/img/job/p${item}.jpg`"
            alt=""
          />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.plan {
  // overflow-y: scroll;
  height: 600px;
  .el-card {
    margin-left: 100px;
    margin-right: 100px;
    width: fit-content;
    background-color: #ffffffc9;
    .box {
      display: flex;
      flex-wrap: wrap;
      .img {
        img {
          // width:300px;
          height: 250px;
          border-radius: 10%;
        }
      }
    }
  }
}
</style>