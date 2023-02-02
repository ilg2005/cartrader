<template>
  <header class="
      sticky
      top-0
      z-50
      flex
      justify-between
      items-center
      space-x-1
      border-b
      bg-white
      p-4
      shadow-md
"
  >
    <NuxtLink class="font-mono text-3xl" to="/">CarTrader</NuxtLink>

    <div v-if="user" class="flex">
      <NuxtLink class="mr-5" to="/profile/listings">Profile</NuxtLink>
      <p class="cursor-pointer" @click="logout">Logout</p>
    </div>
    <div v-else-if="route.name !== 'login'" class="">
      <NuxtLink to="/login">Login</NuxtLink>
    </div>
  </header>

</template>

<script lang="ts" setup>

const user = useSupabaseUser();
const client = useSupabaseAuthClient();
const route = useRoute();

const logout = () => {
  client.auth.signOut();
  navigateTo('/');
}

</script>

<style scoped>

</style>
