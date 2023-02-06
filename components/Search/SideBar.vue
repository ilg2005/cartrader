<template>
  <div class="shadow border w-full mr-10 z-30 h-1/2">

    <!--  Location Filter Start    -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3 class="mr-2">Location</h3>
      <h3 class="text-blue-400 capitalize"
          @click="updateModal('location')">{{ route.params.city }}</h3>

      <div v-if="modal.location"
           class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
        <input v-model="city" class="border p-1 rounded" type="text"
               @keyup.enter="onChangeLocation"
        >
        <button class="bg-blue-400 w-full mt-2 rounded text-white p-1"
                @click="onChangeLocation"
        >Apply
        </button>
      </div>
    </div>
    <!--  Location Filter End    -->

    <!--  Makes Filter Start    -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3 class="mr-2">Make</h3>
      <h3 class="text-blue-400 capitalize"
          @click="updateModal('make')">{{ route.query.make || 'any' }}</h3>
      <div v-if="modal.make"
           class="z-20 absolute border shadow left-56 p-5 top-1 -m-1 bg-white w-[600px] flex justify-between flex-wrap">
        <h4 v-for="make in makes"
            :key=make
            class="w-1/3 hover:font-bold"
            @click="onMakeChange(make)"

        >{{ make }}</h4>
        <div class="absolute top-0 right-0 mb-2 p-2 font-bold cursor-pointer"
             @click="onMakeChange('any')"
        >x</div>
      </div>
    </div>
    <!--  Makes Filter End    -->

    <!--  Price Filter Start    -->
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3 class="mr-2">Price</h3>
      <h3 class="text-blue-400 capitalize"
          @click="updateModal('price')"
      >{{ priceRangeText }}</h3>
      <div v-if="modal.price"
           class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
        <input v-model="priceRange.minPrice" class="border p-1 rounded" placeholder="Min price" type="number"
               @keyup.enter="onChangePrice"
        >
        <input v-model="priceRange.maxPrice" class="border p-1 rounded" placeholder="Max price" type="number"
               @keyup.enter="onChangePrice"
        >
        <button class="bg-blue-400 w-full mt-2 rounded text-white p-1"
                @click="onChangePrice">Apply
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

const onChangeLocation = () => {
  if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      message: 'Invalid format!',
    })
  }
  updateModal('location');
  navigateTo(`/city/${city.value}/cars`);
  city.value = '';

};

const {makes} = useCars();

const onMakeChange = (make) => {
  updateModal('make');
  router.push({
    query: {
      make: make.toLowerCase(),
    }
  });
};

const priceRange = reactive({
  minPrice: '',
  maxPrice: ''
});

const priceRangeText = computed(() => {
  const min = route.query.minPrice;
  const max = route.query.maxPrice;

  if (!min && !max) {
    return 'any';
  } else if (!min && max) {
    return `< $${max}`;
  } else if (min && !max) {
    return `> $${min}`;
  } else {
    return `$${min}-$${max}`;
  }

});

const onChangePrice = () => {
  if (priceRange.minPrice && priceRange.maxPrice && (priceRange.minPrice > priceRange.maxPrice)) {
    throw createError({
      statusCode: 400,
      message: 'Min price should be less than max price!',
    })
  }
  updateModal('price');

  router.push({
    query: {
      minPrice: priceRange.minPrice,
      maxPrice: priceRange.maxPrice,
    }
  });

};


</script>

<style scoped>

</style>
