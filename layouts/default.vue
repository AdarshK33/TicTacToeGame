<template>
   <div>
     <!-- <div class="container mx-auto"> -->
     <v-app
       class="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
     >
       <!-- <v-app :theme="isDark ? 'dark' : 'light'"> -->
       <!-- https://vuetifyjs.com/en/features/application-layout/
         Navbar contains all nav components such as v-app-bar, v-system-bar, v-navigation-drawer, v-bottom-navigation -->
         <Header-nav class="fixed z-50" /> 
        <v-main class="py-4 relative ">
         <slot >   </slot>

       </v-main>
       <!-- https://vuetifyjs.com/en/features/application-layout/
         TheFooter contains the v-footer -->
    <Footer></Footer>
     </v-app>
     <!-- </div> -->
   </div>
 </template>

<script setup>
useHead({
  titleTemplate: 'AK',
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ]
})
</script>

<style>
body {
  font-family: 'Roboto';
}


</style>