<template>
  <div class="container-fluid row">
    <div class="container-fluid  bg-info border m-3  row">
      <div class="text-center text-white "><h1>SILAS VUE FORM</h1></div>
      <div class="container-fluid m-3 bg-white border fm col">
    <form class=" was-validated"  @submit="onSubmit" action="">
      <label for="">Firstname:</label> <br>
      <input type="text" required v-model="fname" class="form-control"> <br>
      <Label>Lastname:</Label> <br>
      <input type="text" required v-model="lname" class="form-control"> <br>
      <label for="">Country:</label> <br>
      <input type="text" required v-model="country" class="form-control"><br>
      <label for="">Phone Number:</label> <br>
      <input type="number" required v-model="phone" class="form-control"> <br>
      <label for="">Age:</label> <br>
      <input type="number" required v-model="age" class="form-control"> <br>
      <label for="">Email Address:</label> <br>
      <input type="link" required v-model="email" class="form-control">
      <div><button class="btn mt-2 btn-primary border" v:>Submit</button></div>
    </form>
    </div> <br>
    
    <div v-for="(field, x) in data" :key="x" class="output border text-info col bg-white m-3 text-bold container-fluid">
      <div class="row ">
      <h4 class="col">Firstname:</h4> 
      <p class="col text-dark"><b>{{field.fname}}</b></p>
      </div>
      <div class="row">
      <h4 class="col">Lastname:</h4>  
      <p class="col text-dark"><b>{{field.lname}}</b></p>
      </div>
      <div class="row">
      <h4 class="col">Country:</h4> 
      <p class="col text-dark"><b>{{field.country}}</b></p>
     </div>
     <div class="row">
      <h4 class="col">Phone Number:</h4> 
      <p class="col text-dark"><b>{{field.phone}}</b></p>
     </div>
     <div class="row">
      <h4 class="col">Email Address:</h4> 
      <p class="col text-dark"><b>{{field.email}}</b></p>
     </div>
    </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'app',
    data(){
      return{
        output:[

        ],
        fname: "",
        lname: "",
        country: "",
        phone: "",
        age: "",
        email: "",
      }
    },
    methods: {
      onSubmit(text){
        text.preventDefault()
        const fm = {
          fname: this.fname,
          lname: this.lname,
          country: this.country,
          phone: this.phone,
          age: this.age,
          email: this.email,
      }
      this.data ={fm}
      this.fname = "",
      this.lname = "",
      this.country= "",
      this.phone= "",
      this.age= "",
      this.email= ""
    }
  }
}
</script>
<style scoped>
  .output{
  
  }
  .fm{
    
  }
</style>