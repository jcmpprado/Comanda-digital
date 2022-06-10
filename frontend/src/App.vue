<template>
  <v-container>
    <NavBar />
    <NavBarCliente />
    
  </v-container>
</template>

<script>
import NavBar from "./components/Shared/NavBar.vue";
import NavBarCliente from './components/Navbar/NavBarCliente.vue';

export default {
  name: "App",

  components: {
    NavBar,
    NavBarCliente,
  },
  data: () => ({
    //
  }),
};
</script>