<template>
  <v-app id="inspire">

    <v-navigation-drawer v-model="drawer" app dark>
      <v-card class="flexcard py-5" color="secundary" dark height="200px">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Santa Pizzaria
            </v-list-item-title>
            <v-list-item-subtitle> Comanda Digital </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
          @click="fechaNavBar()"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="black" dense elevation="4" rounded dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <v-btn dark text @click="administrativo()">Administrativo</v-btn>
        <v-btn dark text @click="cardapio()">Cardápio</v-btn>
        <v-btn dark text @click="estoque()">Estoque</v-btn>
        <v-btn dark text @click="financeiro()">Financeiro</v-btn>
        <v-btn dark text @click="fornecedores()">Fornecedores</v-btn>
        <v-btn dark text @click="resumoPedidos()">Pedidos</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn text color="grey" >
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
    fechaNavBar() {
      this.drawer = false;
    },

    minhaConta() {
      this.$router.push({ name: "MinhaConta" });

    },

    cardapio() {
      this.$router.push({ name: "CardapioAdmin" });

    },

    resumoPedidos() {
      this.$router.push({ name: "ResumoPedido" });
    },

    estoque() {
      this.$router.push({ name: "ControleEstoque" });
    },

    fornecedores() {
      this.$router.push({ name: "Fornecedor" });
    },

    financeiro() {
      this.$router.push({ name: "Financeiro" });
    },

    administrativo() {
      this.$router.push({ name: "Administrativo" });
    },
  },
};
</script>

<style scoped>

</style>