<script setup>
import { RouterView } from 'vue-router'
import TheNav from './components/TheNav.vue'
</script>

<template>
  <header>
    <TheNav />
  </header>

  <body class="">
    <RouterView />
  </body>
  <footer></footer>
</template>

<style scoped></style>
