import {RouteRecordRaw,RouteLocationNormalizedLoaded} from 'vue-router';

//主页
const home:RouteRecordRaw = {
  path:'/',
  //别名
  alias:'/main',
  name:'main',
  meta:{
    name:'首页',
  },
  //重定向
  /*    redirect:{
        name:'homepage'
      },*/
  component:()=>import('../views/sk-main/sk-main.vue'),
  children:[

  ]
};

/**
 * 1. 动态路由
 *    path: '/users/:id',这个:id就是动态的, 可以在/users用户页面中用$route.params.id访问
 */
const list:RouteRecordRaw = {
  path:'/users/:id',
  name:'list',
  meta:{
    name:'测试',
  },
  component:()=>import('../views/list/mine.vue'),
};

/**
 * 2.捕获错误路由
 *   捕获所有路由或者404Not found路由
 */
const notFound:RouteRecordRaw = {
  path:'/:pathMatch(.*)*',
  name:'notFound',
  meta:{
    name:'未找到该页面',
  },
  component:()=>import('../views/list/notFound.vue'),
};

/**
 * 3.路由的匹配   参数中自定义正则
 *   *在技术上也标志着一个参数是可选的，但 ? 参数不能重复。
 */
//匹配数字
const numberPage:RouteRecordRaw = {
  path:'/our/:orderId(\\d+)',
  name:'numberPage',
  meta:{
    name:'数字页面',
  },
  component:()=>import('../views/list/numberPage.vue'),
};
//多项重复自定义   /first/second/third，你应该用 *（0 个或多个）和 +（1 个或多个）将参数标记为可重复：
const allPages:RouteRecordRaw = {
  path:'/one/:chapters*',
  name:'all',
  meta:{
    name:'多项',
  },
  component:()=>import('../views/list/allPage.vue'),
};


const manyPages_right = ()=>import('../views/list/manyPages/right.vue');
const manyPages_left = ()=>import('../views/list/manyPages/left.vue');
const manyPages_center = ()=>import('../views/list/manyPages/center.vue');
const manyPages_main = ()=>import('../views/list/manyPages/main.vue');
const manyPages_main1 = ()=>import('../views/list/manyPages/main1.vue');
/**
 * 4.嵌套路由
 *   想同时展示多个视图不是嵌套展示    用到命名视图
 */
const manyPages:RouteRecordRaw = {
  path:'/manyPages',
  component:manyPages_main,
  children:[
    {
      path:'lang',
      components:{
        default:manyPages_center,
        left:manyPages_left,
        right:manyPages_right,
      }
    },
  ]
};
const manyPages1:RouteRecordRaw = {
  path:'/manyPages1',
  component:manyPages_main1,
  children:[
    {
      path:'lang1',
      components:{
        default:manyPages_right,
        center:manyPages_center,
        left:manyPages_left,
      }
    }
  ]
}

/**
 * 5.路由组件传参
 *   将props传递给路由组件
 */
const props:RouteRecordRaw = {
  path:'/user/:id',
  component:()=>import('../views/list/props/user.vue'),
  props: {
    id: 123,
    fun: (route: RouteLocationNormalizedLoaded) => ({query: route.query.value}),
  }
}

const guard = ()=>import('../views/list/guard/guard.vue');
const guard1 = ()=>import('../views/list/guard/one.vue');
const guard2 = ()=>import('../views/list/guard/two.vue');
const guard3 = ()=>import('../views/list/guard/three.vue');
const guard4 = ()=>import('../views/list/guard/four.vue');
/**
 * 6.导航守卫
 *   路由独享守卫
 */
const guards:RouteRecordRaw = {
  path: '/guard',
  component: guard,
  name: 'guard',
  meta: {
    name: '守卫',
  },
  //实现以下1跳到2失败,2跳到3失败,3跳到1失败
  //1可以跳到3,,2可以跳到1,3可以跳到2
  children:[
    {
      path: '/1',
      component: guard1,
      name: 'guard1',
      meta: {
        name: '守卫1',
      },
      beforeEnter:(to,from) => {
        if(from.name === 'guard3')
          //这个失败会导致页面路由不会变化
          return false;
      }
    },
    {
      path: '/2',
      component: guard2,
      name: 'guard2',
      meta: {
        name: '守卫2',
      },
      beforeEnter:(to,from) => {
        if(from.name === 'guard1')
          //这个失败会导致页面路由不会变化
          return false;
      }
    },
    {
      path: '/3',
      component: guard3,
      name: 'guard3',
      meta: {
        name: '守卫3',
      },
      beforeEnter:(to,from) => {
        if(from.name === 'guard2')
          //这个失败会导致页面路由不会变化
          return false;
        to.params = {path:from.path};
      }
    },
    {
      path: '/4',
      component: guard4,
      name: 'guard4',
      meta: {
        name: '守卫4',
      },
    }
  ]
};

/**
 * 7.路由元信息，比如验证是不是要验证才能进入该页面
 *   可以用于验证是否是会员啥的
 */
const routeMeta:RouteRecordRaw = {
  path:'/home',
  name:'home',
  meta:{
    name:'路由元首页',
    isLogin:false,
    requiresAuth:true
  },
  component:()=>import('../views/list/routeMeta/homepage.vue'),
  children:[
    {
      path:'works',
      meta:{
        name:'读者页面',
        isLogin:false,
        requiresAuth:true,
      },
      component:()=>import('../views/list/routeMeta/audience.vue'),
    },
    {
      path:'user',
      meta:{
        name:'用户个人页面',
        isLogin:true,
        requiresAuth:true,
      },
      component:()=>import('../views/list/routeMeta/users.vue'),
    },
    {
      path:'writer',
      meta:{
        name:'作者页面',
        isLogin:true,
        requiresAuth:false,
      },
      component:()=>import('../views/list/routeMeta/writer.vue'),
    },
  ]
};

const beforeNavigation = ()=>import('../views/list/nav/beforeNav.vue');
const afterNavigation = ()=>import('../views/list/nav/afterNav.vue');
const updateNavigation = ()=>import('../views/list/nav/updateNav.vue');
const child1 = ()=>import('../views/list/nav/children1.vue');
const child2 = ()=>import('../views/list/nav/children2.vue');
/**
 * 8. 数据获取
 *    有时候，进入某个路由后，需要从服务器获取数据。例如，在渲染用户信息时，你需要从服务器获取用户的数据。我们可以通过两种方式来实现：
 *
 * 导航完成之后获取：先完成导航，然后在接下来的组件生命周期钩子中获取数据。在数据获取期间显示“加载中”之类的指示。
 *
 * 导航完成之前获取：导航完成前，在路由进入的守卫中获取数据，在数据获取成功后执行导航。
 *
 * 从技术角度讲，两种方式都不错 —— 就看你想要的用户体验是哪种。
 */
const navs:RouteRecordRaw[] = [
  {
    name:'beforeNav',
    path:'/beforeNav',
    meta:{
      name:'导航后路由',
    },
    component:beforeNavigation,
  },
  {
    name:'afterNav',
    path:'/afterNav',
    meta:{
      name:'导航前路由',
    },
    component:afterNavigation,
  },
  {
    name:'updateNav',
    path:'/updateNav',
    meta:{
      name:'修改导航路由',
    },
    component:updateNavigation,
    children:[
      {
        name:'child1',
        path:'child1',
        meta:{
          name:'孩子1',
        },
        component:child1,
      },
      {
        name:'child2',
        path:'child2',
        meta:{
          name:'孩子2',
        },
        component:child2,
      },
    ]
  },
]

const myRoutes:RouteRecordRaw[] = [
  home,
  list,
  notFound,
  numberPage,
  allPages,
  manyPages,
  manyPages1,
  props,
  guards,
  routeMeta,
  ...navs,
]

export default myRoutes;
