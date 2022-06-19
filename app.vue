<template>
  <v-app>
    <v-app-bar theme="dark" flat>
      <v-app-bar-title>De Inclusiewijzer</v-app-bar-title>
      <v-btn  size="small" title="Bekijk handleiding" href="/handleiding_inclusiewijzer.pdf" target="_blank">Handleiding</v-btn>
      <v-btn  size="small" title="Bekijk PDF" href="/de_inclusiewijzer.pdf" target="_blank">Inclusiewijzer</v-btn>
      <v-btn  size="small" title="Bekijk inclusiekaarten" href="/inclusiekaarten.pdf" target="_blank">Inclusiekaarten</v-btn>
      <v-btn  size="small" title="Bekijk invulwijzer" href="/invulwijzer_leerkrachten.docx" target="_blank">Invulwijzer</v-btn>
    </v-app-bar>
    <v-main class="bg">
      <inclusie-wijzer></inclusie-wijzer>
    </v-main>
    <v-footer theme="dark"><span class="mx-auto my-4 text-caption"><a
          href="https://www.linkedin.com/in/myrthe-sterrenburg" target="_blank">🌸
          2022 Myrthe
          Sterrenburg</a></span></v-footer>
  </v-app>
</template>
<style scoped lang="scss">
a {
  text-decoration: none;
}

.bg {}
</style>
