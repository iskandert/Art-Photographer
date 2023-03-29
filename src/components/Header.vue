<template>
  <header>
    <h1>Ирина Толстых</h1>
    <button @click="toggleMenu">
      <Burger class="burger" :class="{ rotated: showMenu }" />
      <Close class="close" :class="{ rotated: !showMenu }" />
    </button>
    <div class="menu" :class="{ showed: showMenu }" :style="`height:${vhComp}px`">
      <ul>
        <li>Главная</li>
        <li>Категории</li>
        <li>Контакты</li>
        <li>О себе</li>
      </ul>
    </div>
  </header>
</template>
<script>
import { RouterLink } from 'vue-router'
import Burger from './icons/Burger.vue';
import Close from './icons/Close.vue';

export default {
  components: {
    Burger,
    Close,
  },
  data() {
    return {
      showMenu: false,
    }
  },
  computed: {
    vhComp() {
      return this.$store.getters.getVh * 100 - 40
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  },
}
</script>
<style scoped>
header {
  height: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h1 {
  font-size: 18px;
}

button {
  aspect-ratio: 1;
  border-radius: 50%;
}

button svg {
  transition: .4s all;
}

.rotated {
  transform-origin: center;
  opacity: 0;
  transition: .4s all;
}

.rotated.burger {
  transform: rotate(.5turn);
}

.rotated.close {
  transform: rotate(-.5turn);
}

.menu {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  transition: .4s all;
}

.showed {
  pointer-events: all;
  opacity: 1;
}
</style>