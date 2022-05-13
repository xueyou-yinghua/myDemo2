<script lang="ts" setup>

import {onBeforeRouteUpdate, useRoute, useRouter} from "vue-router";
import {computed, onMounted, watch} from "vue"

const route = useRoute();
const router = useRouter();

watch(()=>route.params,async (newVal,oldVal)=>{
  console.log('这是watch');    //这个在routerUpdate后产生
})

onMounted(()=>{
  console.log('这是onMounted');
  //因为在自己的路由上跳转mounted只会触发一次

})

onBeforeRouteUpdate(async (to, from) => {
  console.log('这是updateRouter');//这个可以跳转好多次  可以与watch  params  当中用一个即可   这个可以延迟跳转路由

  function getData(number:number) {
    number = number%4+1;

    function judge(number:number) {
      let index = number;
      let num = 500;
      while (number!=0){
        index = index+number*num;
        num = num*0.8;
        number--;
      }
      return index;
    }

    number = judge(number);
    console.log('number',number);
    return new Promise(resolve => {
      setTimeout(()=>{
        resolve('123');
        console.log('搜索完毕');
      },number);
    })
  }

  await getData((to.params.number as unknown as number));
})


const click = (item:number)=>{
  router.push(`/updateNav1/${item}`);
}
</script>


<template>
  <button v-for="item in 15" @click="click(item)">
    click{{item}}
  </button>
  {{$route.params}}
</template>
