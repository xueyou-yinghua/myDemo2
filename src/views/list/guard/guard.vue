<script lang="ts" setup>
//路由守卫
import {useRouter} from "vue-router";

const router = useRouter();


const click1 = ()=>{
  router.push('/1')
}
const click2 = ()=>{
  router.push('/2')
}
const click3 = ()=>{
  router.push('/3')
}
</script>


<template>
  <h1>守卫总页面</h1>
  <button @click="click1">守卫1的路由</button>
  <button @click="click2">守卫2的路由</button>
  <button @click="click3">守卫3的路由</button>
  <router-view/>
</template>
