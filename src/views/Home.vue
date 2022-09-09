<template>
  <div class="home">
    <!-- <img width="100%" height="100%" style="position: fixed;margin: 0 0; padding: 0 0;" src="https://tva2.sinaimg.cn/large/006MWoJqgy1h299vgzjhrj31xg0rs7w2.jpg" alt=""> -->
    <b-card title="Card Title" no-body class="nav">
      <Nav />
    </b-card>
    <b-card-body>
      <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
      <div class="row">
        <div class="col-sm-1"/>
        <div class="col-sm-3"><Sidebar/></div>
        <!-- router-view绑定key值，解决跳转同一页面参数不同不刷新的问题 -->
        <div class="col-sm-6"><router-view :key="$route.fullPath"/></div>
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
  .row{
    position: relative;
    margin-top: 70px;
  }

</style>
