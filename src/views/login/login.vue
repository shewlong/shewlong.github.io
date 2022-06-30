<template>
<div class="login">
  <van-row class="login-layout">
    <van-col style="width:310px">
      <van-field
        class="login-layout-token"
        v-model="ruleForm.token"
        center
        label="token"
        placeholder="请输入token"
      >
      </van-field>
      <van-button block type="primary" @click="submitForm('ruleForm')">登录</van-button>
    </van-col>
  </van-row>

</div>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        token: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      if (this.ruleForm.token) {
        this.$store.dispatch('Authentication', this.ruleForm.token)
      } else {
        alert('请输入token')
      }
    }

  },
  mounted () {
  }
}
</script>
<style scoped>
.login{
  padding:20px;
}
 .login-layout{
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
  }
  .login-layout-token{
    margin-bottom:20px
  }
</style>
