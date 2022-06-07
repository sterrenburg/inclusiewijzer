<template>
  <v-app>
    <v-app-bar theme="dark" flat>
      <v-app-bar-title>De Inclusiewijzer</v-app-bar-title>
      <code-menu></code-menu>
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
