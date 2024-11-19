<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'

const center = { lat: 12.9716, lng: 77.5946}
</script>

<template>
  <GoogleMap
  api-key="AIzaSyB5a1EeKYds12eMN4VgNjeN4VnXahIwhbU"
  style="width: 100%; height: 500px"
  :center="center"
  :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>