<template>
  <div class="shadow border w-full mr-10 z-30 h-1/2">

    <!--  Location Filter Start    -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3 class="mr-2">Location</h3>
      <h3 @click="updateModal('location')"
          class="text-blue-400 capitalize">{{ route.params.city }}</h3>

      <div v-if="modal.location"
           class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
        <input class="border p-1 rounded" type="text" v-model="city">
        <button @click="onChangeInput"
                class="bg-blue-400 w-full mt-2 rounded text-white p-1">Apply
        </button>
      </div>
    </div>
    <!--  Location Filter End    -->

    <!--  Makes Filter Start    -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3 class="mr-2">Make</h3>
      <h3 @click="updateModal('make')"
          class="text-blue-400 capitalize">{{ route.params.make || 'any' }}</h3>
      <div v-if="modal.make"
           class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white w-[600px] flex justify-between flex-wrap">
        <h4 class="w-1/3 hover:font-bold"
            :class="{'font-bold': make === capitalize(route.params.make)}"
            v-for="make in makes"
            :key=make
            @click="onMakeChange(make)"
        >{{ make }}</h4>
      </div>
    </div>
    <!--  Makes Filter End    -->

    <!--  Price Filter Start    -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3 class="mr-2">Price</h3>
      <h3 class="text-blue-400 capitalize"
          @click="updateModal('price')"
      >{{ priceRangeText || 'any' }}</h3>
      <div v-if="modal.price"
           class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
        <input class="border p-1 rounded" type="number" placeholder="Min price" v-model="priceRange.minPrice">
        <input class="border p-1 rounded" type="number" placeholder="Max price" v-model="priceRange.maxPrice">
        <button @click="onChangePrice"
                class="bg-blue-400 w-full mt-2 rounded text-white p-1">Apply
        </button>
      </div>

    </div>
    <!--  Price Filter End    -->

  </div>

</template>

<script setup>

const route = useRoute();
const router = useRouter();

const modal = reactive({
  location: false,
  make: false,
  price: false,
});

const updateModal = (key) => {
  switch (key) {
    case 'location':
      modal.location = !modal.location;
      break;
    case 'make':
      modal.make = !modal.make;
      break;
    case 'price':
      modal.price = !modal.price;
      break;
  }
};

const city = ref();

const onChangeInput = () => {
  if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      message: 'Invalid format!',
    })
  }
  updateModal('location');
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
  city.value = '';

};

const {makes} = useCars();

const onMakeChange = (make) => {
  updateModal('make');
  navigateTo(`/city/${route.params.city}/car/${make}`);
};

const priceRange = reactive({
  minPrice: '',
  maxPrice: ''
});

const priceRangeText = computed(() => {
  const min = router.queryParams.minPrice;
  const max = router.queryParams.maxPrice;

  return (!min && !max) ? 'any' :
  (!min && max) ? `< $${max}` :
  (min && !max) ? `> $${min}` :
  `$${min}-$${max}`;
});

const onChangePrice = () => {
  /*if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      message: 'Invalid format!',
    })
  }*/
  updateModal('price');
  router.push(`/city/${route.params.location}/car/${route.params.make}?minPrice=${priceRange.minPrice}&maxPrice=${priceRange.maxPrice}`)

};


</script>

<style scoped>

</style>
