<script setup>
let model = defineModel()
let props = defineProps({
    id: {
        type: String,
    },
    type: {
        type: String,
        default: 'text',
    },
    label: {
        type: String,
    },
    placeholder: {
        type: String,
    },
    value: {
        type: String,
    },
    required: {
        type: Boolean,
    },
    disabled: {
        type: Boolean,
    },
    readonly: {
        type: Boolean,
    },
    autofocus: {
        type: Boolean,
    },
    autocomplete: {
        type: String,
    },
    options: {
        type: Array,
    },
})
</script>

<template>
    <div class="flex flex-col relative">
        <label class="absolute uppercase text-sm" :for="props.id">{{ props.label }}</label>
        <input v-if="props.type === 'text'" :id="props.id" :type="props.type" :placeholder="props.placeholder"  :value="model">
        <select v-if="props.type === 'select'" :name="props.id" :id="props.id">
            <option value="" selected disabled></option>
            <option v-for="option in options" :key="option.key" :value="option.value">{{ option.value }}</option>
        </select>
    </div>
</template>

<style scoped>
    input,
    select {
        @apply border-2 border-secondary rounded-md p-2 text-secondaryDark;
    }
    label {
        top: -10px;
        left: 16px;
        background-color: white;
        padding: 0 4px;
        font-size: 0.75rem;
        @apply text-secondaryDark;
    }
</style>