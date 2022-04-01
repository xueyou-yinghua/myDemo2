<script lang="ts" setup>/**
 * 这是动态路由例子，
 * 相同的组件实例将被重复使用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会被调用。
 *
 * 要对同一个组件中参数的变化做出响应的话，你可以简单地 watch $route 对象上的任意属性，在这个场景中，就是 $route.params ：
 */
import {useRoute, useRouter} from "vue-router";
import {ref, watch} from "vue";

const route = useRoute();
const router = useRouter();

watch(()=>route.params,(toParams,previousParams)=>{
  console.log('路由变化了',toParams.id)

})
const value = ref(123);

const clickMethod = ()=>{
/*  value.value+= 1;*/
  router.push(`/users/one${value.value++}`);
}


</script>


<template>
  <button @click="clickMethod">
    点击我
  </button>

  <router-view/>
{{$route.params.id}}
</template>
