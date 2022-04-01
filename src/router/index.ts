import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

const main = ()=>import('../views/sk-main/sk-main.vue');
const list = ()=>import('../views/list/mine.vue');

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

    children:[

    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

});

router.beforeEach((to, from, next) => {
  document.title = to.meta.name? (to.meta.name as string): '加载中...';


  next();
})


export default router;


