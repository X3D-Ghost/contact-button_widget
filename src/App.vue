<script setup>
import ContactWidget from "./components/ContactWidget.vue";
const socials = [

]
const widgetParams = {
  socials: [
    {
      url: 'https://vk.com/',
      title: 'Вконтакте',
      type: 'vk'
    },
    {
      url: 'https://ok.ru/',
      title: 'Одноклассники',
      type: 'ok'
    },
    {
      url: 'https://dzen.ru/',
      title: 'Дзен',
      type: 'dzen'
    },
    {
      url: 'https://www.youtube.com/',
      title: 'Youtube',
      type: 'yt'
    },
  ],
  widgetType: 'popup',
  needTabs: true,
}
</script>

<template>
  <ContactWidget v-bind="widgetParams"/>
</template>

<style scoped>
/*#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}*/
/*.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}*/
</style>
