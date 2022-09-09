<template>
  <div>
    <!--<div class="justify-content-center container-fluid">
      <ul class=" nav nav-pills nav-tabs justify-content-center p-4 container-fluid border">
      <li class="nav-item col p-4"><router-link to="/">Home</router-link></li>
      <li class="nav-item col p-4"><router-link to="/about">About</router-link></li>
      <li class="nav-item col p-4"><router-link to="/contact">Contact Us</router-link></li>
    </ul>
  </div>-->

  <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><b>GladCoTECH</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page" >Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" >About</router-link>
        </li>
        <li>
          <router-link to="/contact" class="nav-link" >Contact Us</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img id="img1" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img id="img2" class="d-block w-100" alt="...">
    </div><div class="bg-text">
       <h3 class="text-blue-200 tracking-wide text-2xl font-bold"><b>GladCoTECH</b></h3>
      <h1 class="text-5xl font-bold tracking-widest mb-3 mt-3">TECH AT ITS PEAK</h1>
      <button class="btn btn-outline rounded-pill border-white font-bold text-xl text-white mt-5 hover:bg-blue-500">Our Products</button> 
      </div>
    
    <div class="carousel-item">
      <img id="img3" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img id="img4" class="d-block w-100" alt="...">
    </div>
    
  </div>
</div>
    <router-view/>
    <footer class="jumbotron"> <div class="text-center container-fluid jumbotron">
      © GladCoTECH.com, Inc. All rights reserved.
    </div></footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  .nav-item{
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
img {
  width: 100%;
  height: 50%;
}
</style>
