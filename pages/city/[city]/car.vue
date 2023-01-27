<template>

  <div class="mt-32 flex">
    <NuxtErrorBoundary>
      <SearchSideBar/>

      <!--      CAR CARDS BEGIN   -->
      <div class="flex flex-col">
        <Card v-for="car in cars"
              :key="car.id"
              :product="car"
        />
      </div>
      <!--      CAR CARDS END   -->

      <template #error="{error}">
        <div class="text-center mx-auto flex flex-col">
          <h1 class="text-red-600 text-5xl mb-4">Sorry, something went wrong...</h1>
          <code>{{ error }}</code>
          <button class="text-white bg-blue-400 px-10 py-3 rounded mt-8"
                  @click="error.value = null">
            Go Back
          </button>
        </div>
      </template>
    </NuxtErrorBoundary>
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
