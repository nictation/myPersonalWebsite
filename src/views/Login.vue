<template>
  <div class="container">
    <el-container>
        <el-form
    ref="userForm"
    :status-icon="true"
    label-width="70px"
    inline
    :model="form"
    :rules="rules"
    class="login-container"
  >
    <h3 class="login-title">网站登录</h3>
    <el-form-item label="用户名" prop="username">
      <el-input
        type="text"
        v-model="form.username"
        placeholder="请输入用户名"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        v-model="form.password"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>
    <div class="login">
      <el-form-item>
        <el-button @click="submit" type="primary">前 往 小 窝 ✈</el-button>
      </el-form-item>
    </div>
  </el-form>
    </el-container>
  </div>
</template>

<script>
import { getCurrentInstance, reactive } from "vue";
import { useRouter } from 'vue-router';
export default {
  setup(){
    const router = useRouter();
    const {proxy} =getCurrentInstance();
    const form = reactive({
      username: "",
      password: "",
    });
    const  rules= {
        username: [
          { required: true, trigger: "blur", message: "请输入用户名" },
        ],
        password: [{ required: true, trigger: "blur", message: "请输入密码" }],
      };
    const submit = ()=>{
        proxy.$refs.userForm.validate(async(valid) => {
          if(valid){
            let myUsername = "贰拾柒"
            let myPassword = "070203"
            if(form.username == myUsername && form.password == myPassword ){
              router.push({name:'home'})
            }else{
              proxy.$refs.userForm.resetFields();
              alert("📕信息错误，不能进入╮(╯▽╰)╭")   
            }
          }
      })
      }
    return {
      form,
      rules,
      submit
    }
  },
}
</script>

<style lang="less" scoped>

.container{
    padding: 0;
    margin: 0;
    background: url('https://picture-99f.pages.dev/img/b4.jpg');
    background-size: cover;
    height: 100vh;
}
.login-container {
  width: 350px;
  border: 1px solid #eaeaea;
  margin: 300px auto;
  padding: 35px 35px 15px 35px;
  background-color: rgba(255, 255, 255, 0.779);
  box-shadow: 0 0 25px #cac6c6;
  border-radius: 15px;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
  .login-title {
    text-align: center;
    margin-bottom: 40px;
    color: #505458;
  }
  .el-input {
    width: 198px;
  }
  .login {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 6%;
    .el-button{
      width:250px;
      background-color: rgb(92, 227, 193);
      border:none;
    }
  }
}

</style>