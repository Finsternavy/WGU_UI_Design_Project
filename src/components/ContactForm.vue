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
        key: '0-1',
        value: '0-1',
    },
    {
        key: '1-3',
        value: '1-3',
    },
    {
        key: '3-5',
        value: '3-5',
    },
    {
        key: '5+',
        value: '5+',
    }
]
</script>

<template>
    <form action.prevent="" class="container ml-auto mr-auto p-4 flex flex-wrap">
        <FormInput class="w-full md:w-1/2 md:pr-4 pb-4" id="contactFirstName" label="First Name"/>
        <FormInput class="w-full md:w-1/2 pb-4" id="contactLastName" label="Last Name"/>
        <FormInput class="w-full md:w-1/4 md:pr-4 pb-4" id="contactPhone" label="Phone"/>
        <FormInput class="w-full md:w-1/2 md:pr-4 pb-4" id="contactEmail" label="Email"/>
        <FormInput class="w-full md:w-1/4 pb-4" type="select" id="contactTimeZone" label="Time Zone" :options="timeZones"/>
        <FormInput class="w-full md:w-1/2 md:pr-4 pb-4" id="contactPetsName" label="Pets Name"/>
        <FormInput class="w-full md:w-1/4 md:pr-4 pb-4" type="select" id="contactPetType" label="Pet Type" :options="petTypes"/>
        <FormInput class="w-full md:w-1/4 mb-4" type="select" id="contactPetsAge" label="Pets Age" :options="petAges"/>
        <button class="ml-auto pl-8 pr-8 pt-2 pb-2 bg-secondaryDark rounded-lg text-white">SUBMIT</button>
    </form>
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