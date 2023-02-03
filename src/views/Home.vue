<template>
  <div class="container">
    <div class="user">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>自我介绍</span>
          </div>
        </template>
        <div class="self">
          <img class="user" src="../assets/images/user.jpg" alt="" />
          <h3>Jessie</h3>
          <h4>Don't have to try!</h4>
          <div class="self-info">
            <p >姓名:<span>孙洁</span></p>
            <p>性别:<span>女</span></p>
            <p>学校:<span>合肥工业大学</span></p>
            <p>学院:<span>软件学院</span></p>
            <p>班级:<span>软件21-2班</span></p>
          </div>
        </div>
      </el-card>
    </div>
    <div class="school">
      <el-timeline>
        <el-timeline-item v-for="(item,index) in schoolList " :key="item.id" :timestamp="item.time" placement="top" :color="item.id == 2?'#64dfcaf4':''" :size="item.id == 2?'large':'normal'">
          <el-card>
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {

  name: "Home",
  mounted() {
    // this.school()
    this.$store.dispatch("schoolList");
    // console.log(this.schoolList)
  },
  computed: {
    ...mapState({
      schoolList: (state) => state.home.schoolList,
    }),
  },

};
</script>

<style lang="less">
.container {
  display: flex;
  margin-top: 40px;
  .user {
    background-color: rgba(255, 255, 255, 0.922);
    max-height: 570px;
    border-radius: 5%;
    font-size: 18px;
    .box-card {
      height: 100%;
      background: url("https://sourcebucket.s3.ladydaily.com/img/snowflower.webp");
      background-size: cover;
      color: rgb(52, 58, 79);
      width: 400px;
      border-radius: 5%;
      border: none;
      .self {
        /* 弹性布局 */
        display: flex;
        /* 主轴方向：垂直 */
        flex-direction: column;
        /* 对齐方式 */
        justify-content: center;
        /* 交叉轴上的对齐方式 */
        align-items: center;
        .user {
          border-radius: 50%;
          border: #fff solid 2px;
          width: 130px;
          margin-bottom: 10px;
        }
        h3{
          font-size: 30px;
          line-height: 40px;
          margin-bottom: 10px;
        }
        .self-info {
          padding-top: 20px;
          span{
            margin-left:20px;
          }
          line-height: 38px;
          padding-bottom: 20px;
        }
      }
    }
  }
  .school {
    background-color:  rgba(242, 243, 249, 0.708);
    border-radius: 5%;
   .el-timeline{
    margin:30px;
    color:#fff;
    .el-card {
      background-color: rgba(242, 243, 249, 0.708);
      h4{
        font-size: 16px;
      }
      p{
        line-height: 28px;;
      }
    }
   }
    
    // min-width: 400px;
    width: 600px;
    margin-left: 140px;
  }
}
</style>