<template>

  <div class="mt-32 flex">
    <SearchSideBar/>

    <!--      CAR CARDS BEGIN   -->
    <div class="flex flex-col">
      <Card v-for="car in cars"
            :key="car.id"
            :product="car"
      />
    </div>
    <!--      CAR CARDS END   -->
  </div>


</template>

<script setup>

import Card from "~/components/Search/Card.vue";
import {useCars} from "~/composables/useCars";

const cars = useCars();

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
