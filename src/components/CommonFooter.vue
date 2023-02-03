<template>
  <div class="footer">
    <el-row >
    <el-col :span="3"></el-col>
    <el-col :span="4"><div class="grid-content ep-bg-purple" />
        <h2>@格言🍬</h2>
        <p class="ge">&nbsp;&nbsp;&nbsp;&nbsp;再看看那个光点，它就在这里，这是家园，这是我们。你爱的每一个人，你认识的一个人，你听说过的每一个人，曾经有过的每一个人，都在它上面度过他们的一生✨</p>
    </el-col>
    <el-col :span="9"><div class="grid-content ep-bg-purple-light" />  
      <h2>@关于本站🍭</h2>
      <p>©2020 - 2023 By Jessie</p>
      <p>框架vue|组件库Element-plus</p>
      <span class="wel">&nbsp;&nbsp;欢迎访问&nbsp;&nbsp;</span>
      <span></span>
    </el-col>
    <el-col :span="5"><div class="grid-content ep-bg-purple" />
    <el-col :span="2"></el-col>
     <h2>@概括内容</h2>
        <ul>
          <li>个人介绍&nbsp;&nbsp;&nbsp;&nbsp;学校介绍</li>
          <li>音乐收藏&nbsp;&nbsp;&nbsp;&nbsp;刷播做树</li>
          <li>追星日常&nbsp;&nbsp;&nbsp;&nbsp;感悟心得</li>
          <li>照片收藏&nbsp;&nbsp;&nbsp;&nbsp;计划安排</li>
        </ul>  
    </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  setup(){
    // const time = Time
    // return {
    //   time
    // }
  }
}
</script>

<style lang="less" scoped>
.footer{
    background-color:rgba(82, 79, 79, 0.61);
    width:100%;
    height: 100%;
    text-align: center;
    color:#fff;
    h2{
      margin-top:30px;
      margin-bottom: 10px;;
    }
    p{
      line-height: 25px;
    }
    .ge{
      font-size: 14px;
    }
    ul{
      li{
        line-height: 30px;
        font-size: 14px;
      }
    }
    .wel{
      display: inline-block;
      line-height: 23px;
      font-size: 14px;
      margin-top: 10px;
      background-color: rgb(231, 39, 231);
      border-radius: 20px;
      color: rgb(251, 247, 238);
    }
}
</style>