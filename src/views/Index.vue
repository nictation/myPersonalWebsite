<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto" >
        <CommonAside  v-show="$route.meta.show"></CommonAside>
      </el-aside>
      <el-container>
        <el-header>
          <CommonHeader/>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
       <el-footer> <CommonFooter/></el-footer>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import CommonAside from '../components/CommonAside.vue';
import CommonHeader from '../components/CommonHeader.vue';
import CommonFooter from '../components/CommonFooter.vue';
export default{
  components:{
    CommonAside,
    CommonHeader,
    CommonFooter,
  },
  setup(){

  }
}
</script>

<style>
/*全局滚动条样式*/
::-webkit-scrollbar {
    width: 7px;
    height: 7px;
}
 
 ::-webkit-scrollbar-thumb {
    background-color: #01c8dc;
    border-radius: 3px;
    background-color:#01bbdc;
}
/*全局滚动条样式结束*/

.common-layout{
  background-image: url('https://picture-99f.pages.dev/img/b1.jpg');
  background-size: cover;
}
.el-header{
  padding: 0;
  position: fixed;
  width:100%;
}
.el-footer{
  height: 20vh;
  padding: 0;
  margin: 0;
}
.el-main{
  margin-left:150px;
  margin-right: 150px;
  margin-top: 100px;
  height: 40vh;;
}
</style>