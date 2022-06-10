<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Santa Pizzaria
          </v-list-item-title>
          <v-list-item-subtitle> Comanda Digital </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <v-list-item-group>
            <v-list-item
              class="item-list"
              v-for="item in item.items2"
              :key="item.text"
              link
              :to="item.link"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="item-list-tile">{{
                item.title
              }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>

          <template v-slot:activator>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>

          <v-list-item
            v-for="subItem in item.items"
            :key="subItem.title"
            link
            :to="item.link"
          >
            <v-list-item-action>
              <v-icon>{{ subItem.action }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ subItem.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="black" dense elevation="4" rounded dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn text color="grey" @click="realizarLogout">
        <span>SAIR</span>
        <v-icon right>mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main> <router-view /> </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,

    items: [
      {
        action: "mdi-account-multiple",
        title: "Minha conta",
        link: "/minha-conta",
        items2: [
          {
            title: "Minha comanda",
            link: "/minha-conta",
          },
        ],
      },
      {
        action: "mdi-silverware",
        title: "Cardário",
        link: "/cardapio",
        items2: [
          {
            title: "Pizzas tradicionais",
            link: "/pizzas-tradicionais",
          },
          {
            title: "Pizzas especiais",
            link: "/pizzas-especiais",
          },
          {
            title: "Pizzas doces",
            link: "/pizzas-doces",
          },
          {
            title: "Combos",
            link: "/combos",
          },
          {
            title: "Porções",
            link: "/porcoes",
          },
          {
            title: "Bebidas",
            link: "/bebidas",
          },
        ],
      },
    ],
    right: null,
  }),

  methods: {
    fechaNavBar(){
      this.drawer = false;
    }
  },
};
</script>