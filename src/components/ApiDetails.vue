<template>
    <div class="details">
        <button @click="backBtn">Go Back</button>
         <div class="detail" >
            <div class="img"  v-for="img in detailedImg" :key="img">
                <img :src="img" alt="img">
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    name:"ApiDetails",
    data() {
        return{
            detailedImg:[],
            id:this.$route.params.id,
        }
    },
    methods:{
         backBtn(){
            this.$router.go(-1)
         }
      },
    mounted() {
        this.axios.get(`https://dummyjson.com/products/${this.id}`)
        .then(response => {
            console.log(response)
            this.detailedImg = response.data.images
            })
    }
}
</script>

<style scoped>
button{
    outline: none;
    padding: 12px;
    margin: 1.5rem;
    cursor: pointer;
    font-size: 18px;
}
    .details{
        position: relative;
        width: 100%;
        margin: 0;
        padding: 0;
    }
     .detail{
        display: grid;
        position: relative;
        margin: 0;
        padding: 0 5px;
        width: 100%;
    }
    .img{
        margin: 0 auto;
        position: relative;
        padding: 0 5px;
        background: #f5f5f5;
        height: 400px;
        width: 450px;
        box-shadow: 3px 3px 25px rgba(0, 0, 0, .4);
        border-radius: 10px;
        margin-bottom: 1.5rem;
    }
      .img img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    
    } 
    @media screen and (min-width:768px) {
        .detail{
            grid-template-columns: repeat(2, 1fr );
        }
    }
</style>