<template>
    <div>
        <v-img v-for="image in images" :src="'compressed/' + image" width="100%"></v-img>

    </div>
</template>

<script setup lang="ts">
const images = [
    "i1.png",
    "i2.png",
    "i3.png",
    "i4.png",
    "i5.png",
    "i6.png",
    "i7.png",
    "i8.png",
    "i9.png",
    "i10.png",
];
</script>

<style scoped>
</style>