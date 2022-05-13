import 'vue-router'

declare module 'vue-router'{
  interface RouteMeta {
    //页面名字
    name: string,
    //是否登录了
    isLogin?: boolean,
    //是否是所有人可以阅读
    requiresAuth?:boolean,
    //孩子的名字合集
    childrenNamed?:string[],
    //过渡动效的名字
    transition?:string,
  }
}