<template>
  <div class="w-3/5 mx-auto">
    <CarHero/>

    <CarAttributes/>

    <CarDescription/>

    <CarContact/>
  </div>

</template>

<script setup>
import {capitalize} from "~/composables/capitalize";

const route = useRoute();

definePageMeta({
  layout: "custom"
});

useHead({
  title: capitalize(route.params.make)
})
</script>

<style scoped>

</style>
