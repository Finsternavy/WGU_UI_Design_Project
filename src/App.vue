<script setup>
import { RouterView } from 'vue-router'
import TheNav from './components/TheNav.vue'
</script>

<template>
  <nav class="padding-none sticky top-0 z-40 p-0 m-0 bg-red-400">
    <TheNav />
  </nav>
  
  <body class="">
    <RouterView />
  </body>
  <footer></footer>
</template>

<style scoped></style>
