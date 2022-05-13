<script lang="ts" setup>

import {onBeforeRouteUpdate, useRoute, useRouter} from "vue-router";
import {onMounted, reactive, ref} from "vue";
import Loading from "../loading.vue";
import Error from "../error.vue";
const [route,router] = [useRoute(),useRouter()];


type p_type = {
  loading: boolean,
  data: number|string|null,
  error: any
}

const judge = ref(true);

const params = reactive<p_type>({
  loading: false,
  data: null,
  error: null,
})

function getData(path:string) {
  console.log("开始查询!");
  params.data = null;
  params.error = null;
  return new Promise((resolve, reject) => {
    params.loading = true;
    if(path === '/updateNav/child1'){
      params.data = '这是孩子1该有的组件的内容';
    }else if (path === '/updateNav/child2'){
      params.data = '这是孩子2该有组件的内容';
    }else{
      params.error = '错误'
    }
    setTimeout(()=>{
/*      if(path === '/updateNav/child1'){
        params.data = '这是孩子1该有的组件的内容';
        resolve('123');
      }else if (path === '/updateNav/child2'){
        params.data = '这是孩子2该有组件的内容';
        resolve('123');
      }else{
        params.error = '错误'
        reject('123')
      }*/
      resolve('123');
    },1500)
  })
}

onMounted(async ()=>{
  judge.value = false;
  await getData(route.path);
  judge.value = true;
  params.loading = false;
  console.log('查询完毕')
})


onBeforeRouteUpdate(async (to,from) =>{
  await getData(to.path);
  params.loading = false;
  console.log('查询完毕')
})
</script>


<template>
  <router-link to="/updateNav/child1">
    <button>child1</button><p></p>
  </router-link>
  <router-link to="/updateNav/child2">
    <button>child2</button>
  </router-link>
  <p>{{params.data}}</p>
  <router-view v-if="params.data!==null&&judge"/>
  <Loading :is-watch="params.loading"></Loading>
  <Error :is-watch="params.error!==null">
    {{params.error}}
    <p>当前数据库没有该数据</p>
  </Error>
</template>
