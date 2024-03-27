<script setup>
import ContactForm from '../components/ContactForm.vue';
</script>

<template>
  <div>
    <img class="ml-auto mr-auto" src="../assets/images/heroLogo.png" alt="">
    <h2 class="text-center pl-4 pr-4 mb-8">Evidence-based pet care advice for every pet lover</h2>
    <p class="container ml-auto mr-auto mb-8 pl-4 pr-4">At Pet Paradigm Professionals, our mission is to offer resources to help you care for your furry, scaly, feathery, and slimy loved ones. Our pet experts—or “Pexperts”—have been working with pet owners and professionals alike for the past twelve years. They offer one-on-one consultations with current and prospective pet owners as well as group presentations designed for veterinary, pet shelter, and pet breeding professionals.</p>
    <div class="bg-secondary p-4 pt-16 pb-16 mb-16">
      <div class="container ml-auto mr-auto">
        <h3 class="text-lg font-bold">Values</h3>
        <p class="mb-5 ml-5">Paradigm Pet Professionals has 12 years’ experience working with pet owners, certifications in pet health and nutrition, and customer recognition for outstanding support </p>
        <h3 class="text-lg font-bold">Services</h3>
        <p class="ml-5">Virtual consultations and presentations<br> One-on-one consultations concerning individual pets<br> Group presentations regarding general pet care (can be tailored to the needs of the group)</p>
      </div>
    </div>
    <div class="pl-4 pr-4">
      <ContactForm />
    </div>
  </div>
</template>
