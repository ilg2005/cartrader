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
import {capitalize} from "~/composables/capitalize";
import {useCars} from "~/composables/useCars";

const route = useRoute();
const cars = useCars();

const car = computed(() => cars.find((product) => product.id === parseInt(route.params.id)));

if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with ID of '${route.params.id}' does not exist!`
  })
}

definePageMeta({
  layout: "custom"
});

useHead({
  title: capitalize(route.params.make)
})
</script>

<style scoped>

</style>
