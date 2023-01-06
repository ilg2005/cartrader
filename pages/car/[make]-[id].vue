<template>
  <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">

    <CarHero/>

    <CarAttributes/>

    <CarDescription/>

    <CarContact/>

  </div>
</template>

<script setup>
import {capitalize} from "~/composables/capitalize";

const route = useRoute();
useHead({
  title: capitalize(route.params.make)
})
</script>

<style scoped>

</style>
