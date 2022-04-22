<script lang="ts" setup>
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
