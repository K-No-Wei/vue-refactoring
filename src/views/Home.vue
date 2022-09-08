<template>
  <div>
    <b-card title="Card Title" no-body class="nav">
      <Nav />
    </b-card>
    <b-card-body>
      <router-view/>
    </b-card-body>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    Nav,
  },
};
</script>

<style scoped lang="scss">
  .nav{
    background: #292f3c;
  }
</style>
