<script lang="ts" setup>

import {useRouter} from "vue-router";

const router = useRouter();

const click = ()=>{
  router.push('/guard')
}
</script>


<template>
  12345
  <button @click="click()">click</button>
  <router-view/>
</template>
