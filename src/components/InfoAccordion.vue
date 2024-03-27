<script setup>
import { ref } from 'vue';
let props = defineProps({
    data: {
        type: Array,
        default: () => [],
    },
})
const active = ref([])
// const updateState = (id) => {
//     if (state.value === id) {
//         state.value = null
//         return
//     }
//     state.value = id
// }

const updateActive = (id) => {
    if (active.value.includes(id)) {
        active.value.splice(active.value.indexOf(id), 1)
        return
    }
    active.value.push(id)
}
</script>

<template>
    <div class="mb-4">
        <div v-for="item in props.data" :key="item.id" class="mb-4">
            <div @click="updateActive(item.id)" class="pl-4 pr-4 w-full flex items-center border-2 border-secondaryDark bg-white no-select">
                <span class="w-fit text-4xl">{{ active.includes(item.id)? '-':'+' }}</span>
                <span class="p-4 w-full text-center">{{ item.title }}</span>
            </div>
            <div v-show="active.includes(item.id)"  class="p-4 content bg-red-200">
                <p v-for="(item, index) in item.content" :key="index" class="mb-4" v-html="item"></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content {
    width: calc(100% - 1rem);
    @apply ml-auto mr-auto bg-white border-2 border-secondaryDark border-t-0;
}
.no-select {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>