import Cookie from '@/utils/cookie'
import UserApi from '@/api/user'
import store from '../index'
import Vue from 'vue'
import router from '../../router'

const TOKEN_KEY = 'TOKEN_KEY'
const token = {
  state: {
    // 暂时不开放
    // token: Cookie.getAttribute(TOKEN_KEY) || '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'
    token: Cookie.getAttribute(TOKEN_KEY)
  },

  mutations: {
    SET_TOKEN: (state, value) => {
      state.token = value
      Cookie.setAttribute(TOKEN_KEY, value, 30)
    },
    REMOVE_TOKEN: (state) => {
      state.token = null
      Cookie.remove(TOKEN_KEY)
    }
  },

  actions: {
    Authentication ({ commit }, accessToken) {
      commit('SET_TOKEN', accessToken)

      UserApi.verifyToken(accessToken).then((response) => {
        let result = response.data
        let githubUsername = store.state.configuration.githubUsername
        if (githubUsername == result['login']) {
          Vue.prototype.$notify({
            title: '成功',
            message: 'Token绑定成功',
            type: 'success'
          })
          router.push('/user/new')
          store.dispatch('GetInfo')
          // Vue.prototype.$message({
          //     message: 'Token绑定成功',
          //     type: 'success'
          // })
        } else {
          Vue.prototype.$message({
            message: 'Token用户不一致',
            type: 'error'
          })
        }
      }).catch(() => {

      })
    },
    Cancellation ({ commit }) {
      commit('REMOVE_TOKEN')
      Vue.prototype.$message({
        message: 'Token取消绑定',
        type: 'info'
      })
    }
  }
}

export default token
