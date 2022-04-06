import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

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

  //想同事展示多个视图不是嵌套展示    用到命名视图
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,

});

//全局前置钩子
router.beforeEach( (to, from) => {
})
//全局后置钩子
router.afterEach((to, from) => {
  document.title = to.meta.name? (to.meta.name as string): '加载中...';
})


export default router;


