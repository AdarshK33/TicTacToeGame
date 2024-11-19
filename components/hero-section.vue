<template>
  <section class=" relative h-screen bg-cover bg-center">
    <div class="absolute top-1/2 left-1/4 transform -translate-y-1/2 space-y-4">
      <p class="text-xl font-semibold text-gray-500">Hello</p>
      <p class="text-5xl font-bold tracking-wide text-black">I'M ADARSH</p>
      <p class="text-2xl text-gray-700 font-light">I am Software Engineer & MER[v]N FullStack Developer</p>
      <div class="space-x-4">
        <a href="/contact" class="px-4 py-2 rounded-md border-2 border-gray-700 text-gray-700 font-semibold hover:bg-gray-700 hover:text-white">Hire Me</a>
        <button class="px-4 py-2 rounded-md bg-black text-white font-semibold">Download CV</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-bg {
  background-image: url('../assets/images/adarsh.jpg');
  background-size: 40%; /* Adjust this value to your desired image size */
  background-repeat: no-repeat;
  background-position: right center;
}

.h-screen {
    height: 100vh; /* Ensure the section height is the full viewport height */
  }

</style>
