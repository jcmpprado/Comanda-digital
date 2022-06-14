<template>
  <v-container>
    <NavBar />
    <!-- <NavBarCliente /> -->
  </v-container>
</template>

<script>
import NavBar from "./components/Shared/NavegationDrawer.vue";
// import NavBarCliente from './components/Navbar/NavBarCliente.vue';

export default {
  name: "App",

  components: {
    NavBar,
    // NavBarCliente,
  },
  data: () => ({
    //
  }),
};
</script>


<style>
.v-application--wrap {
   
    min-height: 0vh;
   
}
</style>