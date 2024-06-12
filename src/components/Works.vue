<script setup>
    import works from '../assets/works.js';
    import List from './List.vue';
    import Gallery from './Gallery.vue'; 
    import menu from '../assets/menu.js';
    import Menu from './Menu.vue';
    import Button from './Button.vue';
    import Footer from './Footer.vue';

    const workTags =  [...new Set(works.map(w => w.tags).flat())]
    console.log(workTags);

    const menuTags =  [...new Set(menu.map(w => w.tags).flat())]
    console.log(menuTags);

</script>

<template>
    <div class="foreground container-fluid">
        <img src="https://static.wixstatic.com/media/384146_8c28e95928844b89b9d3a55029502eff~mv2.png/v1/fill/w_134,h_162,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/384146_8c28e95928844b89b9d3a55029502eff~mv2.png" alt="" class="logo">
        <img src="https://img.icons8.com/?size=512&id=HVEtrBP5HF6L&format=png" alt="" class="arrow">
    </div>

    <div class="background"></div>

    <div class="container">
      <div class="row">
          <div class="col-12 col-md-8">
            <h2 class="">SOTTOSOPRA RAFFA: il locale che non c'era</h2>
            <p class="">
              Dalla passione per il buon bere e il buon cibo nasce Sottosopra! 
              <br>Un locale che combina una cucina semplice, ma gustosa, a dei cocktail deliziosi che ben si sposano con la location ed il contesto.
              Non solo cocktail da bere, anche delle ottime birre alla spina e in bottiglia.
              <br>E a fine pasto? Un buon Whisky non lo beviamo? Salute!</p>          
          </div>
      </div>
    </div>


    <div class="tag mt-4" v-for="tag in workTags">
        <List :title="tag" :items="works.filter(w => w.tags.includes(tag))" />
    </div>

    <div>
      <Gallery/>
    </div>
    
    <div>
      <h1>Il nostro menu:</h1>
      <div v-for="tag in menuTags" >
      <Menu :title="tag" :items="menu.filter(w => w.tags.includes(tag))"/>
      </div>
    </div>
    <div>
      <Button/>
    </div> 
    <div>
      <Footer/>
    </div>

</template>


<style>
.background{
  position: relative;
}

.foreground{
  position: relative;
  height: 100vh;
  background-image: url(https://static.wixstatic.com/media/384146_e999f1a8b1f14418bfc789dfcfdee485~mv2.jpg/v1/fill/w_2022,h_1082,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/IMG_8683_edited.jpg);
  background-position: center;
  background-size: cover;
}

.logo{
  height: 150px;
  width: auto;
  position: absolute;
  top: 0;
  left:50%;
  transform: translate(-50%, -50%);
  margin-top: 6rem;
}

.arrow{
  filter: invert(91%) sepia(39%) saturate(0%) hue-rotate(25deg) brightness(109%) contrast(102%);
  height: 70px;
  width: auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  margin-bottom: 3rem;
  opacity: 1;
  transition: all 0.5s ease;
}

.arrow:hover{
  opacity: 0.7;
  margin-bottom: 4rem;
}

h1{  
  font-family: "Raleway", sans-serif;
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  margin-top: 2rem;
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