<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <h1 class="text-9xl">404</h1>
    <p class="mt-7 text-4xl">
      Page not found
    </p>
    <NuxtLink to="/" class="mt-10 rounded-xl py-2 px-4 text-2xl bg-emerald-200 shadow-xl cursor-pointer border border-emerald-500">Go Back</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "error"
}
</script>

<style scoped>

</style>
