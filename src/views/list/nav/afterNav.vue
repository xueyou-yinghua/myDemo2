<script lang="ts" setup>

import {onMounted, reactive} from "vue";
import { useRouter} from "vue-router";

const router = useRouter();

type p_type = {
  loading: boolean,
  data: number|string|null,
  error: any
}

const params = reactive<p_type>({
  loading: false,
  data: null,
  error: null,
})

function getData() {
  console.log("开始获取!");
  return new Promise((resolve, reject) => {
    params.loading = true;
    setTimeout(()=>{
      params.data = '521356yh';
      resolve('123');
    },3000)
  });
}

onMounted(async ()=>{
  await getData();
  console.log('获取完毕')
})

const click = ()=>{
  router.push('/');
}
</script>


<template>
  <button @click="click">点击我</button>
  {{params.data}}
</template>
