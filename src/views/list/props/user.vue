<script lang="ts" setup>


import {defineProps} from "vue";

const props = defineProps({
  id:{
    type:Number,
    default:0,
  }
})
console.log(props.id)
</script>


<template>
  <div>
    User{{id}}
  </div>
</template>
