<template>

   <div class="main">
       <h1>my products</h1>
       <label for="ipt">
            <input type="text" name="text" id="ipt" v-model="search" placeholder="Search for producs">
       </label>
       <div class="error" v-if="errored">
            <h3>OOPPSS!! an Error Occured</h3>
       </div>
        <section v-else>
            <div className='loading' v-if="loading">
                <h3>badamasi</h3>
                <div class="divv">
                    <div class="div"></div>
                </div>
            </div>
            <div class="prod" v-else v-for="product in productsSearch" :key="product.id">
           <div class="img">
               <img :src="product.thumbnail" :alt="product.title">
           </div>
           <h2>{{product.title}}</h2>
           <div class="txt">
               <p><b>Product:</b> {{product.brand}}</p>
               <p><b>Category:</b> {{product.category}}</p>
               <p><b>Discount Percentage:</b> {{product.discountPercentage}}</p>
               <p><b>Rating:</b> {{product.rating}}</p>
               <p><b>Price:</b> {{product.price}}</p>
           </div>
           <div class="des">
               <p>{{product.description}}</p>
           </div>
       </div>
        </section>
   </div>
</template>

<script>

export default {
    name: 'Api',
    data() {
        return{
            search:'',
            products: [],
            loading: true,
            errored: false
        }
    },
  
    mounted() {
        this.axios.get('https://dummyjson.com/products')
        .then(prod => {
            console.log(prod)
            this.products = prod.data.products
            })
        .catch(err => {
            console.log(err)
            this.errored = true
        })
        .finally(() => this.loading = false)
    },
    computed:{
        
        productsSearch() {
            let prod = [...this.products]
            return prod = prod.filter(srch => srch.title.toLowerCase().includes(this.search.toLowerCase()))
        }
    }
}
</script>

<style scoped>
    *, body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 18px;
    }

    .main{
        position: relative;
        /* grid-template-columns: 1fr; */
        width: 100%;
    }
    .main label{
        width: 100%;
        padding: 0 10px;
        margin: 1.5rem 0;
        display: block;

    }
    .error h3, .load p{
        text-align: center;
        font-size: 2em;
    }
    label input{
        width: 100%;
        outline: none;
        padding: 12px;
        font-size: 18px;
    }
    .main h1{
        text-align: center;
        font-size: 3em;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }
    section{
        display: grid;
        position: relative;
        margin: 0;
        padding: 0;
        width: 100%;
    }
    .prod{
        margin: 0 auto;
        position: relative;
        margin-bottom: 1.5rem;
        padding: 0;
        background: #f5f5f5;
        max-width: 450px;
        box-shadow: 3px 3px 15px rgba(0, 0, 0, .2);
        border-radius: 10px;
        overflow: hidden;
    }
    .prod h2{
        text-align: center;
    }
    .prod .img{
        position: relative;
        width: 100%;
        height: 250px;
        background: red;
        margin: 0;
        padding: 0;
    }
    .prod .img img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* object-fit: contain; */
    }
    .des, .txt{
        padding: 20px;
    }
    .txt{
        display: flex;
        flex-wrap: wrap;
    }
    .txt p{
        flex: 1 200px;
    }
    /* Loading Animation */
    .loading{
  margin: 0;
  width: 100%;
  padding: 20px ;
  min-height: 50vh;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: absolute;
}
.loading h3{
  margin: 0;
  font-size: 2em;
  color: darkred
}
.divv{
  position: relative;
  width: 50px;
  height:5px;
  border-radius:10px;
}
.div{
  position: absolute;
  margin: 0;
  padding: 0;
  height: 100%;
  background-color:#999;
  border-radius: 10px;
  animation: exp .6s linear infinite alternate ;
  text-align: center;
}

@keyframes exp {
  0%   {width: 7px; left: 0; opacity: .1}
  10%   {width: 7px; left: 0%;}
  20%  {width: 8px; left: 20%;}
  30%  {width: 10px; left: 30%;}
  40%  {width: 15px; left: 40%;}
  50%  {width: 25px; left: 50%; opacity: 1}
  60%  {width: 15px; left: 60%;}
  70%  {width: 10px; left: 70%;}
  80%  {width: 8px; left: 80%;}
  90%  {width: 7px; right: 0%;}
  100% {width: 7px; right: 0%; opacity: .1}
}
    @media screen and (min-width: 768px) {
        section{
            grid-template-columns: repeat(2, 1fr );
            column-gap: 1.5rem;
        }
        label input{
            width: 50%;
        }
    }
    @media screen and (min-width: 1000px) {
        section{
            grid-template-columns: repeat(3,1fr );
        }
    }
</style>
