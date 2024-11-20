<template>
  <footer class="bg-gray-800 text-gray-200 py-6">
    <div class="container mx-auto px-4 text-center">
      <p class="text-sm">&copy; Copyright by Adarsh - {{ currentYear }}</p>
      <p class="text-sm">All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

// Get the current year dynamically
const currentYear = new Date().getFullYear();
</script>

<style scoped>
/* Additional styles (if any) */
</style>
