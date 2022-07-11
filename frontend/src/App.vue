<template>
   <v-container id="app">
      <NavegationDrawerVue />
      <!-- <router-view /> -->
   </v-container>
</template>

<script>
import NavegationDrawerVue from './components/Shared/NavegationDrawer.vue'

export default {
   name: 'App',

   components: {
      NavegationDrawerVue,
   },
   data: () => ({
      //
   }),
}
</script>

<style>
.v-application--wrap {
   min-height: 0vh;
}
</style>
