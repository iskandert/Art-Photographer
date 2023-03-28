<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="cont">
    <h1>
      Здесь будет сайт крутого фотографа
    </h1>
  </div>
</template>

<style scoped>
.cont {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
}
</style>
