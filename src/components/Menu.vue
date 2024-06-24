<script setup>
import { defineProps } from 'vue';

const props = defineProps({
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
    <!-- <pre>
      {{ items }}
    </pre> -->
      <h2>{{ title }}</h2>
    <div v-for="category in (new Set(items.map(item => item.category))) " class="row">
      <h2 class="title col-12 col-md-6">{{ category }}</h2>
      <ul class="col-12 col-md-6">
        <li class="d-flex justify-content-between align-items-baseline" v-for="item in items.filter(item => item.category == category)">
          <strong>{{ item.name }}</strong> {{ item.price }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.pr-4{
  padding-right: 4rem;
}
</style>