<template>
  <div class="mr-10 mt-5 border-b pb-5">
    <div class="flex text-lg mt-2"
         v-for="attribute in attributes"
         :key="attribute"
    >
      <p class="rounded text-lime-800 mr-3">✓</p>
      <p>{{ attribute }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps(['attributes'])
</script>

<style scoped>

</style>
