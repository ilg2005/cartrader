<template>
  <div>
    <div class="flex justify-between mt-24 items-center">
      <h1 class="text-6xl">My Listings</h1>
      <NuxtLink
          class="w-9 h-9 bg-blue-400 flex justify-center items-center rounded-full text-white font-bold cursor-pointer"
          to="/profile/listings/create">
        +
      </NuxtLink>
    </div>

    <div class="shadow rounded p-3 mt-5">
      <ListingCard v-for="listing in listings"
                   :key="listing.id"
                   :listing="listing"
                   @deleteCard="deleteCardHandler"
      />
    </div>

  </div>
</template>

<script setup>


definePageMeta({
  layout: 'custom',
});
const user = useSupabaseUser();
const {data:listings} = await useFetch(`/api/car/listings/user/${user.value.id}`);

const deleteCardHandler = async (id) => {
  await $fetch(`/api/car/listings/${id}`, {
    method: 'DELETE'
  });
  listings.value = listings.value.filter((listing) => listing.id !== id);
}

</script>

<style scoped>

</style>
