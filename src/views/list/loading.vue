<script lang="ts" setup>

import {defineProps} from "vue";

const props = defineProps({
  isWatch: Boolean,
});
</script>


<template>
  <div v-if="isWatch">
    <div class="loadingio-spinner-spinner-cexw5sx85je"><div class="ldio-ot26j3uyb4o">
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div></div>
  </div>
</template>
