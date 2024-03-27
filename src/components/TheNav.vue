<script setup>
import { ref } from 'vue';

const activeRoute = ref('');

const setActiveRoute = (route) => {
  activeRoute.value = route;
}
</script>
<template>
  <div class="nav-after w-full bg-primaryDark border-b-2 z-30 flex">
    <div class="w-[200px] bg-secondary pl-10 pr-10 pt-0.5 rounded-r-full">
      <router-link @click="setActiveRoute('/')" to="/" class="max-w-4 overflow-hidden">
        <img src="../assets/images/logo.png" alt="logo" class="max-w-[90px] pt-0.5" />
      </router-link>
    </div>
    <div class="container flex items-center justify-center px-4 py-2 m-auto">
      <div class="w-auto flex gap-4">
        <router-link @click="setActiveRoute('/dogs')" to="/dogs" class="nav-btn btn-hover" :class="{'active': activeRoute === '/dogs'}">Dogs</router-link>
        <router-link @click="setActiveRoute('/cats')" to="/cats" class="nav-btn btn-hover" :class="{'active': activeRoute === '/cats'}">Cats</router-link>
        <router-link @click="setActiveRoute('/fish')" to="/fish" class="nav-btn btn-hover" :class="{'active': activeRoute === '/fish'}">Fish</router-link>
      </div>
    </div>
    <div class="w-[200px] flex items-center justify-center bg-secondary rounded-l-full hover:bg-secondaryDark overflow-hidden">
      <router-link @click="setActiveRoute('/about-us')" to="/about-us" class="nav-btn-alt flex items-center justify-center" :class="{'active': activeRoute === '/about-us'}">
        <span>About Us</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.active {
  @apply !bg-primary !text-white;
}

.nav-btn {
  @apply px-2 py-1 h-full rounded-md text-white uppercase;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.btn-hover {
  @apply hover:bg-secondaryDark hover:text-white;
}
.nav-btn-alt {
  @apply px-2 py-1 bg-secondary text-primaryDark uppercase h-full w-full;
  transition: all 0.3s ease;
}

.nav-btn-alt:hover {
  @apply bg-secondaryDark text-white;
}

.clip-right {
  clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%);
}

.clip-left {
  clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%);
}

</style>
