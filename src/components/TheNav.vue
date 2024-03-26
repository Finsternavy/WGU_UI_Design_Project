<script setup></script>
<template>
  <div class="w-full bg-secondary border-b-2 border-primaryDark">
    <div class="max-w-[1200px] w-full flex items-center justify-between px-4 py-2 m-auto">
      <div class="w-fit-content">
        <router-link to="/" class="max-w-4 overflow-hidden">
          <img src="../assets/images/logo.png" alt="logo" class="max-w-[100px]" />
        </router-link>
      </div>
      <div class="w-auto flex gap-4">
        <router-link to="/dogs" class="nav-btn btn-hover">Dogs</router-link>
        <router-link to="/cats" class="nav-btn btn-hover">Cats</router-link>
        <router-link to="/fish" class="nav-btn btn-hover">Fish</router-link>
      </div>
      <div class="w-fit-content">
        <router-link to="/about-us" class="nav-btn-alt">About Us</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-btn {
  @apply px-2 py-1 h-full rounded-md text-primaryDark uppercase;
  transition: all 0.3s ease;
}
.btn-hover {
  @apply hover:bg-secondaryDark hover:text-white;
}
.nav-btn-alt {
  @apply px-2 py-1 rounded-md bg-secondary text-primaryDark uppercase;
  transition: all 0.3s ease;
}

.nav-btn-alt:hover {
  @apply bg-secondaryDark text-white;
}
</style>
