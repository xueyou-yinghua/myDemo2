<script lang="ts" setup>
import Loading from "../loading.vue";
import {reactive, ref,watch} from "vue";
import Error from "../error.vue";

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

const num = ref('');
const index = ref(0);

function getData() {
  console.log("开始查询!");
  params.data = null;
  params.error = null;
  return new Promise((resolve, reject) => {
    params.loading = true;
    setTimeout(()=>{
      if(num.value==="521356")
        params.error = '这是错误账号';
      else
        params.data = num.value+'  这是找到的数据';
      resolve('123');
    },3000)
  })
}

let time = 0;

watch(num,(newVal,oldVal)=>{
  console.log(1);
  index.value = 1;
  clearTimeout(time);
  time = setTimeout(()=>{
    index.value = 0;
  },1500)
});

watch(index,async (newVal,oldVal)=>{
  if(newVal === 0){
    console.log(2);
    await getData();
    params.loading = false;
  }
})


</script>


<template>
  <div class="post">
    <input type="text" v-model="num">
    <Loading :is-watch = "params.loading"></Loading>
    <Error :is-watch="params.error!==null">
      {{params.error}}
      <p>当前数据库没有该数据</p>
    </Error>

    <div class="sk-before-nav-content" v-if="params.data!==null">
      <p>{{params.data}}</p>
    </div>
  </div>
</template>
