<template>
  <div>
    <!--    NAVBAR BEGIN -->
    <header class="
      sticky
      top-0
      z-50
      flex
      justify-between
      items-center
      space-x-1
      border-b
      bg-white
      p-4
      shadow-md
"
    >
      <a class="font-mono text-3xl" href="#">CarTrader</a>
    </header>
    <!--    NAVBAR END -->

    <!--CAR DETAIL PAGE BEGIN-->
    <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
      <!--   CAR HERO BEGIN  -->

      <div class="mt-10">
        <img alt=""
             class="w-full"
             src="https://carwow-uk-wp-3.imgix.net/Volvo-XC40-white-scaled.jpg"
        >
        <h1 class="mt-10 text-4xl">Volvo XC40</h1>
        <div class="text-slate-500
            flex
            text-lg
            mt-3
            border-b
            pb-5
            justify-between
          ">
          <div class="flex">
            <p class="mr-2">5 seats</p>
            <p class="mr-2">|</p>
            <p class="mr-2">67,444 miles</p>
          </div>
          <div class="font-bold text-2xl">$25,555</div>
        </div>
      </div>
      <!--   CAR HERO END  -->

      <!--      CAR ATTRIBUTES BEGIN   -->
      <div class="mr-10 mt-5 border-b pb-5">
        <div class="flex text-lg mt-2">
          <p class="rounded text-lime-800 mr-3">✓</p>
          <p>Leather Interior</p>
        </div>
      </div>
      <!--      CAR ATTRIBUTES END   -->

      <!--      CAR DESCRIPTION START   -->
      <div class="mt-5">
        <p class="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eligendi expedita fuga id magni
          molestiae nobis quae quo tempora? Culpa dolore earum explicabo hic incidunt nesciunt numquam obcaecati quod
          ut.</p>
      </div>
      <!--      CAR DESCRIPTION END   -->

      <!--      CAR CONTACT BEGIN     -->
      <div class="mt-10">
        <div class="flex w-[600px] justify-between">
          <input class="border p-1" placeholder="Name" type="text">
          <input class="border p-1" placeholder="Email" type="email">
          <input class="border p-1" placeholder="Phone" type="text">
        </div>
        <div class="flex mt-4 w-[600px]">
          <textarea class="border p-1 w-full" placeholder="Message"></textarea>
        </div>
        <button class="bg-blue-400 text-white px-10 py-3 rounded mt-4">Submit</button>
      </div>
      <!--      CAR CONTACT END     -->
    </div>
    <!--CAR DETAIL PAGE END-->
  </div>
</template>
