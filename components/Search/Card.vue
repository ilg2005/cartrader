<template>
  <div class="flex shadow border w-full overflow-hidden mb-5 cursor-pointer "
       @click="navigateTo(`/car/${product.name}-${product.id}`)"
  >

    <nuxt-img
        :src="product.url"
        alt=""
        class="h-full mr-1 md:mr-8 w-1/2"
    />

    <div class="px-4 pt-2 flex flex-col">
      <div class="flex flex-col sm:flex-row sm:justify-between">
        <h1 class="text-xl lg:text-2xl text-blue-700 mb-2 mr-1">
          {{ product.name }}</h1>
        <p class="text-xl">${{ product.price }}</p>
      </div>
      <p class="hidden md:block text-gray-700">{{ product.description }}</p>
    </div>

  </div>


</template>

<script setup>
const car = defineProps(['product']);
</script>

<style scoped>

</style>
