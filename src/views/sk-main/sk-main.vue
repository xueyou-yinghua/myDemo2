<script lang="ts" setup>

import {RouteRecordRaw, useRouter} from "vue-router";

const router = useRouter();


const routes = router.getRoutes();
const myRoutes:RouteRecordRaw[] = router.getRoutes();

for(let i = 0;i<routes.length;i++) {

  if (routes[i].meta.childrenNamed) {
    (routes[i].meta.childrenNamed as string[]).forEach(item => {

      for (let j = 0; j < myRoutes.length; j++) {

        if (myRoutes[j].name === item)
          myRoutes.splice(j, 1);
      }
    })
  }
  //去掉别名
  if (routes[i].aliasOf?.name) {
    let name = routes[i].aliasOf?.name;
    for (let j = 0; j < myRoutes.length; j++) {

      if (myRoutes[j].name === name)
        myRoutes.splice(j, 1);
    }
  }
}

for(let i = 0;i<myRoutes.length;i++) {
  //去除掉第一个/
  let path = myRoutes[i].path;
  if(path.includes(':')){
    if(path.includes('pathMatch')){
      myRoutes[i].path='/521356'
    }else if (path.includes('d+')){
      myRoutes[i].path = path.substring(0,path.lastIndexOf('/')+1)+'21345';
    }else{
      myRoutes[i].path = path.substring(0,path.lastIndexOf('/')+1)+'sakura';
    }
  }
}

const click = (path:string) =>{
  router.push(path);
}
</script>


<template>
  <div class="sk-button" v-for="item in myRoutes">
    <button @click="click(item.path)">
      {{item.meta.name||item.name}}
    </button>
  </div>
  <router-view/>
</template>
