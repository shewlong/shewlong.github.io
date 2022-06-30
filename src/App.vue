<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'githubUsername',
      'htmlTitle',
      'token'
    ])
  },
  created () {
    this.$store.dispatch('Init')
    if (this.token) {
      this.$store.dispatch('GetInfo')
    }
  },
  // 在app.vue中，是无法获取到当前路由信息的，解决方案：
  // 1.需要在更新完成之后再获取
  // 2.在路由对应页面获取
  // 3.在路由导航守卫获取
  updated () {
    console.log(this.$route)
    this.$setTitle(this.$route.meta.title)
    let windowSize = this.$util.getWindowSize()
    let pathArr = this.$route.path.split('/')
    if (pathArr[1] == 'user' && windowSize.height > windowSize.width * 1.2) {
      this.$router.push('/mobile/user/blog')
    }
    if (pathArr[1] == 'mobile' && windowSize.height <= windowSize.width * 1.2) {
      this.$router.push('/')
    }
  }
}
</script>
