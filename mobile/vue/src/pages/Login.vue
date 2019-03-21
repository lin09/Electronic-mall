<template>
  <div class="login">
    <header>账号登录</header>
    <form class="form" method="post" @submit.prevent="handleSubmit">
      <FormItem label="账号">
        <Input v-model="formData.user" type="text" placeholder="手机号/邮箱/会员名" />
      </FormItem>
      <FormItem label="登录密码">
        <Input v-model="formData.password" type="password" placeholder="请输入密码" />
      </FormItem>
      <Button class="submit" type="submit" :disabled="!formData.user || !formData.password">登录</Button>
    </form>
    <div class="other-link">
      <router-link :to="{ name: 'msg_login' }" class="link">短信校验码登录</router-link>
      <router-link :to="{ name: 'register' }" class="link">免费注册</router-link>
    </div>

    <Model v-model="visibleModel" cancelText="确定">
      <p class="msg">账号或密码错误</p>
    </Model>
  </div>
</template>

<script>
import FormItem from '@/components/FormItem'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Model from '@/components/Model'

export default {
  name: 'Login',
  data() {
    return {
      formData: {
        user: '',
        password: ''
      },
      visibleModel: false,
      msg: ''
    }
  },
  components: {
    FormItem,
    Button,
    Input,
    Model
  },
  methods: {
    handleSubmit () {
      this.msg = "账号或密码错误"
      this.visibleModel = true
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  min-height: 100vh;
  background-color: #f0f0f0;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #c8c8c8;
  height: 89px;
  background-color: #f7f7f7;
  font-size: 34px;
}

.form {
  display: flex;
  flex-direction: column;
  padding-top: 35px;
  font-size: 32px;
}

.submit {
  margin: 26px 20px 0 20px;
}

.other-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 100px;
}

.link {
  display: flex;
  align-items: center;
  color: rgb(255, 0, 54);
  height: 80px;
}

.msg {
  padding: 20px 0;
  color: #6c6c6c;
  text-align: center;
}
</style>

