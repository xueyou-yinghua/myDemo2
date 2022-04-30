<script lang="ts" setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const text = ref('');

const a_login = ()=>{
  if(!localStorage.getItem('login')&&!localStorage.getItem('inform')){
    localStorage.setItem('login','2326325300');
    localStorage.setItem('inform','1');
    text.value = '读者登录成功'
  }else{
    text.value = '已登录先退出'
  }
}

const w_login = ()=>{
  if(!localStorage.getItem('login')&&!localStorage.getItem('inform')){
    localStorage.setItem('login','23263253');
    localStorage.setItem('inform','2');
    text.value = '作者登录成功'
  }else{
    text.value = '已登录先退出'
  }
}

const deLogin = ()=>{
  localStorage.removeItem('login');
  localStorage.removeItem('inform');
  text.value = '退出登录了';
  router.push('/home');
}

const click = (key:number)=>{
  switch (key) {
    case 1:
      router.push('/home/works');
      break;
    case 2:
      router.push('/home/user');
      break;
    case 4:
      router.push('/home');
      break;
    default:
      router.push('/home/writer');
      break;
  }
}
</script>


<template>
  <button @click="a_login">读者登录</button>
  <br>
  <button @click="w_login">作者登录</button>
  <br>
  <button @click="deLogin">退出登录</button>
  <h1>{{text}}</h1>
  <button @click="click(2)">用户中心</button>
  <button @click="click(3)">作者创作页面</button>
  <button @click="click(1)">作品欣赏页面</button>
  <button @click="click(4)">home</button>
  <router-view/>
</template>
