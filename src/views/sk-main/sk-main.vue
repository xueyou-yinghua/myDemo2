<script lang="ts" setup>
import {onBeforeMount, onMounted} from "vue";
import {} from 'vue-router'

async function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(123);
    },2000)
  })
}
console.log('加载中...')


let  i = await wait();
console.log('加载完');
onBeforeMount(async ()=>{
  console.log('加载中...')


  let  i = await wait();
  console.log('加载完');
})

onMounted(async ()=>{
  console.log('加载中1...')


  let  i = await wait();
  console.log('加载完1');
})

</script>


<template>
  <router-view/>
</template>
