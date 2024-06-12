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
      <div class="row">
          <div class="col-12 col-md-6" v-for="item in items">
              <h2>{{ title }}</h2>
              <div class="d-flex justify-content-between align-items-baseline">
                <div class="title mt-3 mt-md-1">{{ item.name }}</div>
                <p class="pr-4">{{ item.text }}</p>
              </div>
          </div>
      </div>
  </div>
</template>

<style>
.pr-4{
  padding-right: 4rem;
}
</style>