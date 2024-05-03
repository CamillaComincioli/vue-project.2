<script>
 /*     import { onMounted } from 'vue';

const url = 'http://localhost/wordpress_sottosopra/wp-json/wp/v2/posts';

onMounted(() => {
  console.log('mounted');
  fetch(url)
  .then(response => response.json())
  .then(data => console.log(data)); 

});*/
</script>

<script setup>
import {onMounted, ref} from 'vue';

const count = ref(0);
const items = ref([]);

const increment = () => {
  count.value++;
  console.log(count.value);
}

onMounted(() => {
  console.log('Articles mounted');
  const url = 'http://localhost/wordpress_sottosopra/wp-json/wp/v2/posts'; // to be replaced with your own URL

  /* with promises
  fetch(url)
  .then(response => response.json())
  .then(json => console.log(json));
  */

  /* with async/await */
  const getPosts = async () => {
    const response = await fetch(url);
    const json = await response.json();
    items.value = json;
    count.value = json.length;
    console.log(json);
  }
  getPosts();
});

</script>

<template>
  <div class="counter">
    <div class="container">
      <span>{{ count }}</span>
      <a href="#" @click="increment">increment</a>
    </div>
  </div>

  <h1>Articles</h1>
  <div class="container">
     <div id="articles">
      <div class="article" v-for="item in items" :key="item.id">
        <h2 v-html="item.title.rendered"></h2>
        <p v-html="item.content.rendered"></p>
      </div>  
    </div>
  </div>
 
</template>

<style lang="scss" scoped>
span {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
}
</style>