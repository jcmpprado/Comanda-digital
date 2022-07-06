<template>
  <v-container fluid>
    <h3 class="subheading grey--text my-5 titulo">Boas vindas!</h3>

    <div id="apresentacao" class="mt-8">
      <p>
        A Santa Pizza surgiu com o intuito de fazer as pessoas saborearem pizzas
        com a família e amigos, com criteriosas escolhas de ingredientes.
      </p>
      <span
        >Somos famosos pela qualidade de nossas pizzas e a massa fina, e
        principalmente a agilidade no atendimento e entrega de nossas pizzas,
        servindo delícias desde as tradicionais até as mais especiais.</span
      >
    </div>
    <v-flex>
      <v-card
        class="d-flex align-end mb-6 justify-center"
        flat
        height="300"
        tile
      >
        <v-card-text> </v-card-text>
        <v-bottom-sheet v-model="sheet">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="grey darken-3" dark block v-bind="attrs" v-on="on">
              Começar
            </v-btn>
          </template>
          <v-list>
            <v-subheader>Escolha sua mesa</v-subheader>
            <v-list-item
              v-for="tile in tiles"
              :key="tile.title"
              :to="tile.to"
              @click="sheet = false"
            >
              <v-list-item-avatar>
                <v-avatar size="32px" tile>
                  <v-icon dark :alt="tile.title"></v-icon>
                </v-avatar>
              </v-list-item-avatar>
              <v-list-item-title>{{ tile.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-bottom-sheet>
      </v-card>
      <v-card class="d-flex align-end ml-8 mb-6 justify-center" flat tile>
        <v-btn color="grey darken-3" block outlined @click="redirecionar()">
          <span>ADMIN</span>
          <v-icon right>mdi-account</v-icon>
        </v-btn>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    sheet: false,
    tiles: [
      { title: "Mesa 1", id: "1", to: "/apresentacao" },
      { title: "Mesa 2", id: "2", to: "/apresentacao" },
      { title: "Mesa 3", id: "3", to: "/apresentacao" },
      { title: "Mesa 4", id: "4", to: "/apresentacao" },
      { title: "Mesa 5", id: "5", to: "/apresentacao" },
    ],
  }),

  methods: {
    redirecionar() {
      this.$router.push({ name: "ResumoAdmin" });
    },
  },
};
</script>

<style>
.titulo {
  display: block;
  font-size: 1.7em;
  text-align: center;
  font-weight: bold;
}
</style>