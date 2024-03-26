<script setup>
import { ref } from 'vue';
import ContactForm from '../components/ContactForm.vue';

const resources = ref([
  {
    name: 'General Adoption Resources',
    link: 'https://www.petfinder.com/',
  },
  {
    name: 'ASPCA',
    link: 'https://www.akc.org/dog-breeds/rescue-network/',
  },
  {
    name: 'Fish Rescue',
    link: 'https://www.petfinder.com/cats/',
  },
  {
    name: 'Snake Rescue',
    link: 'https://www.petco.com/shop/en/petcostore/category/fish',
  },
  {
    name: 'Bird Rescue',
    link: 'https://www.petco.com/shop/en/petcostore/category/fish',
  },
])
</script>

<template>
  <div class="hero flex items-center bg-secondary relative">
    <div class="hero-content w-full m-auto text-center mb-4 p-10">
      <img src="../assets/images/logo.png" alt="logo" class="hero-logo m-auto z-10" />
      <h2 class="slogan mb-4 mt-4 text-sm md:text-2xl">Evidence-based pet care advice for every pet lover</h2>
      <div class="sm:flex justify-center sm:gap-4 w-full items-center">
        <button class="btn mb-2 sm:mb-0">Contact our "Pexperts"</button>
        <button class="btn-alt">About Us</button>
      </div>
    </div>
  </div>
  <div class="pt-36 pb-16">
    <div class="md:flex gap-10 items-center mr-auto ml-auto container">
      <div class="md:w-1/2 p-4">
        Pets are nature's gift to humanity. It has been scientifically proven that opening our homes and hearts to a pet increases our longevity and improves our overall quality of life as well as the lives of our pets.
      </div>
      <div class="md:w-1/2 ml-5 mr-5 md:m-0 min-h-[200px] md:h-[300px] overflow-hidden par-1-image rounded-lg" >
      </div>
    </div>
  </div>
  <div class="pb-16">
    <div class="md:flex gap-10 md:flex-row-reverse items-center mr-auto ml-auto container">
      <div class="w-full md:w-1/2 p-4">
        At Pet Paradigm Professionals, our mission is to offer resources to help you care for your furry, scaly, feathery, and slimy loved ones. Our pet experts—or “Pexperts”—have been working with pet owners and professionals alike for the past twelve years. They offer one-on-one consultations with current and prospective pet owners as well as group presentations designed for veterinary, pet shelter, and pet breeding professionals.
      </div>
      <div class="md:w-1/2 ml-5 mr-5 md:m-0 min-h-[200px] md:h-[300px] overflow-hidden par-2-image rounded-lg" >
      </div>
    </div>
  </div>
  <div class="pb-36">
    <div class="p-4 mr-auto ml-auto container text-center">
      Looking for basic pet care advice for the most common type of pets? Need additional help determining which type of pet is right for you and your family? We will work with you and provide tailored evidence-based pet care to ensure lifelong health and wellness of your new companion. 
    </div>
  </div>
  <div class="bg-secondary pt-12">
    <div class="text-center">
      <h2 class="">Looking for your new best friend?</h2>
      <p>The following organizations can help you find and adopt the perfect companion:</p>
    </div>
    <div>
      <ul class="p-4 pb-16 flex flex-wrap justify-center gap-4 container ml-auto mr-auto">
        <li class="w-[150px]" v-for="resource in resources" :key="resource.name">
          <a :href="resource.link" class="resource-link"><span>{{ resource.name }}</span></a>
        </li>
      </ul>
    </div>
  </div>
  <div class="container flex flex-col justify-center ml-auto mr-auto">
    <p class="p-4 pt-16 pb-8">
      We are also happy to help you navigate the adoption process! We will guide you through each step in the process from determining which type of pet is best suited for your family and home environment, to completing the necessary paperwork, to bringing your new loved one home. Please fill out our contact form to request a consultation. We will contact you within 48 hours to schedule a consultation. All fields are required.
    </p>
    <h2 class="text-center font-bold text-secondaryDark pb-4">CONTACT OUR PEXPERTS</h2>
    <ContactForm />
  </div>
</template>

<style scoped>
.hero {
  background-image: url('../assets/images/business1.jpg');
  background-size: cover;
  background-position: center center;
  width: 100%;
  max-height: 50vh;
  min-height: 300px;
  aspect-ratio: 16/9;
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
.hero-small{
  background-image: url('../assets/images/business2.jpg');
  background-size: cover;
  background-position: center center;
  height: 700px;
}
.hero-small::after {
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
.hero-logo {
  max-height: 20vw;
}
.slogan {
  line-height: 1;
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

.par-1-image {
  background-image: url('../assets/images/dogBlackWhite.jpg');
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
}

.par-2-image {
  background-image: url('../assets/images/catCouch.jpg');
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
}

.resource-link {
  @apply p-4 bg-white hover:bg-secondaryDark hover:text-white mt-4 h-[100px] text-center flex items-center justify-center border-2 border-black;
}
</style>
