<template>
  <v-app>
    <v-app-bar color="black" dense elevation="4" rounded dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <v-btn dark text @click="minhaConta()">Minha conta</v-btn>
        <v-btn dark text @click="cardapio()">Cardápio</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn text color="grey">
        <span>SAIR</span>
        <v-icon right>mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>

      <main> <router-view /></main>
    
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,

    items: [
      { title: "Home", icon: "mdi-home", to: "/" },
      { title: "Login", icon: "mdi-account-multiple", to: "/login" },
    ],
    right: null,
  }),

  methods: {
    minhaConta() {
      this.$router.push({ name: "MinhaConta" });

    },

    cardapio() {
      this.$router.push({ name: "Cardapio" });

    }
  },
};
</script>

<style scoped>

</style>