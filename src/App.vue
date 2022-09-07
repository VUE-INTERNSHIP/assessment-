<template>
   <TodoApp />
</template>

<script>
  import TodoApp from './components/TodoApp.vue'
  export default {
    name: 'App',
    components: {
       TodoApp,

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
  /* text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
