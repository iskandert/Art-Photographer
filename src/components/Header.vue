<template>
  <header>
    <h1>Ирина Толстых*</h1>
    <button @click="toggleMenu">
      <Burger class="burger" :class="{ rotated: showMenu }" />
      <Close class="close" :class="{ rotated: !showMenu }" />
    </button>
  </header>
  <div class="menu" :class="{ showed: showMenu }" :style="`height:${vhComp}px`">
    <ul>
      <li v-for="(item, idx) in menu" :key="idx" :class="{ active: $route.path === item.path }">
        <!-- <RouterLink :to="item.path"> {{ item.name }} </RouterLink> -->
        <RouterLink :to="item.path" @click="showMenu = false"> {{ item.name }} </RouterLink>
      </li>
    </ul>
  </div>
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
      menu: [
        { name: 'Портфолио', path: '/' },
        { name: 'Контакты', path: '/contacts' },
        { name: 'О себе', path: '/about' },
      ]
    }
  },
  computed: {
    vhComp() {
      return this.$store.getters.getVh * 100
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
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 110;
  background-color: var(--ph-color-background);
  border-bottom: var(--ph-border);
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--ph-color-background-transparent);
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  transition: .4s all;
  display: flex;
  align-items: center;
  justify-content: center;
}

.showed {
  pointer-events: all;
  opacity: 1;
}

.menu>ul {
  list-style: none;
  padding: 0;
  font-size: 36px;
  line-height: 72px;
  text-align: center;
  margin-bottom: 40px;
}

.menu li {
  padding: 0 20px;
  margin-bottom: 24px;
}

.menu li>a {
  font-weight: 200;
  padding: 0 20px 5px;
  color: #000000;
}

.menu li:not(:last-of-type)::after {
  /*content: '';
  /*width: 15px;
  height: 15px;
  aspect-ratio: 1;
  bottom: -25px;
  border-radius: 50%;*/
  width: 50px;
  height: 1px;
  bottom: -18px;
  background-color: rgb(0, 0, 0);
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
}

.menu li.active>a {
  border-bottom: 2px solid var(--ph-color-text-active);
  color: var(--ph-color-text-active);
}
</style>