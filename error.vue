<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <h1 class="text-9xl text-orange-700">{{ error.statusCode }}</h1>
    <p class="mt-7 text-4xl">
      {{ error.message }}
    </p>
    <button class="mt-10 rounded-xl py-2 px-4 text-2xl bg-emerald-200 shadow-xl cursor-pointer border border-emerald-500"
              @click="handleError">
      Go Back
    </button>
  </div>
</template>

<script setup>

const error = useError();

const handleError = () => {
  clearError({redirect: useRouter().back()});
};

</script>

<style scoped>

</style>
