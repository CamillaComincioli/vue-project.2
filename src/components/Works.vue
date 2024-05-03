<script setup>
    import works from '../assets/works.js';
    import List from './List.vue';
    import Gallery from './Gallery.vue';
    import Articles from './Articles.vue';

    const tags =  [...new Set(works.map(w => w.tags).flat())] //.sort()
    console.log(tags);
</script>

<template>
    <div class="foreground container">
      <div class="d-flex align-items-center flex-column">
        <img src="https://static.wixstatic.com/media/384146_8c28e95928844b89b9d3a55029502eff~mv2.png/v1/fill/w_134,h_162,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/384146_8c28e95928844b89b9d3a55029502eff~mv2.png" alt="" class="logo">
        <img src="https://img.icons8.com/?size=512&id=HVEtrBP5HF6L&format=png" alt="" class="arrow">
      </div>
    </div>

    <div class="background">
      <img src="https://static.wixstatic.com/media/384146_e999f1a8b1f14418bfc789dfcfdee485~mv2.jpg/v1/fill/w_2022,h_1082,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/IMG_8683_edited.jpg" alt="" class="img-fluid">
    </div>

    <div class="container">
      <div class="row">
          <div class="col-12 col-md-8">
            <h2 class="">SOTTOSOPRA RAFFA: il locale che non c'era</h2>
            <p class="">
              Dalla passione per il buon bere e il buon cibo nasce Sottosopra! 
              Un locale che combina una cucina semplice, ma gustosa, a dei cocktail deliziosi che ben si sposano con la location ed il contesto.
              Non solo cocktail da bere, anche delle ottime birre alla spina e in bottiglia.
              E a fine pasto? Un buon Whisky non lo beviamo? Salute!</p>          
          </div>
      </div>
    </div>


    <div class="tag mt-4" v-for="tag in tags">
        <List :title="tag" :items="works.filter(w => w.tags.includes(tag))" />
    </div>

    <div>
      <Gallery/>
    </div>

</template>


<style>
.background{
  position: relative;
}

.foreground{
  position: absolute;
  z-index: 99;
}

.logo{
  height: 150px;
  width: auto;
}

.arrow{
  filter: invert(91%) sepia(39%) saturate(0%) hue-rotate(25deg) brightness(109%) contrast(102%);
  height: 70px;
  width: auto;
}


h1{  
  font-family: "Raleway", sans-serif;
  font-size: 5rem;
  font-weight: 900;
  text-align: center;
  margin-top: 1rem;
}

h2{  
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  font-weight: 800;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.title{ 
  font-family: "Raleway", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
}

p{
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  font-weight: 400;
}

</style>