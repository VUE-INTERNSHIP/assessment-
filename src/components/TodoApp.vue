<template>
<div>
  <div class="bg-primary text-white text-center p-2">
    <h1>{{ name }} TODO'S APP</h1>
  </div>
  <div class="container-fluid p-4">
    <div class="row mb-3"> 
      <div class="col font-weight-bold">
        Tasks
      </div>
      <div class="col-2 font-weight-bold">
        Done
      </div>
    </div>
    <div class="row" v-for="(task, x) in filteredTasks" :key="x">
      <div class="col">
        {{task.act}} 
      </div>

      <input type="checkbox" v-model="task.done" class="form-check-input">
      <div class="col-2">{{task.done}}</div>
    </div>
    <div class="row p-2">
      <label for="text"></label>
      <input type="text" v-model="newItems" id="text" class="form-control col">
      <button type="button" @click="addNewTodo" class="btn btn-primary col-2">Add</button>
    </div>
    <div class="bg-secondary text-center text-white">
      <label for="chk" class="form-label">Hide completed task:</label>
      <input type="checkbox" id="chk" v-model="hideCompleted" class="form-control-input">
    <div>
      <button type="button" class="btn btn-danger" @click="deleteCompleted">Delete</button>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name:'Papilo',
      tasks: [
        {act: 'buy flower', done: false},
        {act: 'explore', done: false},
        {act: 'go shopping', done: false},
        {act: 'Call Joe', done: false},
      ],
      hideCompleted: false,
      newItems: ''
    }
  }, 
  computed: {
    filteredTasks () {
          return this.hideCompleted ? this.tasks.filter(task => !task.done): this.tasks
    }
  },
  methods: {

    addNewTodo () {
      // e.preventDefault(),
      this.tasks.push({
        act: this.newItems,
        done: false
      })
      localStorage.setItem('todos',JSON.stringify(this.tasks))
      this.newItems = ''
    },
    storeData() {
      localStorage.setItem('todos', JSON.stringify(this.tasks))
    },
    deleteCompleted() {
      this.tasks = this.tasks.filter(task => !task.done)
      this.storeData()
    },
    created() {
      const data = localStorage.getItem('todos')
      if (data != null) {
        this.tasks = JSON.parse(data)
      }
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
