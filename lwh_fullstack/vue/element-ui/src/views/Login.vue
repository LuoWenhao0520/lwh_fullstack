<template>
  <div class="login">
      <div class="login-container">
          <h2>罗文浩的后台管理系统</h2>
          <div class="wrap">
            <el-input
                placeholder="请输入内容"
                prefix-icon="el-icon-user"
                v-model="userName">
            </el-input>
            <el-input 
                placeholder="请输入密码" 
                v-model="password" 
                prefix-icon="el-icon-lock"
                show-password>
            </el-input>
              <el-button type="primary" @click="login">登录</el-button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            userName: '',
            password: ''
        }
    },

    methods: {
        login() {
            if(this.userName !== 'admain'){
                alert('用户名未注册')

            }else if(this.password !== '123'){
                alert('密码错误')
            }else{
                this.$router.push({
                    path: '/home',
                    query: {
                        user: this.userName
                    }
                })
            }
            localStorage.setItem('user',this.userName)

        }
    }

}
</script>

<style>
.login{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-container {
    width: 300px;
    height: 260px;
    box-shadow: 0 0 5px #aaa;
    border-radius: 5px;
    text-align: center;
}

.wrap {
    padding: 10px 50px;
}

input {
    margin: 10px 0;
}
</style>