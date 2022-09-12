<template>
  
<div class="form">
  <h1 class="text-center mt-3 text-secondary">FORM</h1>
  <form class="justify-content-center container-fluid rounded mt-5" @submit="onSubmit">
    <div class="row">
    <div class="col">
      <label for="inputPassword4" class="form-label mt-2">First Name</label>
    <input type="text" v-model="fname" class="form-control" placeholder="Enter your first name..." aria-label="First name">
    </div>

    <div class="col">
      <label for="inputPassword4" class="form-label mt-2">Last Name</label>
    <input type="text" v-model="lname" class="form-control" placeholder="Enter your last name..." aria-label="Last name">
    </div> 

    </div>

    <div class="row">
    <div class="col">
      <label for="inputEmail4" class="form-label mt-2">Email</label>
    <input type="email" v-model="email" class="form-control" placeholder="Enter your email..." aria-label="Email">
    </div>

    <div class="col">
      <label for="inputPassword4" class="form-label mt-2">Password</label>
    <input type="password" v-model="password" class="form-control"  placeholder="Enter your password..." aria-label="Password">
    </div>

    </div>

    <div class="row">
    <div class="col">
      <label for="inputAddress" class="form-label mt-2">Address</label>
    <input type="text" v-model="address" class="form-control" placeholder="Enter your address..." aria-label="Address">
    </div>

    <div class="col">
      <label for="inputPassword4" class="form-label mt-2">Phone number</label>
    <input type="text" v-model="phonenumber" class="form-control" placeholder="Enter your phone number..." aria-label="Phone number">
    </div>
    
    </div>

    <button type="submit" class="btn btn-primary mt-3">SUBMIT</button>
  
  </form>

  <div class="background">
    <div class="box justify-content-center container-fluid mb-5 text-center" v-for="(info, x) in data" :key="x">
        <div class="row mt-2">
          <h4 class="col">Fullname:</h4>
          <p class="col">{{info.fullname}}</p> 
        </div>

        <div class="row">
        <h4 class="col">Email:</h4> 
        <p class="col">{{info.email}}</p>
        </div>

        <div class="row">
        <h4 class="col">Address:</h4>  
        <p class="col">{{info.address}}</p>
        </div>

        <div class="row">
        <h4 class="col">Password:</h4> 
        <p class="col">{{info.password}}</p>
      </div>

      <div class="row">
        <h4 class="col">Phone Number:</h4> 
        <p class="col">{{info.phonenumber}}</p>
      </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
body{
  background-color: cornflowerblue;
}

 form{
  width:900px;
  height:300%;
  background-color: rgb(21, 6, 58);
  border-radius: 5px, 5px;
  color: white;
  padding: 30px;
 }
 .box{
  align-items: center;
  justify-content: center;
  background-color: rgb(8, 19, 29);
  color: white;
  border-radius: 5px 5px 5px;
  width:500px;
  height:300%;
  border: 1px solid black;
  margin-top: 10%;
 }

.background{
  font-family: "Poppins";
  font-size: 20px;
}
button {
   background-color: black;
   color: white;
   text-align: center;
 }
</style>



<script>
  export default {
    name: 'app',
    data() {
      return{
        output:[
        ],
        fname: '',
        lname: '',
        email: '',
        address: '',
        password: '',
        phonenumber: '',
      }
    },
    methods:{
      onSubmit(element) {
        element.preventDefault()
        const form = {
          fname: this.fname,
          lname: this.lname,
          fullname: this.fname + ' ' + this.lname,
          email: this.email,
          address: this.address,
          password: this.password,
          phonenumber: this.phonenumber,
        }
        this.data = {form}
        this.fname = '',
        this.lname ='',
        this.email = '',
        this.address = '',
        this.password = '',
        this.phonenumber = ''
  
      }
    }
  }
</script>
