<script setup></script>

<template>
  <div class="hero flex-col items-center m-auto bg-secondary p-10 relative">
    <div
      class="hero-content w-full m-auto text-center mb-4 flex-col justify-center items-center p-10"
    >
      <img src="../assets/images/logo.png" alt="logo" class="m-auto z-10" />
      <h2 class="mb-4 mt-4">Evidence-based pet care advice for every pet lover</h2>
      <div class="flex justify-center gap-4 w-full items-center">
        <button class="btn">Contact our "Pexperts"</button>
        <button class="btn-alt">About Us</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-image: url('../assets/images/hero.jpg');
  background-size: cover;
  background-position: center center;
  height: 500px;
}
.hero::after {
  content: '';
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  transition: all 0.3s ease;
}

.hero-content {
  position: absolute;
  z-index: 10;
  opacity: 1;
}

.btn {
  @apply bg-primaryDark text-white font-bold py-2 px-4 rounded;
  transition: all 0.3s ease;
}

.btn:hover {
  @apply bg-primary;
}

.btn-alt {
  @apply bg-secondaryDark text-white font-bold py-2 px-4 rounded;
  transition: all 0.3s ease;
}
.btn-alt:hover {
  @apply bg-secondary outline outline-1 outline-primaryDark text-secondaryDark;
}
</style>
