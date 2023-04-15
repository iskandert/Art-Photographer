<template>
  <footer class="footer">
    <div class="links" v-if="$route.path !== '/contacts'">
      <div class="button" v-for="link in links">
        <a :href="link.link" target="_blank">
          <component :is="link.icon" type="fill" />
        </a>
      </div>
    </div>
    <span class="made">
      Made by
      <a href="https://github.com/iskandert" target="_blank">
        @iskandert
      </a>
    </span>
  </footer>
</template>
<script>
import LogoInstagram from '../components/icons/LogoInstagram.vue'
import LogoTelegram from '../components/icons/LogoTelegram.vue'
import LogoVkontakte from '../components/icons/LogoVkontakte.vue'
import LogoMail from '../components/icons/LogoMail.vue'
import { links } from '../config';

export default {
  components: {
    LogoInstagram,
    LogoTelegram,
    LogoVkontakte,
    LogoMail,
  },
  data() {
    return {
      links
    }
  },
  mounted() {
    console.log(this.$route.path);
  },
}
</script>
<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 15px;
}

.links {
  display: flex;
  width: 65vw;
  max-width: 350px;
  justify-content: space-between;
  padding: 0 0 15px;
}

.links :global(.button) {
  border-radius: 50%;
}

.links a {
  display: flex;
  align-items: center;
  height: 30px;
  width: 30px;
}

span {
  font-size: 13px;
}

/*.made a {
  text-decoration: underline;
}*/
</style>