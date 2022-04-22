<script lang="ts">
import {defineComponent, ref} from 'vue'
export default defineComponent({
  setup(){

    const start = ref('开始了4');
    const leave = ref('离开了4');


    return{
      start,
      leave,
    }
  },
  //组件实例创建前
  beforeRouteEnter(to,from,next){
    console.log('to的路由',to.path)
    console.log('from的路由',from.path)
    next((vm:any)=>{
      console.log(vm.start)
      vm.start = '开始了被修改了4'
    })
  },
  beforeRouteLeave(to,from){
    console.log(this.leave);
  },
})
</script>


<template>
  {{start}}
  <h1>守卫4</h1>
</template>
