<script lang="ts" setup>


import {defineProps} from "vue";
import {RouteLocationNormalizedLoaded} from 'vue-router';

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
</script>


<template>
  <div>
    User{{id}}
    {{fun($route)}}
  </div>
</template>
