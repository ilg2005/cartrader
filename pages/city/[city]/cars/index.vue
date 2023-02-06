<template>

  <div class="mt-32 flex">
    <NuxtErrorBoundary>
      <SearchSideBar class="w-1/4"/>

      <ClientOnly>
        <!--      CAR CARDS BEGIN   -->
        <div class="flex flex-col w-3/4 " v-if="cars.length">
          <Card v-for="car in cars"
                :key="car.id"
                :favored="car.id in favorite"
                :product="car"
                @favor="favoriteHandler(car.id)"
          />
        </div>
        <h1 v-else class="text-4xl  text-red-600 w-3/4 self-center"> No Cars Found With Filters</h1>
        <!--      CAR CARDS END   -->
      </ClientOnly>

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
import useFetchCars from "~/composables/useFetchCars";

const route = useRoute();
const city = ref(route.params.city);


const {data: cars, refresh} = await useFetchCars(city.value, {
  minPrice: computed(() => route.query.minPrice),
  maxPrice: computed(() => route.query.maxPrice),
  make: computed(() => route.query.make),
});

const query = () => route.query;
watch(query, () => {
  refresh();
})


const favorite = useLocalStorage('favorite', {});
const favoriteHandler = (id) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true
    }
  }
}

definePageMeta({
  layout: "custom"
});

useHead({
  title: `Cars in ${capitalize(city.value)}`
})
</script>
