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
      <NuxtLink to="/profile/listings" class="mr-5">Profile</NuxtLink>
      <p class="cursor-pointer" @click="logout">Logout</p>
    </div>
    <div v-else class="">
      <NuxtLink to="/login">Login</NuxtLink>
    </div>
  </header>

</template>

<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  }
  /*To Do logout manually: */
  try {
    await $fetch('/api/_supabase/session', {
      method: "POST",
      body: {event: "SIGNED_OUT", session: null}

    })
  } catch (e) {
      return console.log(e);
  }

  user.value = null;
  navigateTo('/');

}
</script>

<style scoped>

</style>
