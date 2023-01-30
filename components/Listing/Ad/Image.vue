<template>
<div class="col-md-5 offset-md-1 mt-2 w-full">
  <label class="text-cyan-500 mb-1 text-sm" for="">Image *</label>
  <form class="mt-2">
    <div class="form-group">
      <div class="relative">
        <input
            type="file"
            accept="image/*"
            class="opacity-0 absolute cursor-pointer"
            @change="onImageUpload"
        >
        <span class="cursor-pointer">Browse File</span>
      </div>
      <div class="border pt-2 mt-3 w-56 flex relative"
           v-if="image.preview"
      >
        <img :src="image.preview" alt="" class="img-fluid">
        <p class="text-red-700 absolute -top-2 cursor-pointer text-xl"
           @click="deleteImage"
        >x</p>
      </div>
    </div>
  </form>
</div>
</template>

<script setup>
const image = useState('carImage', () => {
  return {
    preview: null,
    image: null
  }
});

const emits = defineEmits(['changeInput']);

const onImageUpload = (evt) => {
  const input = evt.target;
  if (input.files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      image.value.preview = e.target.result;
    }
    image.value.image = input.files[0];
    reader.readAsDataURL(input.files[0]);
    emits("changeInput", input.files[0], "image");
  }
}

const deleteImage = () => {
  image.value.preview = null;
  image.value.image = null;
}
</script>

<style scoped>

</style>
