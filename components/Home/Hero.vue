<template>
  <div class="
      relative
      h-screen
      w-100
      bg-no-repeat
      bg-cover
      bg-bottom
      bg-[url('https://carconfigurator.ferrari.com/assets/cars/portofinom/packages/default/car-ferrari-portofino-m_splash.jpg')]
    "
  >
    <div class="absolute z-10 flex h-full w-full items-center justify-center">
      <div class="w-full sm:w-1/2 text-center">
        <h1 class="mb-10 font-serif text-6xl sm:text-8xl text-white">Find your drive</h1>
        <HomeSearchBar/>
      </div>
    </div>
    <div class="absolute h-full w-full bg-black opacity-50 z-1"></div>
  </div>

</template>

<script>
import HomeSearchBar from "~/components/Home/SearchBar.vue";

export default {
  name: "HomeHero",
  components: {HomeSearchBar}
}
</script>

<style scoped>

</style>
