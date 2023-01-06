<template>
  <div
      class="
                font-serif
                w-[300px]
                sm:w-full
                text-2xl
                rounded-full
                bg-white
                flex
                justify-between
                overflow-hidden
                drop-shadow-2xl
                mx-auto
              "
  >
    <input class="
                    py-3
                    px-5
                    w-full
                    text-2xl
                    rounded-full
                    focus:outline-none
                   "
           placeholder="Search by city..."
           type="text"
    >
    <button class="bg-sky-500 px-10 text-white">Search</button>
  </div>

</template>

<script>
export default {
  name: "HomeSearchBar"
}
</script>

<style scoped>

</style>
