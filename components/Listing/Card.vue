<script setup>
const props = defineProps({
  listing: Object,
});

defineEmits(['deleteCard']);
const url = useRuntimeConfig().public.supabase.url + '/storage/v1/object/public/images/';
</script>

<template>
  <div class="shadow rounded overflow-hidden flex justify-between mb-4">
    <div class="flex ">
      <img alt="_" class="w-80 mr-3 h-44" :src="`${url + listing.image}`">
      <div class="p-3">
        <h1 class="text-2xl">{{ listing.name }}</h1>
        <p class="text-blue-400">${{ listing.price }}</p>
      </div>
    </div>
    <div class="p-3 flex">
      <NuxtLink class="text-blue-400 mr-4"
          :to="`/profile/listings/view/${listing.id}`">View</NuxtLink>
      <p class="text-red-400 cursor-pointer"
                @click="$emit('deleteCard', listing.id )">Delete</p>
    </div>
  </div>
</template>
