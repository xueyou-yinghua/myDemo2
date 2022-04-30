<script lang="ts" setup>
/**
 * 导航被触发。
 * 在失活的组件里调用 beforeRouteLeave 守卫。
 * 调用全局的 beforeEach 守卫。
 * 在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。
 * 在路由配置里调用 beforeEnter。
 * 解析异步路由组件。
 * 在被激活的组件里调用 beforeRouteEnter。
 * 调用全局的 beforeResolve 守卫(2.5+)。
 * 导航被确认。
 * 调用全局的 afterEach 钩子。
 * 触发 DOM 更新。
 * 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。
 */
//路由守卫
import {useRouter,onBeforeRouteUpdate} from "vue-router";

const router = useRouter();




//修改路由时最先执行的，但是如果是直接从网址进入子路由，这个不会执行
onBeforeRouteUpdate((to, from, next) => {
  console.log('修改后的路由',to.path);
  console.log('修改前的路由', from.path);
  next();
})

const click1 = ()=>{
  router.push('/1')
}
const click2 = ()=>{
  router.push('/2')
}
const click3 = ()=>{
  router.push('/3')
}
const click4 = ()=>{
  router.push('/4')
}
</script>


<template>
  <h1>守卫总页面</h1>
  <button @click="click1">守卫1的路由</button>
  <button @click="click2">守卫2的路由</button>
  <button @click="click3">守卫3的路由</button>
  <button @click="click4">守卫4的路由</button>
  <router-view/>
</template>
