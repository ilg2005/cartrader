<script setup lang="ts">

const authState = ref('login');
const client = useSupabaseAuthClient();


const message = {
  login: "Don't have an account? Create one now",
  signup: "Already have an account? Log in now",
};

const emits = defineEmits(['toggleState']);
const toggleAuthState = () => {
  authState.value = authState.value === 'login' ? 'signup' : 'login';
  emits('toggleState');
};

const fields = reactive({
  email: '',
  password: ''
});


const handleSubmit = async () => {
  try {
    await client.auth.signUp({email: fields.email, password: fields.password});
  } catch (e) {
    console.log(e);
    throw e;
  }
};

</script>

<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <form @submit.prevent="handleSubmit"
          class="shadow rounded-md overflow-hidden flex flex-col px-8 pt-8 mb-4 bg-black">
      <label class="text-white mb-1 text-sm" for="">Email</label>
      <input v-model="fields.email"
             class="p-2 border w-100 rounded-md mb-4" name="email"
             placeholder="Enter your email"
             type="email"
      >
      <label class="text-white mb-1 text-sm" for="">Password</label>
      <input v-model="fields.password"
             class="p-2 border w-100 rounded-md  mb-4" name="password"
             placeholder="Enter password"
             type="password"
      >
      <button class="bg-sky-700 hover:bg-sky-600 p-3 rounded-md text-white my-4 uppercase"
              type="submit">Submit
      </button>
      <p @click="toggleAuthState"
         class="my-4 cursor-pointer text-gray-400"
      >
        {{ message[authState] }}
      </p>
    </form>

  </div>
</template>

<style scoped>

</style>
