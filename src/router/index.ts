import {createRouter, createWebHistory, RouteRecordRaw,RouteLocationNormalizedLoaded} from 'vue-router';
import myRoutes from "./myRoutes";
import {isLogin, isWriter} from "./isLogin";

/**
 * 1. history 路由历史记录
 * 2. linkActiveClass  默认:router-link-active
 * 3. linkExactActiveClass  默认:router-link-exact-active
 * 4. parseQuery 和 stringifyQuery构建选项
 *    parseQuery 和 stringifyQuery构建选项用于提供query的解析/反解析函数。vue 会默认处理，如果有特定需求，可以借助这两个配置项。
 * 5. routes  初始路由列表
 * 6. scrollBehavior   页面之间导航时的滚动函数,可以返回一个Promise来延迟滚动
 */
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass:'sk-active-link',
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


