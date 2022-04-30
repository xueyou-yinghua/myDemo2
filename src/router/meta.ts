import 'vue-router'

declare module 'vue-router'{
  interface RouteMeta {
    name: string,
    //是否登录了
    isLogin?: boolean,
    //是否是所有人可以阅读
    requiresAuth?:boolean,
  }
}