<template>
<div class="mt-10">
  <p class="text-xl">Supabase connection: </p>

  <AuthCard class="mb-7"/>

  <NuxtLink
      @click="login"
      class="p-3 text-xl hover:text-sky-900 mt-7 cursor-pointer underline transition-all ease-in-out hover:text-2xl">Login with Discord</NuxtLink>
</div>
</template>

<script setup>


definePageMeta({
  layout: 'custom'
});

/*
const login = async () => {
  const {data, error} = await supabase.auth.signInWithOAuth({
    provider: 'discord'
  });
  if (error) {
    return console.log(error);
  } else {
    console.log(data);
  }
}
*/
</script>

<style scoped>

</style>
