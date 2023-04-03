<template>
  <div class="contacts wrapper">
    <p>
      Буду рада предложениям о&nbsp;сотрудничестве
      и&nbsp;заявкам на&nbsp;съемки
    </p>
    <div class="links">
      <a href="#" target="_blank">
        <LogoInstagram type="fill" />
        <span>@irina_riiii</span>
      </a>
      <a href="https://t.me/irina_riiii" target="_blank">
        <LogoTelegram type="fill" />
        <span>@irina_riiii</span>
      </a>
      <a href="https://vk.com/irina_riii" target="_blank">
        <LogoVkontakte type="fill" />
        <span>Ирина Толстых</span>
      </a>
      <a href="mailto:artistirinka@gmail.com" type="email" target="_blank">
        <LogoMail type="fill" />
        <span>artistirinka@gmail.com</span>
      </a>
    </div>
  </div>
</template>
<style scoped>
.contacts {
  align-self: center;
  text-align: center;
}

p {
  font-size: 15px;
}

a {
  display: flex;
  gap: 7px;
  align-items: center;
  padding: 0 10px;
  line-height: 20px;
}

a:not(:last-of-type) {
  margin-bottom: 10px;
}

a:active span {
  border-bottom: 2px solid var(--ph-color-text-active);
  color: var(--ph-color-text-active);
}

@media (hover: hover) {
  a:hover span {
    border-bottom: 2px solid var(--ph-color-text-active);
    color: var(--ph-color-text-active);
  }
}

.links {
  width: max-content;
  margin: 20px auto;
}

a :global(svg) {
  height: 25px;
  width: 25px;
}
</style>
<script>
import LogoInstagram from '../components/icons/LogoInstagram.vue'
import LogoTelegram from '../components/icons/LogoTelegram.vue'
import LogoVkontakte from '../components/icons/LogoVkontakte.vue'
import LogoMail from '../components/icons/LogoMail.vue'

export default {
  components: {
    LogoInstagram,
    LogoTelegram,
    LogoVkontakte,
    LogoMail,
  }
}
</script>