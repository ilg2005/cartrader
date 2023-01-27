<template>
  <div class="flex shadow border w-full overflow-hidden mb-5 cursor-pointer z-0"
       @click="navigateTo(`/car/${product.name}-${product.id}`)"
  >
    <nuxt-img
        :src="product.url"
        alt=""
        class="h-full mr-1 md:mr-8 w-1/2"
    />

    <div class="px-4 pt-2 flex flex-col ">
      <div class="flex justify-between ">
        <h1 class="text-xl lg:text-2xl text-blue-700 mb-2 mr-10">
          {{ product.name }}</h1>
        <img class="w-6 h-6 z-20 mb-2" :src="isFavorite ? heartFilled : heartOutline" alt="isFavorite"
             @click.stop="toggleFavorite"
        />
      </div>
      <p class="text-xl font-semibold">${{ product.price }}</p>
      <p class="hidden md:block text-gray-700">{{ product.description }}</p>
    </div>

  </div>


</template>

<script setup>
import heartFilled from "@/assets/heartFilled.png";
import heartOutline from "@/assets/heartOutline.png";

const car = defineProps(['product']);
const isFavorite = useState(`favored-${car.product.id}`, () => false);

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
}

</script>

<style scoped>

</style>
