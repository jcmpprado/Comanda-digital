<template>
  <v-container>
    <NavBar />
  </v-container>
</template>

<script>
import NavBar from "./components/Shared/NavegationDrawer.vue";

export default {
  name: "App",

  components: {
    NavBar,
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