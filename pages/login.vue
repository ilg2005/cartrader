<script lang="ts" setup>
const {auth} = useSupabaseAuthClient();
const state = ref(false);

const loading = ref(false);
const login = async () => {
  loading.value = true;
  try {
    await auth.signInWithOAuth({provider: 'github'});
  } catch (e) {
    console.log(e);
  }
}

</script>

<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <h2 class="my-6 text-center text-3xl font-extrabold u-text-white">
      Sign {{ state ? 'up' : 'in' }} to {{ state ? 'a new' : 'your' }} account
    </h2>
    <AuthForm @toggleState="state = !state"/>
    <div class="flex justify-center mb-4">--- or ---</div>
    <AuthProviderCard>
      <button
          class="flex justify-center text-xl mt-3 mdi-github bg-white px-10 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 font-bold"
          @click="login">
        Github
      </button>
    </AuthProviderCard>
    <Spinner v-if="loading"
             class="mt-10 flex justify-center items-center"
    />
  </div>
</template>
