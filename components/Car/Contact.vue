<template>
  <div class="mt-10">
    <div class="flex flex-col space-x-0 space-y-2 lg:flex-row lg:space-y-0 w-full justify-between">
      <input class="border p-1" placeholder="Name" type="text">
      <input class="border p-1" placeholder="Email" type="email">
      <input class="border p-1" placeholder="Phone" type="text">
    </div>
    <div class="flex mt-4 w-full">
      <textarea class="border p-1 w-full" placeholder="Message"></textarea>
    </div>
    <button class="bg-blue-400 text-white px-10 py-3 rounded mt-4">Submit</button>
  </div>

</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

</style>
