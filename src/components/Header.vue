<template>
  <header>
    <RouterLink class="title-text" to="/" @click="showMenu = false">
      <h1>Ирина Толстых</h1>
    </RouterLink>
    <button class="button" @click="toggleMenu">
      <Burger class="burger" :class="{ rotated: showMenu }" />
      <Close class="close" :class="{ rotated: !showMenu }" />
    </button>
    <div class="menu desktop">
      <ul>
        <li v-for="(item, idx) in menu" :key="idx" :class="{ active: $route.path === item.path }">
          <RouterLink class="title-text" v-if="item.path" :to="item.path">
            {{ item.name }}
          </RouterLink>
          <a href="#" @click="toggleMenu" class="title-text" v-else>{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </header>
  <div class="menu mobile" :class="{ showed: showMenu }">
    <ul>
      <li v-for="(item, idx) in menu" :key="idx" :class="{ active: $route.path === item.path }">
        <RouterLink class="title-text" v-if="item.path" :to="item.path" @click="toggleMenu">
          {{ item.name }}
        </RouterLink>
        <a href="#" @click="toggleMenu" class="title-text" v-else>{{ item.name }}</a>
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
        // { name: 'Главная', path: '/' },
        { name: 'Портреты', path: '/portraits' },
        { name: 'Свадьбы', path: '/portraits2' },
        { name: 'Сторис', path: '/portraits3' },
        { name: 'Ретушь', path: '/portraits4' },
        { name: 'Инфо', path: '/about' },
        { name: 'Контакты', path: '/contacts' },
      ]
    }
  },
  computed: {
    // vhComp() {
    //   return this.$store.getters.getVh * 100
    // }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
      document.getElementsByTagName('body')[0].classList.toggle('noScroll')
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
  /*border-bottom: var(--ph-border);*/
}

h1 {
  display: inline-block;
  font-size: 22px;
  font-weight: bold;
}

.button {
  aspect-ratio: 1;
  border-radius: 50%;
}

.button svg {
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
  width: 100%;
  transition: .4s all;
  display: flex;
  align-items: start;
  justify-content: center;
}

.menu.mobile {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: var(--ph-color-background-transparent);
  opacity: 0;
  pointer-events: none;
}

.menu.mobile.showed {
  pointer-events: all;
  opacity: 1;
}

.menu>ul {
  list-style: none;
  padding: 0;
  font-size: 36px;
  line-height: 54px;
  text-align: center;
  margin-top: 80px;
  display: grid;
  /*grid-template-rows: repeat(2, min-content);*/
}

.menu.mobile li:not(:last-of-type) {
  margin-bottom: 40px;

}

.menu li>a {
  display: block;
  font-weight: 300;
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

.menu.desktop {
  display: none;
}

@media (min-width: 768px) {
  .menu>ul {
    grid-template-columns: repeat(2, max-content);
    column-gap: 20px;
    margin-top: 60px;
  }
}

@media (min-width: 992px) {
  header {
    height: 90px;
    flex-direction: column;
  }

  h1 {
    margin-bottom: 15px;
  }

  .button {
    display: none;
  }

  .menu.mobile {
    display: none;
  }

  .menu.desktop {
    display: flex;
  }

  .menu>ul {
    margin: 0;
    display: flex;
    justify-content: center;
    font-size: 20px;
    line-height: unset;
  }

  .menu li:not(:last-of-type) {
    margin-right: 22px;

  }
}
</style>