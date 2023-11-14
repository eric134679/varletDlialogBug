<template>
  <var-bottom-navigation v-model:active="LocalStore.tabBarIndex" fixed @change="changeTabBar">
    <var-bottom-navigation-item  :label="$t('comp.tabBar.home')">
      <template #icon>
        <icon name="la-dragon-solid"/>
      </template>
    </var-bottom-navigation-item>
    <var-bottom-navigation-item  :label="$t('comp.tabBar.need')">
      <template #icon>
        <icon name="la-bell"/>
      </template>
    </var-bottom-navigation-item>
    <var-bottom-navigation-item :label="$t('comp.tabBar.mine')">
      <template #icon>
        <icon name="la-user"/>
      </template>
    </var-bottom-navigation-item>
  </var-bottom-navigation>
</template>
<script setup>
import {useGetLocalStore} from "@/store/local.js";
const router = useRouter()
const route = useRoute()
const LocalStore = useGetLocalStore()

function changeTabBar(index){
  switch (index) {
    case 0: router.push('/');break;
    case 1: router.push('/need');break;
    case 2: router.push('/user');break;
  }
}
onMounted(()=>{
  switch (route.path) { // 根据当前路径设置tabBar的index
    case '/': LocalStore.tabBarIndex = 0;break;
    case '/need': LocalStore.tabBarIndex = 1;break;
    case '/user': LocalStore.tabBarIndex = 2;break;
  }
})

</script>