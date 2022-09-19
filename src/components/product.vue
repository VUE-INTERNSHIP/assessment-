<template>
  <div class="main">
    <div>
      <input type="text" v-model="search" placeholder="Search product here...">
       <select v-model="category" name="Category"> 
            <option value="">Select Category</option>
            <option value="smartphones">Smart phones</option>
            <option value="laptop">Laptop</option>
            <option value="fragrances">Fragrance</option>
            <option value="skincare">Skin Care</option>
            <option value="groceries">Groceries</option>
            <option value="home-decoration">Home Deco</option> 
        </select>
    </div>
    <ul class="product">
      <li v-for="product of filteredProducts" :key="product.id">
        <img :src="product.thumbnail" class="thumbnail">
        <div class="price-title">
          <p class="title">{{ product.title }}</p>
          <p class="price">${{ product.price }}<s>{{ product.discountPercentage }} %</s></p>
        </div>
        <p class="rating"><img src="../assets/star16.png"><span>{{ product.rating }}</span></p>
        <p class="stock"> {{  product.stock}} units available</p>
        <div class="brand-cat">
          <span>Brand: {{ product.brand }}</span>
          <span>Category: {{ product.category }}</span>
        </div>
        <div class="additional_images">
          <div v-for="image in product.images" :key="image" >
            <img :src="image" alt="">
          </div>
       </div>
        <!-- <span class="des" @click="viewDescription">{{description}}</span> -->
        <p class="description">Description: "{{ product.description }} "</p>
       
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
const baseUrl = "https://dummyjson.com/products";

export default {
  name: 'product',
  data(){
    return{
      products:[],
      search:'',
      category:''
    }
  },
  computed:{
    filteredProducts: function(){
      return this.products.filter(product=>{
        return product.title.match(this.search) && product.category.match(this.category)
      })
    },

  },
  methods:{
   
 },
  mounted(){
    axios.get(baseUrl)
    .then( response =>{
      this.products = response.data.products
      console.log(response);
  })
  .catch( (e)=> {
    console.log(e);
  })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin:0px;
    padding:0px;
  }
input[type="text"]{
  width:400px;
  padding: 10px;
  border-radius:5px;
  margin:10px 6% ;

}
select{
  padding:10px;
  border:none;
}
h3 {
  margin: 40px 0 0;
}
.main{
  width:100%;
  padding-bottom:50px
  
}
ul {
  list-style-type: none;
  margin-top:50px;
  display:grid;
  padding:0px 7%;
  grid-template-columns: 28% 28% 28% ;
  grid-gap:50px 7%;
  justify-items:center;
  /* border: 2px solid black;  */

}
li {
  background: #e7e6e6;
   /* border:2px solid red;   */
  width:100%;
  border-radius:10px;
  min-height:400px;
  box-shadow: 5px 5px 5px 4px rgb(199, 199, 199);

}
.thumbnail{
  width:100%;
  height:250px;
   border-radius:5px 5px 0 0; 
}
p{
  margin:5px;
  margin-left:5%;
}
.title{
  font-size:14px;
  font-weight: bolder;
}
.stock{
  display:inline-block;
  padding:5px 10px;
  font-size: 14px;
  background:rgb(48, 155, 255);
  border-radius:6px;
  color:white;
}
.price-title{
  display:flex;
  width:100%;
  margin:10px 0;
  justify-content: space-between;
  border-bottom:2px solid rgb(211, 211, 211);

}

.price{
color:rgb(27, 26, 26);
margin:0px 5%;
font-size:1.2em;
}
.price > s{
  padding:3px;
  font-size:10px;
  color:rgb(206, 20, 20);
  margin:6px 3px;
  border-radius: 5px;
  background: #fff;
}
.rating{
 display: flex;
 align-items:center;
 justify-content:flex-start;
 /* margin:0 -60px; */
}
.rating > img{
  width: 20px;
  height:20px;
}

.brand-cat{
  display:flex;
  padding:1%;
  justify-content: flex-start;
}
.brand-cat > span{
  padding:5px 10px;
  margin:0px 0px 0px 10px;
  font-size:10px;
  background:#fff;
  border-radius:5px;
}
.description{
  margin:10px 5%;
}
.additional_images{
  display:flex;
  justify-content:flex-start;
  width:100%;
  flex-wrap:wrap;
  
}
.additional_images > div{
  margin:10px 8px;
}
.additional_images > div > img{
  border-radius:5px;
  width:50px;
  height:50px;
}
@media screen and (max-width: 1224px){
  ul {
  list-style-type: none;
  margin-top:50px;
  display:grid;
  padding:0px 7%;
  grid-template-columns: 40% 40% ;
  grid-gap:50px 10%;
  justify-items:center;
  /* border: 2px solid black;  */

}
  }
  @media screen and (max-width: 680px){
  input[type="text"]{
    width:200px;
    padding: 10px;
    border-radius:5px;
    margin:10px 6% ;

}
  ul {
  list-style-type: none;
  margin-top:50px;
  /* display:grid;
  padding:0px 7%;
  grid-template-columns: 70% ;
  grid-gap:50px 30%;
  justify-items:center; */
  /* border: 2px solid black;  */
  display:flex;
  justify-content: center;
  flex-direction: column;

}
li{
  width:350px;
  /* margin:5px 5%; */
}
  }
</style>
