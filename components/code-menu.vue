<template>
    <v-menu anchor="bottom start" origin="start" :close-on-content-click="false" transition="slide-y-transition">
        <template #activator="{ props }">
            <v-btn icon="mdi-qrcode" title="QR code" class="ml-4" v-bind="props">
            </v-btn>
        </template>

        <v-card width="300" class="code">
            <v-img src="public/qr-code.png"></v-img>
        </v-card>
    </v-menu>
</template>

<script setup lang="ts">

</script>

<style scoped>
.code {
    margin-top: 18px;
    right: 250px;
}
</style>