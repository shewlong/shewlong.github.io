import Vue from 'vue'
import Router from 'vue-router'
import Error404 from '@/views/error/Error404'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    component: () =>
    import(/* webpackChunkName: "login" */ '@/views/login/login.vue'),
    meta: {
      type: 'user',
      icon: 'el-icon-star-off',
      title: '登录'
    }
  },
  {
    path: '/user/new',
    redirect: '/user/new/main',
    component: () =>
    import(/* webpackChunkName: "login" */ '@/views/layout/Layout.vue'),
    meta: {
      type: 'user',
      icon: 'el-icon-star-off',
      title: '最新动态'
    },
    children: [
      {
        path: 'main',
        component: () =>
        import(/* webpackChunkName: "login" */ '@/views/new/Main.vue'),
        // component: NewMain,
        meta: { title: '最新动态' }
      }
    ]
  },
  {
    path: '/user/social',
    redirect: '/user/social/main',
    component: () =>
    import(/* webpackChunkName: "login" */ '@/views/layout/Layout.vue'),
    meta: {
      type: 'user',
      icon: 'el-icon-mobile-phone',
      title: '社交圈'
    },
    children: [
      {
        path: 'main',
        // component: SocialMain,
        component: () =>
        import(/* webpackChunkName: "login" */ '@/views/social/Main.vue'),
        meta: { title: '社交圈' }
      },
      {
        path: 'details/:name',
        // component: SocialDetails,
        component: () =>
        import(/* webpackChunkName: "login" */ '@/views/social/Details.vue'),
        meta: { title: '用户资料' }
      }
    ]
  },
  {
    path: '/user/blog',
    redirect: '/user/blog/main',
    component: () =>
    import(/* webpackChunkName: "login" */ '@/views/layout/Layout.vue'),
    meta: {
      type: 'user',
      icon: 'el-icon-edit-outline',
      title: '博客列表'
    },
    children: [
      {
        path: 'main',
        // component: BlogMain,
        component: () =>
        import(/* webpackChunkName: "login" */ '@/views/blog/Main.vue'),
        meta: { title: '博客列表' }
      },
      {
        path: 'add',
        // component: BlogAdd,
        component: () =>
        import(/* webpackChunkName: "login" */ '@/views/blog/Add.vue'),
        meta: { title: '发表博客' }
      },
      {
        path: 'edit/:id',
        // component: BlogEdit,
        component: () =>
        import(/* webpackChunkName: "login" */ '@/views/blog/Edit.vue'),
        meta: { title: '编辑博客' }
      },
      {
        path: 'details/:id',
        component: () =>
        import(/* webpackChunkName: "login" */ '@/views/blog/Details.vue'),
        // component: BlogDetails,
        meta: { title: '博客详情' }
      }
    ]
  },
  {
    path: '/user/project',
    redirect: '/user/project/main',
    component: () =>
    import(/* webpackChunkName: "login" */ '@/views/layout/Layout.vue'),
    meta: {
      type: 'user',
      icon: 'el-icon-service',
      title: '开源项目'
    },
    children: [
      {
        path: 'main',
        // component: ProjectMain,
        component: () =>
        import(/* webpackChunkName: "login" */ '@/views/project/Main.vue'),
        meta: { title: '项目列表' }
      },
      {
        path: 'details/:name',
        // component: ProjectDetails,
        component: () =>
        import(/* webpackChunkName: "login" */ '@/views/project/Details.vue'),
        meta: { title: '项目详情' }
      }
    ]
  },
  {
    path: '/user/helper',
    redirect: '/user/helper/main',
    component: () =>
    import(/* webpackChunkName: "login" */ '@/views/layout/Layout.vue'),
    meta: {
      type: 'user',
      icon: 'el-icon-printer',
      title: '使用帮助',
      mini: true
    },
    children: [
      {
        path: 'main',
        // component: HelperMain,
        component: () =>
        import(/* webpackChunkName: "login" */ '@/views/helper/Main.vue'),

        meta: { title: '使用帮助' }
      }
    ]
  },
  {
    path: '/user/readme',
    redirect: '/user/readme/main',
    component: () =>
    import(/* webpackChunkName: "login" */ '@/views/layout/Layout.vue'),
    meta: {
      type: 'user',
      icon: 'el-icon-document',
      title: 'README.md'
    },
    children: [
      {
        path: 'main',
        // component: ReadmeMain,
        component: () =>
        import(/* webpackChunkName: "login" */ '@/views/readme/Main.vue'),
        meta: { title: 'README.md' }
      }
    ]
  },
  {
    path: '/user/configure',
    redirect: '/user/configure/main',
    component: () =>
    import(/* webpackChunkName: "login" */ '@/views/layout/Layout.vue'),
    meta: {
      type: 'user',
      icon: 'el-icon-setting',
      title: '系统配置',
      LoginRequired: true
    },
    children: [
      {
        path: 'main',
        component: () =>
        import(/* webpackChunkName: "login" */ '@/views/configure/Main.vue'),
        // component: ConfigureMain,
        meta: { title: '系统配置' }
      }
    ]
  },

  {
    path: '/404',
    component: Error404
  },
  {
    path: '/',
    redirect: '/user/new'
  },
  {
    path: '*',
    redirect: '/404'
  },

  // mobile
  {
    path: '/mobile/user/blog',
    redirect: '/mobile/user/blog/main',
    component: () =>
    import(/* webpackChunkName: "login" */ '@/mobile_views/layout/Layout.vue'),
    meta: {
      type: 'mobile',
      icon: 'edit',
      title: '博客'
    },
    children: [
      {
        path: 'main',
        // component: MobileBlogMain,
        component: () =>
        import(/* webpackChunkName: "login" */ '@/mobile_views/blog/Main.vue'),
        meta: {
          scrollTop: true
        }
      },
      {
        path: 'details/:id',
        // component: MobileBlogDetails,
        component: () =>
        import(/* webpackChunkName: "login" */ '@/mobile_views/blog/Details.vue'),
        meta: {
          scrollTop: true
        }
      }
    ]

  },
  {
    path: '/mobile/user/project',
    redirect: '/mobile/user/project/main',
    component: () =>
    import(/* webpackChunkName: "login" */ '@/mobile_views/layout/Layout.vue'),
    meta: {
      type: 'mobile',
      icon: 'like-o',
      title: '项目'
    },
    children: [
      {
        path: 'main',
        // component: MobileProjectMain,
        component: () =>
        import(/* webpackChunkName: "login" */ '@/mobile_views/project/Main.vue'),
        meta: {
          scrollTop: true
        }
      },
      {
        path: 'details/:name',
        component: () =>
        import(/* webpackChunkName: "login" */ '@/mobile_views/project/Details.vue'),
        // component: MobileProjectDetails,
        meta: {
          scrollTop: true
        }
      }
    ]

  },
  {
    path: '/mobile/user/self',
    redirect: '/mobile/user/self/main',
    component: () =>
    import(/* webpackChunkName: "login" */ '@/mobile_views/layout/Layout.vue'),
    meta: {
      type: 'mobile',
      icon: 'contact',
      title: '个人'
    },
    children: [
      {
        path: 'main',
        component: () =>
        import(/* webpackChunkName: "login" */ '@/mobile_views/self/Main.vue'),
        // component: MobileSelfMain,
        meta: {
          scrollTop: true
        }
      }
    ]

  }
]

const router = new Router({
  routes: constantRouterMap,
  scrollBehavior (to, from, savedPosition) {
    if (to.meta.scrollTop) {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  Vue.prototype.$setTitle(to.meta.title)
  next()
})

export default router
