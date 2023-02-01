<template>
  <div class="mt-10">
    <p class="text-xl">User: {{ user }} </p>

    <AuthCard class="mb-7"/>

    <NuxtLink
        class="p-3 text-xl hover:text-sky-900 mt-7 cursor-pointer underline transition-all ease-in-out hover:text-2xl"
        @click="login('github')">
      Login with Github
    </NuxtLink>
    <NuxtLink
        class="p-3 text-xl hover:text-sky-900 mt-7 cursor-pointer underline transition-all ease-in-out hover:text-2xl"
        @click="login('discord')">
      Login with Discord
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  layout: 'custom'
});
const user = useSupabaseUser();
const client = useSupabaseClient();
const router = useRouter();

const login = async (provider: 'github' | 'discord') => {
  try {
    const {error} = await client.auth.signInWithOAuth({provider});
    if (error) {
      throw error;
      alert('Something went wrong !!');
    } else if (user.value) {
      router.push('/profile/listings');
    }
  } catch (error) {
    alert(error.error_description || error.message);
  }
}


</script>

<style scoped>

</style>
