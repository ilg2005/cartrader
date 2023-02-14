<template>
  <div class="mt-10">
    <div class="flex flex-col space-x-0 space-y-2 lg:flex-row lg:space-y-0 w-full justify-between">
      <input v-model="message.name" class="border p-1" placeholder="Name" type="text">
      <input v-model="message.email" class="border p-1" placeholder="Email" type="email">
      <input v-model="message.phone" class="border p-1" placeholder="Phone" type="text">
    </div>
    <div class="flex mt-4 w-full">
      <textarea v-model="message.message" class="border p-1 w-full" placeholder="Message"></textarea>
    </div>
    <button :disabled="!isValid"
            class="bg-blue-400 text-white px-10 py-3 rounded mt-4 disabled:opacity-75"
            @click="submitMsgHandler"
    >Submit
    </button>
    <p v-if="errorMessage" class="text-red-400 font-bold mt-2">Error: {{ errorMessage }}!</p>
    <p v-if="isSubmitted" class="text-green-700 font-bold mt-2">Submitted successfully!</p>
  </div>

</template>

<script setup>
const route = useRoute();
const message = reactive({
  name: "",
  email: "",
  phone: "",
  message: ""
});

const errorMessage = ref('');
const isSubmitted = ref(false);
const isValid = computed(() => {
  for (let field in message) {
    if (!message[field]) return false;
  }
  return true;
})
const submitMsgHandler = async () => {
  try {
    await $fetch(`/api/car/listings/${route.params.id}/message`, {
      method: 'POST',
      body: message
    });
    message.name = "";
    message.email = "";
    message.phone = "";
    message.message = "";
    isSubmitted.value = true;
    errorMessage.value = "";
    setTimeout(() => {
      isSubmitted.value = false;
    }, 2000)
  } catch (e) {
    errorMessage.value = e.statusMessage;
  }
}
</script>

