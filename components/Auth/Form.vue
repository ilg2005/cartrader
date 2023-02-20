<script lang="ts" setup>

const authState = ref('login');
const client = useSupabaseAuthClient();
const router = useRouter();
const user = useSupabaseUser();

const isLoading = ref(false);
const emailSent = ref(false);


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

watchEffect( () => {
  if (user.value) {
    router.push('/');
  }
})


const handleSubmit = async () => {
  isLoading.value = true;
  if (authState.value === 'signup') {
    try {
      const {data} = await client.auth.signUp({
        email: fields.email,
        password: fields.password,
      });
      emailSent.value = true;
      console.log(data);
    } catch (e) {
      console.log(e);
      throw e;
    }
  } else {
    try {
      await client.auth.signInWithPassword({
        email: fields.email,
        password: fields.password
      });
      router.push('/');
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
</script>

<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-md">

    <p v-if="emailSent"
       class="text-center text-2xl font-bold text-emerald-600 mb-2"
    >Open the email we sent you to verify your account!</p>

    <form class="shadow rounded-md overflow-hidden flex flex-col px-8 pt-8 mb-4 bg-black"
          @submit.prevent="handleSubmit">
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
      <button v-if="!isLoading"
              class="bg-sky-700 hover:bg-sky-600 p-3 rounded-md text-white my-4 uppercase"
              type="submit">{{ authState === 'login' ? 'Sign in' : 'Register' }}
      </button>
      <ButtonLoading v-else/>

      <p class="my-4 cursor-pointer text-gray-400"
         @click="toggleAuthState"
      >
        {{ message[authState] }}
      </p>
    </form>

  </div>
</template>

<style scoped>

</style>
