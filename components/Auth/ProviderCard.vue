<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-black py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <div class="flex flex-col">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"/>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-black text-gray-400"> Connect with </span>
          </div>
        </div>
        <slot/>
      </div>
    </div>
  </div>
</template>
