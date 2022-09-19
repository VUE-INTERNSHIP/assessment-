<template>
  <div class="home">
    <h1>Products</h1>
    <product a/>
  </div>
</template>

<script>
// @ is an alias to /src
import product from '@/components/product.vue'

export default {
  name: 'HomeView',
  components: {
    product
  }
}
</script>
<style>
  h1{
    text-align:center;
  }
</style>