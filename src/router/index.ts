import {createRouter, createWebHistory, RouteRecordRaw,RouteLocationNormalizedLoaded} from 'vue-router';

const main = ()=>import('../views/sk-main/sk-main.vue');
const list = ()=>import('../views/list/mine.vue');
const notFound = ()=>import('../views/list/notFound.vue');
const numberPage = ()=>import('../views/list/numberPage.vue');
const allPage = ()=>import('../views/list/allPage.vue');
const manyPages_right = ()=>import('../views/list/manyPages/right.vue');
const manyPages_left = ()=>import('../views/list/manyPages/left.vue');
const manyPages_center = ()=>import('../views/list/manyPages/center.vue');
const manyPages_main = ()=>import('../views/list/manyPages/main.vue');
const manyPages_main1 = ()=>import('../views/list/manyPages/main1.vue');
const props_user = ()=>import('../views/list/props/user.vue');
const guard = ()=>import('../views/list/guard/guard.vue');
const guard1 = ()=>import('../views/list/guard/one.vue');
const guard2 = ()=>import('../views/list/guard/two.vue');
const guard3 = ()=>import('../views/list/guard/three.vue');
const guard4 = ()=>import('../views/list/guard/four.vue');

/**
 * 1. 动态路由
 *    path: '/users/:id',这个:id就是动态的, 可以在/users用户页面中用$route.params.id访问
 */

const routes:RouteRecordRaw[] = [
  {
    path:'/',
    alias:'/home',
    name:'main',
    meta:{
      name:'首页',
    },
/*    redirect:{
      name:'homepage'
    },*/

    component:main,

    children:[

    ]
  },
  //例1 动态路由
  {
    path:'/users/:id',
    name:'list',
    meta:{
      name:'测试',
    },
    component:list,
  },
  //捕获所有路由或者404Not found路由
  {
    path:'/:pathMatch(.*)*',
    name:'notFound',
    meta:{
      name:'未找到该页面',
    },
    component:notFound,
  },
  //路由的匹配   参数中自定义正则
  //匹配数字
  {
    path:'/our/:orderId(\\d+)',
    name:'numberPage',
    meta:{
      name:'数字页面',
    },
    component:numberPage,
  },
  //  /first/second/third，你应该用 *（0 个或多个）和 +（1 个或多个）将参数标记为可重复：
  {
    path:'/one/:chapters*',
    name:'all',
    meta:{
      name:'多项',
    },
    component:allPage,
  },
  //* 在技术上也标志着一个参数是可选的，但 ? 参数不能重复。

  //想同时展示多个视图不是嵌套展示    用到命名视图
  {
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
  },
  {
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
  },

  //将props传递给路由组件
  {
    path:'/user/:id',
    component:props_user,
    props: {
      id: 123,
      fun: (route: RouteLocationNormalizedLoaded) => ({query: route.query.value}),
    }
  },

  //路由独享守卫
  {
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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,

});

//先全局守卫然后单个守卫
//全局前置钩子   全局前置守卫
router.beforeEach( (to, from) => {

})

//全局解析守卫   获取数据或执行任何其他操作（如果用户无法进入页面时你希望避免执行的操作）的理想位置。
router.beforeResolve(async to=>{
  document.title = to.meta.name? (to.meta.name as string): '加载中...';
})

//全局后置钩子  对于分析、更改页面标题、声明页面等辅助功能以及许多其他事情都很有用
router.afterEach((to, from) => {
  //document.title = to.meta.name? (to.meta.name as string): '加载中...';
})


export default router;


