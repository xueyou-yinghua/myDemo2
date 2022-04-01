<script lang="ts" setup>
/**
 * 常规参数只匹配 url 片段之间的字符，用 / 分隔。如果我们想匹配任意路径，我们可以使用自定义的 路径参数 正则表达式，在 路径参数 后面的括号中加入 正则表达式 :
 * 输入 http://localhost:3000/gomine/123/wqdqd  会出现 [ "gomine", "123", "wqdqd" ]
 *
 */
</script>


<template>
  {{$route.params.pathMatch}}
</template>
