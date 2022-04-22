<script lang="ts" setup>
import {ref} from "vue";
import {onBeforeRouteLeave, useRoute} from "vue-router";

const route = useRoute();

console.log('to.path',route.path);
console.log('from.path',route.params.path);

const start = ref('开始了3');
const leave = ref('离开了3');

console.log(start.value);

start.value = '开始了修改了3';

onBeforeRouteLeave((to, from) => {
  console.log(leave.value);
})


</script>


<template>
  {{start}}
  <h1>守卫3</h1>
</template>
