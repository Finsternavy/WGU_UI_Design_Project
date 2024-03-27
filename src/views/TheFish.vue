<script setup>
import { ref } from 'vue';
import InfoAccordion from '../components/InfoAccordion.vue';
import ContactForm from '../components/ContactForm.vue';
const active = ref(null);
const data = [
  {
    id: 1,
    title: 'Freshwater Fish',
    content: [
      "There are several freshwater fish to choose from when setting up your aquarium, but it is best to consult with a “Pexpert” to ensure your fish will get along! No matter the species, ensure your fish are suited for a freshwater environment by investing in a water testing kit. Follow these general water chemistry guidelines to ensure your fish will adapt well to your aquarium and avoid ingesting toxins that can harm or kill your fish:",
      "<ul style='padding-inline: 20px;'><li>&#8226 pH Level: 6.8–7.6 (7.0 is considered neutral)</li><li>&#8226 Ammonia: any level above zero is harmful to fish</li><li>&#8226 Nitrates: 5 to 10 ppm</li><li>&#8226 Nitrites: less than 0.5 ppm</li></ul>"
    ],
    active: false
  },
  {
    id: 2,
    title: 'Saltwater Fish',
    content: [
      "Saltwater fish also offer several options when it comes to choosing among species for your aquarium. As with freshwater fish, consult with a “Pexpert” to ensure your fish will get along are suited for a saltwater environment. Following these general guidelines to avoid dangerous water conditions and ensure the appropriate salinity level for your fishies:",
      "<ul style='padding-inline: 20px;'><li>&#8226 Salinity: 1.020–1.028 sg</li><li>&#8226 pH Level: 7.6–8.4 (7.0 is considered neutral)</li><li>&#8226 Ammonia: any level above 0.1 ppm requires attention</li><li>&#8226 Nitrates: 10 to 40 ppm</li><li>&#8226 Nitrites: less than 0.2 ppm</li></ul>",
      "<span style='padding-left: 20px'>For more information on making your tap water safe for your fish, please visit:<br><a href='http://www.theaquariumwiki.org/wiki/How_to_make_tap_water_safe_for_fish' target='_blank' style='color: blue; margin-bottom: 0!important; padding-left: 20px'>http://www.theaquariumwiki.org/wiki/How_to_make_tap_water_safe_for_fish</a><br><a href='http://fishbase.org' target='_blank' style='color: blue; padding-left: 20px'>http://fishbase.org/home.htm</a></span>"
    ],
    active: false
  },
];
</script>

<template>
  <div>
    <div class="p-4 pt-16 pb-8">
      <h1 class="text-center font-bold text-secondaryDark">Fish</h1>
      <div class="md:flex gap-10 items-center mr-auto ml-auto container p-8 rounded-lg">
        <div class="md:w-2/3 pb-4">
          <p class="mb-4">
            Fish represent a broad class of aquatic animals that can live in fresh or saltwater, depending on the species. Bringing fish into your home can be an exciting hobby, especially if you intend to breed them, and the presence of a fish tank in your home can induce feelings of peace and tranquility.
          </p>
          <p>
            Whether you are bringing your fish home for the first time or maintaining your aquarium, it is important to test your water <b>once per week</b> to ensure it is free from toxins that can harm your fish.
          </p>
          

        </div>
        <div class="md:w-1/3 md:m-0 min-h-[200px] md:h-fit overflow-hidden par-1-image rounded-lg" >
        </div>
      </div>
    </div>
    <section class=" bg-secondary p-4 pt-16 pb-16">
      <div class="container mr-auto ml-auto">
        <InfoAccordion v-model="active" :data="data"/>
      </div>
    </section>
    <section class="p-4 pt-16 pb-16">
      <ContactForm />
    </section>
  </div>
</template>

<style scoped>
.par-1-image {
  background-image: url('../assets/images/fish.jpg');
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>