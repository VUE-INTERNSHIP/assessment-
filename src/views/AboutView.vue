<template>
  <div class="about">
      <button class="px-2 py-2 rounded bg-slate-300 m-5">
        <span> &#8592;</span>  <span @click="backBtn">Go Back</span>     
      </button>
    <!-- <h1>The id clicked is:{{$route.params.id}}</h1> -->
    <h1 class="font-mono text-center text-2xl tracking-wide mb-3">More products</h1>
       <div class="box lg:grid-cols-2 grid gap-5 lg:justify-between justify-center mt-5">
        <div v-for="img in image" :key="img" class="img rounded-lg bg-slate-100 p-5 relative mb-3 shadow-lg">
            <img :src="img"/>
        </div>  
      </div>        
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return{
      image:[],
      id: this.$route.params.id,
    }
  },
  methods: {
      backBtn() {
        this.$router.go(-1)
      }
    },
  mounted() {
    this.axios.get(`https://dummyjson.com/products/${this.id}`)
    .then(resp => {
      console.log(resp);
      this.image = resp.data.images
    })
  }
}
</script>


<style>
  .box{
    position: relative;
    width: 100%;
}

.img{
  height: 300px;
  width: 350px;
}  

.img img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
} 

</style>