<template>
<div class="login">
    <vue-particles
      color="#409EFF"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="6"
      linesColor="#409EFF"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push">
    </vue-particles>
  <van-row class="login-layout">
    <van-col class="login-layout-box">
    <el-input
     class="login-layout-token"
      placeholder="请输入token"
      v-model="ruleForm.token">
      <i slot="suffix" class="el-input__icon el-icon-error" @click="ruleForm.token?ruleForm.token=null:''"></i>
    </el-input>
      <van-button block  @click="submitForm('ruleForm')" v-if="ruleForm.token" class="login-button ">登录</van-button>
      <van-button block v-else class="login-button-disabled">登录</van-button>
    </van-col>

  </van-row>
</div>
</template>

<script>
// import vueParticles from 'vue-particles'
export default {
  components: {
    // vueParticles
  },
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
  beforeMount () {
    // Vue.use(VueParticles)
  }
}
</script>
<style scoped>
.login{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #f5f5f5
}
.login-layout-box{
    width:310px;
    border-radius:10px
}
.van-button--default {
    /* color: #333; */
    background-color: #f5f5f5;
    border: none;
}
 .login-layout{
    /* display:flex;
    justify-content:center;
    align-items:center; */
    /* height:100vh; */
  }
  .login-button{
    background:#feca00;
  }
  .login-button-disabled{
    color:#111;
    background:#eee;
  }
  /deep/ .el-input__inner {
    border:none;
    border-bottom: 1px solid #f1f1f1;
  }
  .login-layout-token{
    margin-bottom:30px
  }
  #particles-js {
  width: 100%;
  height: 100% ;
  position: absolute;
  top:0;
  left:0;
  background-image: url(https://img9.51tietu.net/pic/2019-091222/myswtnsxsrsmyswtnsxsrs.jpg)
}
</style>
