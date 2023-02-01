<template>
<div class="mt-10">
  <p class="text-xl">Current user: {{ supabase }}</p>

  <AuthCard class="mb-7"/>

  <NuxtLink
      @click="login"
      class="p-3 text-xl hover:text-sky-900 mt-7 cursor-pointer underline transition-all ease-in-out hover:text-2xl">Login with Discord</NuxtLink>
</div>
</template>

<script setup>

import {createClient} from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

definePageMeta({
  layout: 'custom'
});

/*
const user = useSupabaseUser();
*/
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
</script>

<style scoped>

</style>
