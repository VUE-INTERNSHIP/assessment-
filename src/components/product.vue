<template>
  <div class="main">
    <ul class="product">
      <li v-for="product of products" :key="product.id">
        <img :src="product.thumbnail">
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
      description:'View Description',
      showDescription:false
    }
  },
  // methods:{
  //   viewDescription(){
  //     this.showDescription = !this.showDescription
  //     this.description='Hide Description'
  //   }
  // },
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
img{
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
  justify-content: space-between;
  margin:10px 0;
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
/* .des{
  display: inline-block;
  cursor:pointer;
  margin:10px 5%;
  padding:10px 20px;
  background:red;
  color:white
} */
.description{
  margin:10px 5%;
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
