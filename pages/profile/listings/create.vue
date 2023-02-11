<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Create a New Listing</h1>
    </div>

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

definePageMeta({
  layout: 'custom',
})

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
const submitFormHandler = () => {
  console.log(info.value);
}
</script>

<style scoped>

</style>
