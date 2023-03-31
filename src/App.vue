<template>
  <Header />
  <div class="cont" :style="`height:${vhComp}px`">
    <div class="main">
      <div />
      <router-view></router-view>
      <!-- <h1>
          Здесь будет сайт крутого фотографа
        </h1> -->
      <Footer class="footer" />
    </div>
  </div>
  <!-- <div class="ggg">
    ggg
  </div> -->
</template>

<script>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      vh: window.innerHeight * 0.01,
    }
  },
  computed: {
    vhComp() {
      return this.$store.getters.getVh * 100
    }
  },
  created() {
    window.addEventListener('resize', () => {
      this.$store.commit('SET_VH', window.innerHeight * 0.01)
      // document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  },
}
</script>

<style scoped>
.cont {
  width: 100%;
  padding-top: 40px;
  z-index: 90;
  overflow-y: auto;
}

.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


h1 {
  text-align: center;
}

.ggg {
  background-color: aqua;
}
</style>
