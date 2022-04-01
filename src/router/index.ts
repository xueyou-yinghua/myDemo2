import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

const main = ()=>import('../views/sk-main/sk-main.vue');
const list = ()=>import('../views/list/mine.vue');
const notFound = ()=>import('../views/list/notFound.vue');
const one = 123;

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
  }
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


