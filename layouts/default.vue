<template>
   <div>
     <!-- <div class="container mx-auto"> -->
     <v-app
       class="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
     >
       <!-- <v-app :theme="isDark ? 'dark' : 'light'"> -->
       <!-- https://vuetifyjs.com/en/features/application-layout/
         Navbar contains all nav components such as v-app-bar, v-system-bar, v-navigation-drawer, v-bottom-navigation -->
         <Header-nav /> 
       <v-main class="py-4 relative">
         <slot >   </slot>

       </v-main>
       <!-- https://vuetifyjs.com/en/features/application-layout/
         TheFooter contains the v-footer -->
    
     </v-app>
     <!-- </div> -->
   </div>
 </template>