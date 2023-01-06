<template>

  <div class="mt-32 flex">
    <SearchSideBar/>

    <!--      CAR CARDS BEGIN   -->
    <div class="w-full">
      <NuxtPage/>
    </div>
    <!--      CAR CARDS END   -->
  </div>


</template>

<script setup>
const route = useRoute();
const city = route.params.city;
const model = route.params.make ? route.params.make : 'cars';

definePageMeta({
  layout: "custom"
});

useHead({
  title: `${capitalize(model)} in ${capitalize(city)}`
})
</script>
