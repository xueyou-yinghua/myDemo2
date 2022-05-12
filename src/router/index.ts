import {createRouter, createWebHistory, RouteRecordRaw,RouteLocationNormalizedLoaded} from 'vue-router';
import myRoutes from "./myRoutes";
import {isLogin, isWriter} from "./isLogin";

const router = createRouter({
  history: createWebHistory(),
  routes:myRoutes,
});



//先全局守卫然后单个守卫
//全局前置钩子   全局前置守卫
router.beforeEach( (to, from,next) => {
  //先判断是否有两个属性值
  if((to.meta.hasOwnProperty('isLogin') && to.meta.hasOwnProperty('requiresAuth'))
    && (to.meta.isLogin&&isLogin()||(!to.meta.requiresAuth&&isWriter()))){
    next({name:'home'});
  }else{
    next();
  }
})

//全局解析守卫   获取数据或执行任何其他操作（如果用户无法进入页面时你希望避免执行的操作）的理想位置。
router.beforeResolve(async to=>{
  document.title = to.meta.name? to.meta.name: '加载中...';
})

//全局后置钩子  对于分析、更改页面标题、声明页面等辅助功能以及许多其他事情都很有用
router.afterEach((to, from) => {
  //document.title = to.meta.name? (to.meta.name as string): '加载中...';
})


export default router;


