<template>
  <div
      class="
                font-serif
                w-[300px]
                sm:w-full
                text-2xl
                rounded-full
                bg-white
                flex
                justify-between
                overflow-hidden
                drop-shadow-2xl
                mx-auto
              "
  >
    <input v-model="city"
           class="
                    py-3
                    px-5
                    w-full
                    text-2xl
                    focus:outline-none
                   "
           :class="cityError ? 'bg-red-200 border-red-400 border-2 rounded-l-full' : 'rounded-full'"
           placeholder="Search by city..."
           type="text"
    >
    <button class="bg-sky-500 px-10 text-white" @click="search">Search</button>
  </div>

</template>

<script setup>
const city = ref('');
const cityError = ref(false);
const search = () => {
  if (!city.value) {
    cityError.value = true;
  } else {
    navigateTo(`/city/${city.value}/car`);
  }
}
</script>

<style scoped>

</style>
