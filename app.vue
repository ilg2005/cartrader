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

    <!--    HOME HERO START  -->
    <div class="
      relative
      h-screen
      w-100
      bg-no-repeat
      bg-cover
      bg-bottom
      bg-[url('https://carconfigurator.ferrari.com/assets/cars/portofinom/packages/default/car-ferrari-portofino-m_splash.jpg')]
    "
    >
      <div class="absolute z-10 flex h-full w-full items-center justify-center">
        <div class="w-1/2 text-center">
          <h1 class="mb-10 font-serif text-8xl text-white">Find your drive</h1>
          <!--          SEARCH BAR START   -->
          <div
              class="
                font-serif
                w-[1000px]
                text-2xl
                rounded-full
                bg-white
                flex
                justify-between
                overflow-hidden
                drop-shadow-2xl
                mx-auto
              "
          >
            <input type="text"
                   class="
                    py-3
                    px-5
                    w-full
                    text-2xl
                    rounded-full
                    focus:outline-none
                   "
                   placeholder="Search by city..."
            >
            <button class="bg-sky-500 px-10 text-white">Search</button>
          </div>
          <!--          SEARCH BAR END   -->
        </div>
      </div>
      <div class="absolute h-full w-full bg-black opacity-50 z-1"></div>
    </div>
    <!--    HOME HERO END  -->
  </div>
</template>
