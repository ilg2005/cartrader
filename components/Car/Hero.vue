<template>
  <div class="mt-10">
    <img :src="product.url"
         alt=""
         class="w-full"
    >
    <h1 class="mt-10 text-4xl">{{ product.name }}</h1>
    <div class="text-slate-500
            flex
            text-lg
            mt-3
            border-b
            pb-5
            justify-between
          ">
      <div class="flex">
        <p class="mr-2">{{ product.seats }} seats</p>
        <p class="mr-2">|</p>
        <p class="mr-2">{{ product.miles }} miles</p>
      </div>
      <div class="font-bold text-2xl">${{ product.price }}</div>
    </div>
  </div>

</template>

<script setup>
defineProps(['product']);
</script>

<style scoped>

</style>
