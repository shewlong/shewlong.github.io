<template>
    <div>
        <el-card shadow="never">
            <el-menu :default-active="active" @select="onSelect" v-if="token">
              <div v-for="item in constantRouterMap" :key="item.path" >
                  <el-menu-item  v-if="item.meta&&item.meta.type=='user'&&(token||!item.meta.LoginRequired)&&(!mini||!item.meta.mini)&&item.path!='/login'" :index="item.path">
                      <i :class="item.meta.icon"></i>
                      <span slot="title">{{item.meta.title}}</span>
                  </el-menu-item>
              </div>
              <el-menu-item @click="gotoNews()">
                  <i class="el-icon-news"></i>
                  <span slot="title" class="elMenu-title">实时新闻</span>
              </el-menu-item>
            </el-menu>
        </el-card>
        <el-card shadow="never" style="margin-top: 20px;text-align: center">
            <div v-if="!token" style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                <el-tag type="danger" size="small">&nbsp;</el-tag>&nbsp;&nbsp; Token未绑定&nbsp;&nbsp;
                <el-button type="text" @click="openTokenDialog">绑定</el-button>
            </div>
            <div v-if="token" style="font-size: 0.9rem;line-height: 1.5;color: #303133;">
                <el-tag type="success" size="small">&nbsp;</el-tag>&nbsp;&nbsp; Token已绑定&nbsp;&nbsp;
                <el-button type="text" @click="cancellation">注销</el-button>
            </div>
            <div style="margin-top: 10px;text-align: left">
                <el-alert title="Token获取" type="info" description="在 github-> settings-> developerSettings-> personalAccessTokens 勾选gist权限,获取Token. 详情参考README.md"
                    :closable="false">
                </el-alert>
            </div>
        </el-card>
        <token-dialog ref="tokenDialog"></token-dialog>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { constantRouterMap } from '@/router'
import TokenDialog from '@/views/common/TokenDialog'
export default {
  components: {
    TokenDialog
  },
  data () {
    return {
      constantRouterMap,
      active: '',
      parentUrl: '',
      menuList: []
    }
  },
  computed: {
    ...mapGetters([
      'token',
      'githubUsername',
      'mini'
    ])
  },
  mounted () {
    let arr = this.$route.path.split('/')
    this.active = '/' + arr[1] + '/' + arr[2]
  },
  methods: {
    onSelect (index) {
      this.$router.push(index)
    },
    openTokenDialog () {
      this.$router.push('/login')
    },
    cancellation () {
      this.$store.dispatch('Cancellation')
      this.$router.push('/login')
    },
    gotoNews () {
      window.open('https://sina-news.vercel.app/')
    }
  }
}
</script>
<style lang="less" scoped>
.elMenu-title{
  a:hover{
    text-decoration:none;
  }
}
</style>>
