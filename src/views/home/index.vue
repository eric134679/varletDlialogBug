<template>
<!--  <nav-bar :language="false" :left-btn="false"></nav-bar>-->
  <var-dialog
      title="兰亭序"
      message="兰亭临帖 行书如行云流水"
      v-model:show="show"

  />
<!--  <tab-bar></tab-bar>-->
</template>

<script setup>
const show = ref(false)
import TabBar from "@/components/TabBar/TabBar.vue";
import NavBar from "@/components/NavBar/NavBar.vue";

</script>