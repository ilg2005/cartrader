<template>
  <div class="shadow rounded overflow-hidden flex flex-col justify-center items-center">
    <h1 class="text-4xl mb-4 capitalize">{{ authState }} Form</h1>
    <form class="shadow rounded overflow-hidden flex flex-col px-8 mb-10">
      <label class="text-sky-500 mb-1 text-sm" for="">Email</label>
      <input v-model="fields.email"
             class="p-2 border w-100 rounded mb-4" name="email"
             placeholder="Enter your email"
             type="email"
      >
      <label class="text-sky-500 mb-1 text-sm" for="">Password</label>
      <input v-model="fields.password"
             class="p-2 border w-100 rounded  mb-4" name="password"
             placeholder="Enter password"
             type="password"
      >
      <button class="bg-sky-700 p-3 rounded text-white mb-4 uppercase"
              type="submit">Submit
      </button>
      <p @click="toggleAuthState"
         class="my-4 cursor-pointer text-blue-600"
      >
        {{ message[authState] }}
      </p>
    </form>

  </div>
</template>

<script setup>

const authState = ref('login');

const message = {
  login: "Don't have an account? Create one now",
  signup: "Already have an account? Log in now",
};

const toggleAuthState = () => authState.value = authState.value === 'login' ? 'signup' : 'login';

const fields = reactive({
  email: '',
  password: ''
})

</script>

<style scoped>

</style>
