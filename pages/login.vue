<script lang="ts" setup>
const {auth} = useSupabaseAuthClient();

const login = async () => {
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
      Sign in to your account
    </h2>
    <AuthProviderCard>
      <button
          class="flex justify-center text-xl mt-3 mdi-github bg-white px-10 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 font-bold"
          @click="login">
        Github
      </button>
    </AuthProviderCard>
  </div>
</template>
