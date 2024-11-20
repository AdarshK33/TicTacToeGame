<template>
  <section 
    class="relative h-screen bg-cover bg-center flex items-center justify-left custom-bg"
  >
  <div 
  class="text-center md:text-left space-y-4 p-4 
         absolute bottom-4 w-full 
         md:static md:w-auto md:top-1/2 md:left-1/4 md:transform md:-translate-y-1/2">
  <p class="text-lg md:text-xl font-semibold text-gray-500">Hello</p>
  <p class="text-3xl md:text-5xl font-bold tracking-wide text-black">I'M ADARSH</p>
  <p class="text-lg md:text-2xl text-gray-700 font-light">
    I am a Software Engineer & MERN FullStack Developer
  </p>
  <div class="space-x-4">
    <a 
      href="/contact" 
      class="px-4 py-2 rounded-md border-2 border-gray-700 text-gray-700 font-semibold hover:bg-gray-700 hover:text-white"
    >
      Hire Me
    </a>
    <a 
      href="##" 
      download 
      class="px-4 py-2 rounded-md bg-black text-white font-semibold hover:bg-gray-800"
    >
      Download CV
    </a>
  </div>
</div>

  </section>
</template>

<style scoped>
.custom-bg {
  background-image: url('../assets/images/adarsh.jpg');
  background-size: contain; /* Adjust to fit the image proportionally */
  background-repeat: no-repeat;
  background-position: right center;
}
</style>
