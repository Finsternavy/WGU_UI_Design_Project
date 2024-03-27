<script setup>
import { ref } from 'vue';
import InfoAccordion from '../components/InfoAccordion.vue';
import ContactForm from '../components/ContactForm.vue';
const active = ref(null);
const data = [
  {
    id: 1,
    title: 'Diet & Exercise',
    content: [
        "Throughout dogs’ lifespans, they should generally be fed fewer meals as they mature. Puppies should be nursed the first two months, then introduced to three meals per day when they are about three to six months years old. Their food intake should be reduced to two meals per day when they are six months to one year old and finally reduced to one meal after they reach one year old. And a dog’s typical body mass is composed of somewhere between 60 and 70 percent water. The <a href='https://www.aspca.org/pet-care/dog-care/dog-nutrition-tips' target='_blank' style='color: blue;'>ASPCA</a> says just a 10 percent decrease in body water can cause illness, and a 15 percent loss can cause death, so make sure you keep your pooch hydrated!",
        "Much like humans, dogs need to have a healthy level of activity to keep their organs healthy, as well as sun and fresh air. The minimum recommended time for exercise varies greatly with breed and size differences, but generally a range of 30–120 minutes of exercise is recommended per day! Can you imagine exercising two hours per day? OK, I know that wouldn't bother some of you reading this. But the thought of it to me makes me cringe! And by the way, exercising your dog does not mean you are being challenged to a push-up contest. Brisk walks are OK too! You can also choose from a variety of toys to encourage physical activity; just be sure they are age appropriate and do not pose a choking hazard. Pay careful attention to toys that require supervision."
    ],
    active: false
  },
  {
    id: 2,
    title: 'Grooming & Handling',
    content: [
      "Keeping your furry family member clean is important to its health. So be sure to brush frequently to reduce the amount of shedding and prevent matted and tangled fur that can prove to be extremely difficult to remove. Check for insects such as ticks and fleas, especially after visiting heavily wooded areas. Bathing is not only important to your dog’s health but can be an exercise depending on how strong willed the dog is. Rinse <b>all</b> of the soap out, as any residual soap can result in a rash. Be sure the soap is formulated for your puppy or dog, since harsh soaps can cause allergic reactions. And as always, be careful how you handle your loved one. No matter the size of your dog, you need to be cautious as you carry your canine. If you have a small dog, then cradle the pup with one hand under the chest and the forearm supporting the back half. If it is a large dog, reach under the belly with both your arms perpendicular to the dog, and use each arm to support the chest and rear as you lift."
    ],
    active: false
  },
  {
    id: 3,
    title: 'Vaccinations & Medications',
    content: [
      "You should <b>always</b> consult with your veterinarian, but there is a core set of vaccines that are typically recommended. Vaccines that reduce the exposure risk to things such as hepatitis, rabies, and parvovirus. Others may be determined by your vet depending on the environment in which the dog resides. Some of these include <a href='https://www.aspca.org/pet-care/general-pet-care/vaccinations-your-pet' target='_blank' style='color: blue;'' target='_blank' style='color: blue;'>Bordetella bronchiseptica, Borrelia burgdorferi, and Leptospira bacteria</a>."
    ],
    active: false
  },
];
</script>

<template>
  <div>
    <div class="p-4 pt-16 pb-8">
      <h1 class="text-center font-bold text-secondaryDark">Dogs</h1>
      <div class="md:flex gap-10 items-center mr-auto ml-auto container p-8 rounded-lg">
        <div class="md:w-2/3 pb-4">
          The domestic dog is an extremely social animal and offers a diverse variety of choices as there are well over 300 breeds recognized by the World Canine Organization. Adopting a dog offers mutual benefits between dog and owner. Many studies cite the social benefits of having a companion as well as the reduced feelings of loneliness from adopting a dog. Studies even show medical indicators such as reduced blood pressure and improved lipid profiles. If you have a dog, it is important to make sure that you care for your dog; be mindful of what you feed your dog and provide enough opportunities for exercise. In this page, you will find more information about how to care for your pets throughout the various stages of their lives.
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
  background-image: url('../assets/images/dogStick.jpg');
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>