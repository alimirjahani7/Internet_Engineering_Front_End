<template>
  <div class="flex flex-col-reverse lg:flex-row container h-screen w-full mx-0">
    <div class="lg:w-1/2 flex lg:flex-col justify-between">
      <img class="object-cover lg:h-full md:h-full sm:w-full" src="main-half.jpg">
    </div>
    <div class="flex  flex-col container  h-full w-full lg:w-1/2 justify-center items-center">
      <div class="flex flex-col h-full w-1/2 justify-center items-center">
        <i class="self-start w-13 h-13 text-4xl text-blue fab fa-twitter"></i>
        <p class="self-start text-2xl font-sans font-bold mt-6">See what's happening in
          the world right now</p>
        <pre class="self-start font-bold text-sm mt-10">Join Twitter today.</pre>
        <router-link to="/register"
            class="h-9  text-center  w-full hover:bg-darkblue text-1.5xl text-white bg-blue border border-blue rounded-full py-1 px-4 mt-3">
          Sign up
        </router-link>
        <router-link to="/login"
            class="h-9  text-center  w-full  hover:bg-lightblue text-1.5xl text-blue border border-blue rounded-full py-1 px-4 mt-2">
          login
        </router-link>

      </div>
    </div>

  </div>


</template>

<script>
export default {};
</script>