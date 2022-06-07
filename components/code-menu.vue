<template>
    <!-- <v-menu anchor="bottom start" origin="start" :close-on-content-click="false" transition="slide-y-transition">
        <template #activator="{ props }">
            <v-btn icon="mdi-file-pdf-box" title="Bekijk PDF" class="ml-4" v-bind="props">
            </v-btn>
        </template>

        <v-card width="300" class="code">
            <v-img src="qr-code.png"></v-img>
        </v-card>
    </v-menu> -->
    <v-btn icon="mdi-file-pdf-box" title="Bekijk PDF" href="/de_inclusiewijzer.pdf" target="_blank"></v-btn>
</template>

<script setup lang="ts">

</script>

<style scoped>
.code {
    margin-top: 18px;
    right: 250px;
}
</style>