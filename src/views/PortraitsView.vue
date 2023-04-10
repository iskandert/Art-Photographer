<template>
  <div class="album wrapper">
    <img :src="url" v-for="(url, idx) in photosURL" :key="idx" alt="just a photo">

  </div>
</template>

<script setup>
import { photosURL } from '../config';

</script>

<style scoped>
.album {
  gap: 10px;
  display: grid;
  grid-template-columns: 1fr;
}

.photo {
  height: min-content;
}

img {
  width: 100%;
}
</style>
