<template>
<div class="login">
  <van-row class="login-layout">
    <van-col class="login-layout-box">
    <el-input
     class="login-layout-token"
      placeholder="请输入token"
      :suffix-icon="ruleForm.token?'el-icon-success':'el-icon-error'"
      v-model="ruleForm.token">
    </el-input>
      <!-- <van-field

        v-model="ruleForm.token"
        center
        label="token"
        placeholder="请输入token"
      >
      </van-field> -->
      <van-button block  @click="submitForm('ruleForm')" v-if="ruleForm.token" class="login-button">登录</van-button>
      <van-button block v-else>登录</van-button>
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
        this.$toast('请输入token')
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
.login-layout-box{
width:310px;
box-shadow: 10px 10px 5px #f1f1f1;
border:1px solid #f1f1f1;
border-radius:10px
}
.van-button--default {
    color: #333;
    background-color: #f5f5f5;
    border: none;
}
 .login-layout{
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
  }
  .login-button{
    background:#feca00
  }
  /deep/ .el-input__inner {
    border:none;
    border-bottom: 1px solid #f1f1f1
  }
  .login-layout-token{
    margin-bottom:20px
  }
</style>
