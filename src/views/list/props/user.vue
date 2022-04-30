<script lang="ts" setup>
import {defineProps} from "vue";
import {RouteLocationNormalizedLoaded, useRoute} from 'vue-router';

const route = useRoute();

const props = defineProps({
  id:{
    type:Number,
    default:0,
  },
  fun:{
    type:Function,
    default:(id: RouteLocationNormalizedLoaded)=>id
  }
})

console.log(props.fun(route));
</script>


<template>
  <div>
    User{{id}}
    {{fun($route)}}
  </div>
</template>
