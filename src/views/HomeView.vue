<template>
  <div class="background">
    <div class="filter"></div>
    <h1 class="welcome-title">Вдохновляющее приветственное слово</h1>
  </div>
  <div class="wrapper">
    <div class="text">
      <p>
        Прежде всего понимание сущности ресурсосберегающих технологий позволяет оценить значение укрепления
        демократической
        системы.
      </p>
    </div>
    <div class="album">
      <div class="left mobile">
        <img :src="url" v-for="(url, idx) in photosURL.filter((_, idx) => !(idx % 2))" :key="idx" alt="just a photo">
        <!-- <div v-for="(url, idx) in photosURL.filter((_, idx) => !(idx % 2))" :key="idx" class="photo">
            <img :src="url" alt="just a photo">
          </div> -->
      </div>
      <div class="right mobile">
        <!-- <div v-for="(url, idx) in photosURL.filter((_, idx) => idx % 2)" :key="idx" class="photo">
            <img :src="url" alt="just a photo">
          </div> -->
        <img :src="url" v-for="(url, idx) in photosURL.filter((_, idx) => idx % 2)" :key="idx" alt="just a photo">
      </div>
      <div class="col">
        <img :src="url" v-for="(url, idx) in photosURL.filter((_, idx) => idx % 3 === 0)" :key="idx" alt="just a photo">
      </div>
      <div class="col">
        <img :src="url" v-for="(url, idx) in photosURL.filter((_, idx) => idx % 3 === 1)" :key="idx" alt="just a photo">
      </div>
      <div class="col">
        <img :src="url" v-for="(url, idx) in photosURL.filter((_, idx) => idx % 3 === 2)" :key="idx" alt="just a photo">
      </div>
    </div>
  </div>
</template>

<script setup>
import { photosURL } from '../config';

</script>

<style scoped>
.background {
  height: 50vh;
  background-color: #b21919;
  background-image: url('https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-caucasian-young-woman-model_158538-2774.jpg?w=360&t=st=1680510129~exp=1680510729~hmac=cd15a4af0f6677a0d83efe14406356b03697145fcc9fa6b0bd296217ca463730');
  background-size: cover;
}

.filter {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.welcome-title {
  display: inline-block;
  max-width: 80vw;
  position: absolute;
  bottom: 10vw;
  left: 10vw;
  font-size: 35px;
  line-height: 40px;
  color: #fff;
}

p {
  display: inline-block;
  padding: 0 calc(10vw - 15px);
  margin-bottom: 20px;
  max-width: 400px;
}

.album {
  padding: 0 calc(10vw - 15px);
  gap: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.left,
.right {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.col {
  display: none;
}

.photo {
  height: min-content;
}

img {
  width: 100%;
}

@media (min-width: 992px) {
  .background {
    height: calc(100vh - 90px);

  }

  .welcome-title {
    font-size: 50px;
  }

  .album {
    grid-template-columns: repeat(3, 1fr);
  }

  .text {
    display: flex;
    justify-content: center;
  }

  p {
    padding: 20px 0;
    text-align: center;
    font-size: 24px;
    line-height: 28px;
  }

  .mobile {
    display: none;
  }

  .col {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
