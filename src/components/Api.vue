<template>

   <div class="main">
       <header>
           <h1>H</h1> <p>My producs</p>
       </header>
       <div class="search">
            <label for="ipt">
                <input type="text" name="text" id="ipt" v-model="search" placeholder="Search for producs">
            </label>
            <label for="select">
                <select name="sect" v-model="categories" >
                    <option value="" disabled>Filter by category</option>
                    <option :value="filter" v-for="filter in Search" :key='filter'>{{filter}}</option>
                </select>
            </label>
       </div>
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
            <div v-else class="prod" v-for="product in productsSearch" :key="product.id">
                <div class="img">
                <router-link :to="{ name: 'ApiDetails', params: { id: product.id } }">
                        <img :src="product.thumbnail" :alt="product.title">
                </router-link>
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
            <router-view></router-view>
   </div>
</template>

<script>

export default {
    name: 'Api',
    data() {
        return{
            search:'',
            categories:'',
            products:[],
            loading: true,
            errored: false
        }
    },
  
    mounted() {
        this.axios.get('https://dummyjson.com/products')
        .then(response => {
            console.log(response.data, 'This is the data')
            this.products = response.data.products
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
            return prod = prod.filter(srch => srch.category.includes(this.categories) && srch.title.toLowerCase().includes(this.search.toLowerCase()))
        },
        Search(){
             let prod = [...this.products]
            let filterSearch = [...new Set(prod.map(data => data.category))]
            console.log(filterSearch);
            return filterSearch
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
    p{
        line-height: 35px;
    }
    .main{
        position: relative;
        width: 100%;
        margin: 0;
    }
  
    header{
        position: fixed;
        background: #fff;
        box-shadow: 0 3px 5px rgba(0, 0, 0, .2);
        width: 100%;
        left: 0;
        top: 0;
        height: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 10000;
        padding: 2rem 0.5rem;
    }
      header h1{
        text-align: left;
        font-size: 1.5em;
        text-transform: uppercase;
        margin: 0;
        padding: 0;
    }
    .error h3, .load p{
        text-align: center;
        font-size: 2em;
    }
    .search{
        width: 100%;
        position: relative;
        display: flex;
        /* flex-basis: end; */
        align-items: left;
        margin: 4.5em 0 2em;
       flex-direction: column;
        padding: 0 1.5rem;
    }
    label:nth-child(1){
        margin-bottom: 10px;
    }
    label input{
        width: 100%;
        outline: none;
        padding: 12px;
        font-size: 18px;
        border-radius: 10px;
        border: none;
        outline: none;
        box-shadow: 3px 3px 23px rgba(0, 0, 0, .2);
    }
    label:nth-child(2) select{
        outline: none;
        border: none;
        padding: 12px;
        border-radius: 10px;
         box-shadow: 3px 3px 23px rgba(0, 0, 0, .2);
    }
    label select option{
        padding: 10px;
        line-height: 40px;
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
        box-shadow: 3px 3px 25px rgba(0, 0, 0, .4);
        border-radius: 10px;
        overflow: hidden;
    }
    .prod h2{
        text-align: center;
        margin: 10px 0;
        font-size: 28px;
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
            gap: 2rem;
            padding: 0 1.5rem;
        }
        label:nth-child(1){
            margin-bottom: initial;
            width: 500px;
        }
        .search{
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
       
    }
    @media screen and (min-width: 1000px) {
        section{
            grid-template-columns: repeat(3,1fr );
        }
    }
</style>
