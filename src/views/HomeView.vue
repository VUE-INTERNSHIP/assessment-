<template>
  
  <div class="bg-gray-900 body ">
  <h1 class="text-3xl text-center  text-bold text-white font-serif p-5">Miami Store</h1>
  <p class="text-center text-xl text-blue-600 italic">Check out our latest products...</p>

  
  <div class="mb-3 pt-0 text-center justify-center mt-8">
  <input type="text" v-model="search" placeholder="Search a product..." class="px-5 py-3 placeholder-slate-300  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none w-96 focus:ring  text-black"/>
  </div> 

    <select v-model="categories"  class="form-select rounded px-2 py-2 m-5 text-black" aria-label="Default select example">
      <option value="" disabled>Open to select product</option>
      <option :value="filter" v-for="filter in Search" :key="filter">{{filter}}</option>
   </select>


                <!-- Main -->
     <div class="grid lg:grid-cols-3 md:grid-cols-2 p-8 justify-center">
      <div v-for="item in filteredItems" v-bind:key="item.id" class="m-3">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <router-link :to="{ name: 'about', params: { id: item.id} }">
            <div class="images">
              <img class="" :src="item.thumbnail" alt="Sunset"/>
            </div>         
          </router-link>

            <!-- <div v-for="image in item.images" :key="image">
                <img :src="image" />
              </div> -->

          <div class="px-6 py-4 bg-gray-50">
            <div class="flex justify-between">
            <div class="font-bold text-xl">{{item.title}}</div>
            <span class=" text-xl font-bold text-gray-700 mr-2 ">${{item.price}}</span>
            </div>
            <p class="font-bold text-xl mb-2 mt-2 font-italic">{{item.brand}}</p>
            <div class=" flex justify-between mt-3">
            <p class="font-bold text-xl mb-2 font-italic">{{item.category}}</p>
            <div class="flex">

              <svg class="w-5 h-5 fill-current text-orange-700" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
              </svg>
              <svg class="w-5 h-5 fill-current text-orange-700" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
              </svg>
              <svg class="w-5 h-5 fill-current text-orange-700" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
              </svg>
              <svg class="w-5 h-5 fill-current text-orange-500" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
              </svg>
              <svg class="w-5 h-5 fill-current text-orange-500" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
              </svg>
              <span class="mx-2 text-sm font-semibold text-black text-left">{{item.rating}}</span>
            </div>
            
            </div>
            <p class="text-gray-700 text-base desc">{{item.description}}</p> 
            <!-- <p class="text-center text-black text-x font-mono mt-3">More products</p> -->
   
  

              <div class=" flex justify-between mt-3">
              <span class="font-semibold text-sm mr-2 mb-2 text-red-500 text-right">Discount: {{item.discountPercentage}}%</span>
              <router-link :to="{ name: 'about', params: { id: item.id} }"> <button class="rounded px-1 py-1 bg-blue-500 cursor-pointer hover:bg-blue-300">View more </button> </router-link>
            </div>

        </div>
      </div> 

      </div>
    </div>

   
         <!-- footer -->
         <div class="bg-gray-200 text-center lg:text-left">
          <div class="text-gray-700 text-center p-4">
           <p>Made with &#128151; by Precious</p>
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
    image: [],
    search:'',
    categories: ''
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
        return this.list.filter((item) => 
        item.title.toLowerCase().includes(this.search.toLowerCase()) && item.category.includes(this.categories)) 
        
    },

    Search(){
        let product = [...this.list]
        let filterSearch = [...new Set(product.map((data => data.category)))]
        console.log(filterSearch);
        return filterSearch
      }


  }
}
</script>

<style>
.body{
font-family: 'Inter', sans-serif;
font-family: 'Lato', sans-serif;    
}

img{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.images img{
  width: 500px;
  height: 250px;
  position: relative;
  object-fit: cover;
}



.desc{
  position: relative;
  max-height: 50px;
  overflow: hidden;
  padding-right: 0.6rem;
  font-size: 0.8rem;
  color: #a9a9a9;
}

.desc::before{
  position: absolute;
  content: '...';
  bottom: 0;
  right: 0;
}
</style>


