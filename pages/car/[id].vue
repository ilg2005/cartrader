<template>
  <div class="w-3/5 mx-auto"
       v-if="car"
  >
    <CarHero :product="car"/>

    <CarAttributes :attributes="car.features"/>

    <CarDescription :description="car.description"/>

    <CarContact/>
  </div>

</template>

<script setup>
import useFetchCar from "~/composables/useFetchCar";

const route = useRoute();
const {data: car} = await useFetchCar(route.params.id);
if (!car) {
  throw createError({
    statusCode: 404,
    statusMessage: `Car with ID of '${route.params.id}' does not exist!`
  })
}



definePageMeta({
  layout: "custom"
});

useHead({
  title: `Car-${route.params.id}`
})
</script>

<style scoped>

</style>
