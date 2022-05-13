<script lang="ts" setup>
</script>


<template>
  <div class="sk-transition">
    <router-link to="/oneTransition/trans-one">第一个页面</router-link> <p></p>
    <router-link to="/oneTransition/trans-two">第二个页面</router-link>
    <router-view v-slot="{Component,route}">
      <transition :name="route.meta.transition||'fade'">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>
