<template>
<div class="form">
  <form @submit="onSubmit" class="add-form">
        <div class="form-control">
            <label>First name</label><br>
            <input type="text"
              v-model="fName"
              placeholder="first name" 
             />
        </div>
        <div class="form-control">
            <label>Last name</label><br>
            <input type="text"
              v-model="lName" 
              placeholder="last name"/>
        </div>
        <div class="form-control">
            <label>Email</label><br>
            <input type="text"
              v-model="email"
              placeholder="email"/>
        </div>
        <div class="form-control">
            <label>Age</label><br>
            <input type="number"
              v-model="age"
              placeholder="age" required/>
        </div>
        
        <input 
        type="submit" 
        value="Submit Form" 
        class="btn btn-block"/>
    </form>
    <div class="output" v-for="(info, x) in infos" :key="x">
      <p><b>First name:</b> {{info.fName}}</p>
      <p><b>Last name:</b> {{info.lName}}</p>
      <p><b>Fullname:</b> {{info.fName +' '+ info.lName}}</p>
      <p><b>Email:</b> {{info.email}}</p>
      <p><b>Age:</b> {{info.age}}</p>
    </div>
    </div>
</template>

<script>
  export default {
    name: 'Form',
    data() {
      return{
        infos:[
        ],
        fName: '',
        lName: '',
        email: '',
        age: ''
      }
    },
    methods:{
      onSubmit(e) {
        e.preventDefault()

        if (!this.fName || !this.lName || !this.email) {
          alert('Please fill all form field')
          return
        }

        const formSubmit = {
          fName: this.fName,
          lName: this.lName,
          fullname: this.fName +' '+ this.lName,
          email: this.email,
          age: this.age
        }

        this.infos = {formSubmit}
        console.log(formSubmit)
        this.fName = ''
        this.lName = ''
        this.age = ''
        this.email = ''
      }
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .form{
    position: relative;
    margin: 0;
    width: 100%;
    min-height: 100vh;
    font-family: sans-serif;
  }
  .output{
    position: relative;
    background-color: #173459;
    border-radius: 10px;
    padding: 20px;
    color: #fff;
  }

  .output p{
    margin-bottom: 20px;
    letter-spacing: 2px;
  }
  p b {
    margin-right: 15px;
    letter-spacing: normal;
  }
  .add-form
{
  position: relative;
  margin-bottom: 40px;
  background-color: #173459;
  padding: 20px;
  color: #fff;
  border-radius: 20px;
}
.form-control
{
  margin: 20px 0;
}

.form-control input
{
  width: 100%;
  height: 40px;
  margin: 5px 0;
  padding: 3px 7px;
  font-size: 17px;
  border: none;
  outline: none;
  border-radius: 5px;
}
.btn
{
  display: inline-block;
  background-color: #000;
  color: #fff;
  margin: 5px;
  padding: 15px 20px;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  text-decoration: none;
}
.btn:active
{
  transform: scale(0.98);
}
.btn-block
{
  display: block;
  width: 100%;
}
@media screen and (min-width: 800px) {
  .form{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .add-form{
    width: 500px;
  }
  .output{
    width: 500px;
  }
}
</style>