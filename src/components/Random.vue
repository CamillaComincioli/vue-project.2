<script setup>
import { defineProps, ref, computed } from 'vue';

// Define the props
const props = defineProps({
  title: String,
  items: {
    type: Array,
    required: true,
    default: () => []
  }
});

// Function to get random elements from an array
function getRandomItems(array, num) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

// Reactive property for the random cocktail
const randomCocktail = ref(getRandomItems(props.items, 1)[0]);

// Log the selected random cocktail
console.log("cocktail: ", randomCocktail.value);
</script>

<template>
  <div class="container">
    <div class="row box">
        <div class="col-12 col-md-6">
            <img :src="randomCocktail.image" class="img-fluid" alt="">
        </div>
        <div class="col-12 col-md-6 text-group">
            <div class="title">{{ randomCocktail.name }}</div>
            <p>{{ randomCocktail.text }}</p>
        </div>
        
      </div>
    </div>
</template>

<style>
.box{
    margin-bottom: 6rem;
}

@media screen and (max-width: 767px) {
    .box {
        margin-bottom: 3rem;
    }
}

.text-group{
    margin-top: 4rem;
}

@media screen and (max-width: 767px) {
    .text-group {
        margin-top: 1rem;
    }
}
</style>