<template>
  <div>
    <b-card title="Card Title" no-body class="nav">
      <Nav />
    </b-card>
    <b-card-body>
      <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
      <div class="row">
        <div class="col-sm-1"/>
        <div class="col-sm-3"><Sidebar/></div>
        <div class="col-sm-6"><router-view/></div>
        <div class="col-sm-1"/>
      </div>

      
    </b-card-body>
    <div class="fixed-bottom">1414141414</div>
  </div>
</template>

<script>
  import Nav from '@/components/Nav.vue';
  import Person from '@/components/Person.vue'
import Sidebar from '@/components/Sidebar.vue';
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    Nav,
    Person,
    Sidebar
},
};
</script>

<style scoped lang="scss">
  .nav{
    background: #292f3c;
  }
</style>
