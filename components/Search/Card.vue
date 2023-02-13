<template>
  <div class="flex shadow border overflow-hidden mb-5 cursor-pointer z-0"
       @click="navigateTo(`/car/${product.id}`)"
  >
    <nuxt-img
        :src="`${url + product.image}`"
        alt=""
        class="h-full mr-1 md:mr-8 w-1/2"
    />

    <div class="px-4 flex flex-col ">
      <div class="flex justify-between items-center ">
        <h1 class="text-xl lg:text-2xl text-blue-700 mb-2 mr-2">
          {{ product.name }}</h1>
        <div class="flex-none py-2 px-1 z-20 mb-2"
             @click.stop="emit('favor')">
          <img class="w-6 h-6" :src="favored ? heartFilled : heartOutline" alt="isFavorite"
          />
        </div>
      </div>
      <p class="text-xl font-semibold">${{ product.price }}</p>
      <p class="hidden md:block text-gray-700">{{ product.description }}</p>
    </div>

  </div>

</template>

<script setup>
import heartFilled from "@/assets/heartFilled.png";
import heartOutline from "@/assets/heartOutline.png";

defineProps({
  'product': Object,
  'favored': Boolean
});

const emit = defineEmits(['favor']);
const url = useRuntimeConfig().public.supabase.url + '/storage/v1/object/public/images/';
</script>

<style scoped>

</style>
