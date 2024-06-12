<script setup>
import { defineProps } from 'vue';

defineProps({
  title: String,
  items: {
    type: Array,
    required: true,
    default: []
  }
});

</script>


<template>
  <div class="container">
      <h2>{{ title }}</h2>
      <div class="row">
          <div class="col-12 col-md-4" v-for="item in items">
              <img :src="item.image" alt="" class="img-fluid">
              <div class="title mt-3 mt-md-1">{{ item.name }}</div>
              <p class="">{{ item.text }}</p>
          </div>
      </div>
  </div>
</template>