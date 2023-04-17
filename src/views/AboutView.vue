<template>
  <div class="about wrapper">
    <!-- <h1>This is an about page</h1> -->
    <div class="infoCard" v-for="(card, idx) in infoCards" :key="idx">
      <div class="text">
        <h4>{{ card.title }}</h4>
        <p>{{ card.message }}</p>
      </div>
      <div class="image" :style="`background-image: url(${card.img})`">
      </div>
    </div>

  </div>
</template>

<script>
import { infoCards } from '../config.js'

export default {
  data() {
    return {
      infoCards
    }
  }
}
</script>

<style scoped>
h4 {
  font-weight: light;
  font-size: 24px;
  margin-bottom: 5px;
}

p {
  font-size: 16px;
}

.image {
  height: 200px;
  background-size: cover;
  margin: 20px 0;
}
</style>
