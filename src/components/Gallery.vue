<script>
  import gallery from '../assets/gallery.js';

export default {
  data() {
    return {
      gallery: gallery
    };
  }
}  
</script>

<template>
  <div class="grid">
    <img v-for="(image, index) in gallery" :key="index" :src="image.image" alt="" class="block">
  </div>
</template>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.5rem;
  grid-auto-rows: minmax(100px, auto);
  min-height: calc(100vh - 1rem);
  margin-top: 4rem;
  overflow: hidden;
}

.grid .block {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grid .block:hover {
  opacity: 0.8;
  display: flex;
}

.grid .block:first-child {
  grid-column: 1/3;
  grid-row: 1/4;
}

.grid .block:last-child {
  grid-column: 4/6;
  grid-row: 2/5;
}
</style>