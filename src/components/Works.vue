<script setup>
    const springs= [
        {name: "Spring 01", image: "https://source.unsplash.com/random/?spring,pink,nature=1"},
        {name: "Spring 02", image: "https://source.unsplash.com/random/?spring,pink,nature=2"},
        {name: "Spring 03", image: "https://source.unsplash.com/random/?spring,pink,nature=3"},
    ]

    const autumns= [
        {name: "Autumn 01", image: "https://source.unsplash.com/random/?autumn,orange,nature=1"},
        {name: "Autumn 02", image: "https://source.unsplash.com/random/?autumn,orange,nature=2"},
        {name: "Autumn 03", image: "https://source.unsplash.com/random/?autumn,orange,nature=3"},
    ]
</script>

<template>
    <h1>Seasons</h1>
    
    <div class="container">
        <h2>Spring</h2>
        <div class="row">
            <div class="col-12 col-md-4" v-for="spring in springs">
                <div class="title mt-3 mt-md-1">{{ spring.name }}</div>
                <img :src="spring.image" alt="" class="img-fluid">
            </div>
        </div>
    </div>

    
    <div class="container">
        <h2>Autumn</h2>
        <div class="row">
            <div class="col-12 col-md-4" v-for="autumn in autumns">
                <div class="title mt-3 mt-md-1">{{ autumn.name }}</div>
                <img :src="autumn.image" alt="" class="img-fluid">
            </div>
        </div>
    </div>
</template>


<style>

h1{  
  font-size: 5rem;
  font-weight: 700;
  text-align: center;
  margin-top: 1rem;
}

h2{  
  font-size: 2rem;
  font-weight: 500;
  margin-top: 2rem;
}

.title{ 
  font-size: 1rem;
  font-weight: 300;
  font-style: italic;
}

</style>