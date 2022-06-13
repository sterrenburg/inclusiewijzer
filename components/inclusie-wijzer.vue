<template>
    <div>
        <v-img src="compressed/i1.png" width="100%"></v-img>

        <template v-for="image in images">
            <v-img :src="'compressed/' + image" width="100%" class="mt-8"></v-img>
        </template>

    </div>
</template>

<script setup lang="ts">
const images = [
    "i2.png",
    "i3.png",
    "i4.png",
    "i5.png",
    "i6.png",
    "i7.png",
    "i8.png",
    "i9.png",
    "i10.png",
    "i11.png",
    "i12.png",
];
</script>

<style scoped>
</style>