<template>

    <CarHero/>

    <CarAttributes/>

    <CarDescription/>

    <CarContact/>

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
