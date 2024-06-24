<script setup>
import Random from './Random.vue';
import randoms from '../assets/randoms.js';
import { ref } from 'vue';

// Define reactive properties
const showMain = ref(false);
const randomKey = ref(0);

// Handle button click to show the random component
const handleRandom = () => {
  console.log('click');
  randomKey.value += 1; // Increment the key to force re-render
  showMain.value = true;
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-8">
        <h2 class="">Sei indeciso e non sai cosa ordinare?</h2>
        <p class="">
          Lo sappiamo che scegliere è difficile, infatti ti diamo la possibilità di non farlo.
          <br>L'unica cosa che devi fare è cliccare sul bottone, e in modo randomico ti verrà proposto un cocktail.
          <br>Se invece stai leggendo dal cellulare, shakera forte!
          <br>Cosa aspetti? Lasciati tentare dalla sorte.
        </p>
      </div>
    </div>
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    <button @click="handleRandom" class="custom-btn btn-5"><span>Scelta casuale</span></button>
  </div>

  <div v-if="showMain" id="main">
    <div class="container">
      <div class="">
        <Random :key="randomKey" :items="randoms" />
      </div>
    </div>
  </div>
</template>


<style>
button {
  margin-top: 1rem;
  margin-bottom: 3rem;
}

.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
}

.btn-5 {
  width: 160px;
  height: 60px;
  line-height: 42px;
  padding: 0;
  border: none;
  background: rgb(102, 0, 255);
background: linear-gradient(0deg, rgb(102, 0, 255) 0%, rgb(140, 0, 255) 100%);
}
.btn-5:hover {
  color: rgb(191, 0, 255);
  background: transparent;
   box-shadow:none;
}

.btn-5:before,
.btn-5:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: rgb(191, 0, 255);
  box-shadow:
   -1px -1px 5px 0px #fff,
   7px 7px 20px 0px #0003,
   4px 4px 5px 0px #0002;
  transition:400ms ease all;
}

.btn-5:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}

.btn-5:hover:before,
.btn-5:hover:after{
  width:100%;
  transition:800ms ease all;
}

 #main {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 767px) {
    .bg {
        display: block;
        margin-left: 1vw;
    }
}
</style>