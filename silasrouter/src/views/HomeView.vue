<template>
  <div class="home"> 
    <h1 class="text-center"><b>HOME</b></h1>
  
<div class="container">
  <div class="row">
    <div class="  border m-2 ">
      <h3 class="text-primary text-center"><b>UNDERSTANDING OUR MODE OF OPERATION</b></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis sit, consequatur quae labore voluptate explicabo eum a aspernatur aut incidunt dignissimos perspiciatis optio soluta esse consectetur sequi doloribus rem voluptas.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="  border m-2 ">
      <h3 class="text-primary text-center"><b>OUR MISSION</b></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero voluptate modi temporibus totam corrupti eaque, saepe, distinctio rem minus nihil dolores. Repellat fuga saepe quos doloremque rem praesentium sapiente! Dolorem!</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="  border m-2 ">
      <h3 class="text-primary text-center"><b>OUR PRODUCTS</b>
      </h3>        
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nostrum voluptate numquam quibusdam perspiciatis harum voluptatibus ratione hic, placeat, consequatur consectetur velit consequuntur minima reiciendis repellat molestias cum. Doloremque, commodi?</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem at et fugiat cum quas corporis sapiente veritatis perspiciatis consequuntur, expedita adipisci voluptas. Corrupti nam nulla magnam quia adipisci eaque aliquid.</p>
    </div>
  </div>
</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>
<style scoped>
  /* Remove the navbar's default margin-bottom and rounded borders */ 
  .navbar {
    margin-bottom: 0;
    border-radius: 0;
  }
  
  /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
  .row.content {height: 450px}
  
  /* Set gray background color and 100% height */
  .sidenav {
    padding-top: 20px;
    background-color: #f1f1f1;
    height: 100%;
  }
  
  /* Set black background color, white text and some padding */
  footer {
    background-color: #555;
    color: white;
    padding: 15px;
  }
  
  /* On small screens, set height to 'auto' for sidenav and grid */
  @media screen and (max-width: 767px) {
    .sidenav {
      height: auto;
      padding: 15px;
    }
    .row.content {height:auto;} 
  }
  
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
