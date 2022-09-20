<template>
  <div class="home">
    <div class="bg-[#FEFEFF] body m-3">
  <h1 class="text-3xl text-center p-3 text-bold text-[#rgb(35,35,34]">Miami Store</h1>
  <p class="text-center text-xl text-blue-600 italic">Check out our latest products...</p>
    <a href="./AboutView.vue"> <button>add me</button> </a>
  <div class="mb-3 pt-0 text-center justify-center mt-8">
  <input type="text" v-model="search" placeholder="Enter a product..." class="px-3 py-3 placeholder-slate-300  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-48 text-black"/>
</div> 

                <!-- Main -->
               <div class="grid lg:grid-cols-3 md:grid-cols-2 p-8">
                <div  v-for="item in filteredItems" v-bind:key="item.id" class="p-8">
                  <div class="image">
                  <img :src="item.thumbnail" class="images image__img w-full rounded-lg shadow-lg"/>
                  <div class="image__overlay">
                    <div class="content">
                     <a href="./AboutView.vue"> <button class="bg-white px-8 py-3 text-black cursor-pointer">ADD TO BAG</button></a>
                    </div>
                  </div> 
                  </div>
                    <h3 class="text-xl mt-2 text-gray-500">{{item.title}}</h3>
                    <p class="text-x text-black font-bold">${{item.price}}</p>                    
                </div>
               </div> 



         <!-- <div class="grid lg:grid-cols-3 md:grid-cols-2 p-8 main">
                <div v-for="item in filteredItems" v-bind:key="item.id">
                  <div class="m-8 text-center justify-center shadow-lg box border bg-gray-600 rounded-lg">
                    <div class="child">
                      <img :src="item.thumbnail" class="images w-full"/>
                      <h3 class="text-3xl mt-2">{{item.title}}</h3>
                      <p class="text-2xl mt-2">Brand: {{item.brand}}</p>
                      <p class="text-xl mt-2 m-3">Description: {{item.description}}</p>  
                      <div class="flex justify-around m-5">
                      <p class="text-x font-bold text-gray-50">Category: {{item.category}}</p>
                      <p class="text-x text-green-500">Discount: {{item.discountPercentage}}</p>
                      </div>
                      <div class="flex justify-around m-5">
                      <p class="text-sm bg-green-500 rounded px-1 py-1">Price: ${{item.price}}</p>
                      <p class="text-sm bg-red-500 rounded px-1 py-1">Rating: {{item.rating}}</p>   
                      </div>      
                    </div>      
                  </div>
                </div>    
         </div>    -->
         

         <!-- footer -->
         <div class="bg-gray-200 text-center lg:text-left">
          <div class="text-gray-700 text-center p-4">
           <p>Made with &#128151; by Precious</p>
          </div>
        </div>

  </div>
  </div>
</template>


<script>
  import HelloWorld from '@/components/HelloWorld.vue'
  import Vue from 'vue';
  import axios from 'axios';
  import VueAxios from 'vue-axios';
  Vue.use(VueAxios,axios)
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data()
  {
  return{
    list: [],
    search:''
  }
    
  },
  mounted()
  {
    Vue.axios.get('https://dummyjson.com/products')
    .then((resp)=> {
      this.list=resp.data.products;
      console.warn(resp.data.products)
    })
  },
  computed: {
    filteredItems: function(){
      return this.list.filter((item) => {
        return item.title.match(this.search);
      });
    }
  }
  // computed: {
  //   filteredList() {
  //     return this.list.filter(item => {
  //       return item.title.toLowerCase().includes(this.search.toLowerCase())
  //     })
  //   }
  // }

}
</script>

<style>
.body{
font-family: 'Inter', sans-serif;
font-family: 'Lato', sans-serif;    
}

.images{
  width: 50%;
  height: 500px;
  object-fit: cover;
  /* width: 500px;
  height: 500px;
  object-fit: cover;
  justify-content: center; */
}

.main{
  width: 100%;
}
 

.child{
  width: 100%;
  min-height: 400px;
}


</style>
