<script lang="ts" setup>
import {defineProps} from "vue";

const props = defineProps({
  isWatch: Boolean,
});
</script>


<template>
  <div class="sk-error" v-if="isWatch">
    <slot></slot>
  </div>
</template>
