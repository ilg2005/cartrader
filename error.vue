<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <h1 class="text-9xl">{{ error.statusCode }}</h1>
    <p class="mt-7 text-4xl">
      {{ error.message }}
    </p>
    <NuxtLink class="mt-10 rounded-xl py-2 px-4 text-2xl bg-emerald-200 shadow-xl cursor-pointer border border-emerald-500"
              to="/">
      Go Back
    </NuxtLink>
  </div>
</template>

<script setup>

const error = useError();

</script>

<style scoped>

</style>
