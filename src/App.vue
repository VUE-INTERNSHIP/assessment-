<template>
   <NavBar />
  <router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue'; 
export default {
  name: 'App',
  components: {
    NavBar
},
  
} 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background-color: hsl(0, 5%, 80%);
  bc */
  background-color: #1d222a;
  /* text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
