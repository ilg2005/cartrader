<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Create a New Listing</h1>
    </div>
    <p v-if="errorMsg" class="mt-3 text-red-400 font-bold">{{ errorMsg }}</p>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <ListingAdSelect
          title="Make *"
          :options="makes"
          name="make"
          @changeInput="onChangeInput"
      />

      <ListingAdInput
          v-for="input in inputs"
          :key="input.id"
          :title="input.title"
          :name="input.name"
          :placeholder="input.placeholder"
          @changeInput="onChangeInput"
      />

      <ListingAdTextarea
          title="Description *"
          name="description"
          placeholder=""
          @changeInput="onChangeInput"

      />

      <ListingAdImage @changeInput="onChangeInput"/>
    </div>

    <button @click="submitFormHandler"
            class="shadow rounded-md p-3 mt-5 w-full bg-green-600 disabled:opacity-50 text-xl text-white enabled:hover:bg-green-800"
            :disabled="!isValid"
    >Submit
    </button>
  </div>
</template>

<script setup>
import {useCars} from "~/composables/useCars";
import {useSupabaseUser} from "@nuxtjs/supabase/dist/runtime/composables/useSupabaseUser";

definePageMeta({
  layout: 'custom',
})

const user = useSupabaseUser();
const {makes} = useCars();

const info = useState('adInfo', () => {
  return {
    make: '',
    model: '',
    year: '',
    miles: '',
    price: '',
    city: '',
    seats: '',
    features: '',
    description: '',
    image: null
  };
});

const onChangeInput = (data, name) => {
  info.value[name] = data;
};

const inputs = [
  {
    id: 1,
    title: "Model *",
    name: "model",
    placeholder: "Civic"
  },
  {
    id: 2,
    title: "Year *",
    name: "year",
    placeholder: "2019"
  },
  {
    id: 3,
    title: "Price *",
    name: "price",
    placeholder: "10000"
  },

  {
    id: 4,
    title: "Miles *",
    name: "miles",
    placeholder: "1000"
  },

  {
    id: 5,
    title: "City *",
    name: "city",
    placeholder: "Detroit"
  },
  {
    id: 6,
    title: "Seats *",
    name: "seats",
    placeholder: "5"
  },
  {
    id: 7,
    title: "Features *",
    name: "features",
    placeholder: "Leather Interior, No Accidents"
  },
];

const isValid = computed(() => {
  for (let key in info.value) {
    if (!info.value[key]) {
      return false;
    }
  }
  return true;
});

const errorMsg = ref('');
const submitFormHandler = async () => {
  const body = {
    ...info.value,
    name: `${info.value.make} ${info.value.model}`,
    city: info.value.city.toLowerCase(),
    make: info.value.make.toLowerCase(),
    model: info.value.model.toLowerCase(),
    features: info.value.features.split(", "),
    seats: parseInt(info.value.seats),
    year: parseInt(info.value.year),
    price: parseInt(info.value.price),
    listerId: user.value.id,
    image: 'random string'
  }
  try {
    const response = await $fetch("/api/car/listings", {
      method: "POST",
      body
    });
    navigateTo("/profile/listings")
  } catch (e) {
      errorMsg.value = e.statusMessage;
  }
}
</script>

<style scoped>

</style>
