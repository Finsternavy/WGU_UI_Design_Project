<script setup>
import FormInput from '../components/FormInput.vue';

const timeZones = [
    {
        key: 'pst',
        value: 'PST',
    },
    {
        key: 'mst',
        value: 'MST',
    },
    {
        key: 'cst',
        value: 'CST',
    },
    {
        key: 'est',
        value: 'EST',
    },
];

const petTypes = [
    {
        key: 'dog',
        value: 'Dog',
    },
    {
        key: 'cat',
        value: 'Cat',
    },
    {
        key: 'fish',
        value: 'Fish',
    }
];

const petAges = [
    {
        key: '0-4',
        value: '0-4 weeks',
    },
    {
        key: '4-1',
        value: '4 weeks - 1 year',
    },
    {
        key: '1-7',
        value: '1-7 years',
    },
    {
        key: '7+',
        value: '7+ years',
    }
]
</script>

<template>
    <div class="container ml-auto mr-auto outline outline-2 outline-secondary p-4 rounded-lg mb-14">
        <h2 class="text-center font-bold text-secondaryDark pb-4">CONTACT OUR PEXPERTS</h2>
        <form action.prevent="" class="container ml-auto mr-auto p-4 flex flex-wrap">
            <FormInput class="w-full md:w-1/2 md:pr-4 pb-4" id="contactFirstName" label="First Name"/>
            <FormInput class="w-full md:w-1/2 pb-4" id="contactLastName" label="Last Name"/>
            <FormInput class="w-full md:w-1/4 md:pr-4 pb-4" id="contactPhone" label="Phone"/>
            <FormInput class="w-full md:w-1/2 md:pr-4 pb-4" id="contactEmail" type="email" label="Email"/>
            <FormInput class="w-full md:w-1/4 pb-4" type="select" id="contactTimeZone" label="Time Zone" :options="timeZones"/>
            <FormInput class="w-full md:w-1/2 md:pr-4 pb-4" id="contactPetsName" label="Pets Name"/>
            <FormInput class="w-full md:w-1/4 md:pr-4 pb-4" type="select" id="contactPetType" label="Pet Type" :options="petTypes"/>
            <FormInput class="w-full md:w-1/4 mb-4" type="select" id="contactPetsAge" label="Pets Age" :options="petAges"/>
            <button class="ml-auto pl-8 pr-8 pt-2 pb-2 bg-secondaryDark rounded-lg text-white">SUBMIT</button>
        </form>
    </div>
</template>

<style scoped>
    input {
        @apply border-2 border-primaryDark rounded-md p-2;
    }
    label {
        top: -12px;
        left: 16px;
        background-color: white;
        padding: 0 4px;
        @apply text-primaryDark;
    }
</style>