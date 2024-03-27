<script setup>
import { ref } from 'vue';
import InfoAccordion from '../components/InfoAccordion.vue';
import ContactForm from '../components/ContactForm.vue';
const active = ref(null);
const data = [
  {
    id: 1,
    title: 'Zero to Four Weeks',
    content: [
        "It is important the queen (a term commonly used for a female cat that is either pregnant or nursing) directly nurse her young if possible. Monitor your kitten’s growth closely to make sure its growth rate is progressing steadily. If any kitten is not growing at a sufficient rate, a caretaker might need to feed the kitten directly either with a bottle or a feeding tube. Some reasons why kittens might not gain weight appropriately include the following:",
        "<ul style='padding-inline: 20px;'><li>&#8226 too many other siblings are competing for mom's milk</li><li>&#8226 gastrointestinal disease</li><li>&#8226 environmental conditions such as extreme heat or cold, or unsanitary conditions</li></ul>"
    ],
    active: false
  },
  {
    id: 2,
    title: 'Four Weeks to One Year',
    content: [
      "Kittens can start being introduced to soft wet kitten food typically around three to four weeks after birth. According to the <a href=https://www.aspca.org/pet-care/cat-care/cat-nutrition-tips' target='_blanl' style='color: blue;'>ASPCA</a>, kittens at this age should eat half to one cup of dry kitten food or six to nine ounces of wet kitten food per day. If your kitten has difficulties eating hard food, a small amount of water can be added to soften the food. Cat food that is optimized for kittens provides the additional nutrients that are needed for growth, energy, and wellness. Depending on the breed, your cat may have different dietary requirements. You should always consult with your veterinarian for recommendations."
    ],
    active: false
  },
  {
    id: 3,
    title: 'One Year to Seven Years',
    content: [
      "This age is when kittens reach the cat stage and do not need as many nutrients. At this age, their level of activity decreases, and so does their metabolism. It is <b>not</b> recommended to leave food out for the cats all day. Instead, provide food a couple times a day so they eat meals rather than snacking throughout the day. This practice reduces the risk of obesity and other weight-related feline ailments."
    ],
    active: false
  },
  {
    id: 4,
    title: 'Seven Years and Older',
    content: [
      "Much like many living organisms, the body begins to deteriorate and experience a lot of changes. Cats at this age should eat less fats and calories and more quality proteins. This means when you are purchasing packaged foods for your cat, look for food that states a particular protein (such as 'salmon') and <b>not</b> just a category (such as fish). This usually means they are byproducts, or combinations, of lesser quality proteins."
    ],
    active: false
  },
];
</script>

<template>
  <div>
    <div class="p-4 pt-16 pb-8">
      <h1 class="text-center font-bold text-secondaryDark">Cats</h1>
      <div class="md:flex gap-10 items-center mr-auto ml-auto container p-8 rounded-lg">
        <div class="md:w-2/3 pb-4">
          Cats were first domesticated around 7500 BCE in the western Asia region and are currently the second most popular domestic pet in the United States. While there are over 60 unique documented cat breeds, care and diet can differ between breeds. However, some diets and practices are generally recommended for the well-being of your fluffy family member regardless of breed.
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
  background-image: url('../assets/images/catStairs.jpg');
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
}

ul {
  list-style-type: disc;
  padding-left: 2rem;
}
</style>