<template>

  <div class="mt-32 flex">
    <NuxtErrorBoundary>
      <SearchSideBar/>

      <ClientOnly>
        <!--      CAR CARDS BEGIN   -->
        <div class="flex flex-col">
          <Card v-for="car in cars"
                :key="car.id"
                :favored="car.id in favorite"
                :product="car"
                @favor="favoriteHandler(car.id)"
          />
        </div>
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
