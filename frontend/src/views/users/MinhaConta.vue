<template>
  <container>
    <NavBarCliente />
    <v-card class="mt-3" height="auto" elevation="14">
      <v-card-subtitle class="text-center">
        <h3 class="subheading grey--text titulo">Resumo da sua conta</h3>
      </v-card-subtitle>
      <v-card-title class="justify-space-between">
        <v-btn text icon color="black" @click="voltarPagina()">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <h3>Número da mesa</h3>

        <v-btn text icon color="black"> </v-btn>
      </v-card-title>

      <v-container class="justify-space-between">
        <v-layout align-center justify-space-around>
          <div class="col-md-3">
            <strong>Número do Pedido:</strong>
          </div>
          <div class="col-md-3">
            <strong>Número de itens:</strong>
          </div>
          <div class="col-md-3">
            <strong>Valor Total:</strong>
          </div>
        </v-layout>
      </v-container>
    </v-card>

    <v-card class="mt-5" elevation="14">
      <v-card-title class="justify-center">
        <v-spacer> Itens do pedido</v-spacer>
      </v-card-title>
      <v-data-table
        dense
        class="pr-3 pl-3 mt-5 elevation-1 text-caption"
        :headers="cabecalhoComanda"
        :items="itens"
      >
        <template slot="no-data"> Nenhum produto encontrado. </template>

        <template class="text-caption" v-slot:[`item.action`]="{ item }">
          <v-row justify="center" align="center">
            <!-- <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  class="ma-1"
                  color="success"
                  elevation="2"
                  small
                  @click="editItem(item)"
                >
                  mdi-arrow-expand
                </v-icon>
              </template>
              <span>Detalhar</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  class="ma-1"
                  color="primary"
                  elevation="2"
                  small
                  @click="editItem(item)"
                >
                  mdi-pencil
                </v-icon>
              </template>
              <span>Editar</span>
            </v-tooltip> -->
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  class="ma-1"
                  color="error"
                  elevation="2"
                  small
                  @click="deleteItem(item)"
                >
                  mdi-delete
                </v-icon>
              </template>
              <span>Excluir</span>
            </v-tooltip>
          </v-row>
        </template>
      </v-data-table>
      <div class="button-realiza-pedido">
        <v-btn
          class="ma-2 justify-end"
          color="success"
          dark
          v-bind="attrs"
          v-on="on"
          >Realizar pedido
        </v-btn>
      </div>
    </v-card>
    <v-card class="mt-5" elevation="14">
      <v-card-title class="justify-center">
        <v-spacer> Pedidos realizados</v-spacer>
      </v-card-title>
      <v-data-table
        dense
        class="pr-3 pl-3 mt-5 elevation-1 text-caption"
        :headers="cabecalhoPedido"
        :items="pedidos"
      >
        <template slot="no-data"> Nenhum pedido encontrado. </template>

        <template class="text-caption" v-slot:[`item.action`]="{ item }">
          <v-row justify="center" align="center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="my-4"
                  color="primary"
                  elevation="2"
                  dark
                  small
                  v-bind="attrs"
                  v-on="on"
                  >Detalhar</v-btn
                >
              </template>
              <span>Detalhar pedido</span>
            </v-tooltip>
          </v-row>
        </template>
      </v-data-table>
      <div class="button-realiza-pedido">
        <v-btn
          class="ma-2 justify-end"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          @click="fecharConta()"
          >Fechar conta
        </v-btn>
      </div>
    </v-card>
  </container>
</template>

<script>
import NavBarCliente from "@/components/Navbar/NavBarCliente.vue";

export default {
  data() {
    return {
      cabecalhoComanda: [
        {
          text: "Descrição",
          align: "center",
          filterable: true,
          divider: true,
          value: "descricao",
        },
        {
          text: "Valor unitário",
          align: "center",
          filterable: true,
          divider: true,
          value: "valorUnitario",
        },
        {
          text: "Quantidade",
          align: "center",
          filterable: true,
          divider: true,
          value: "quantidade",
        },
        {
          text: "Subtotal",
          align: "center",
          filterable: true,
          divider: true,
          value: "subtotal",
        },
      ],
      cabecalhoPedido: [
        {
          text: "Data",
          align: "center",
          filterable: true,
          divider: true,
          value: "data",
        },
        {
          text: "Número do Pedido",
          align: "center",
          filterable: true,
          divider: true,
          value: "numeroPedido",
        },
        {
          text: "Número da Mesa",
          align: "center",
          filterable: true,
          divider: true,
          value: "numeroMesa",
        },
        {
          text: "Produtos",
          align: "center",
          filterable: true,
          divider: true,
          value: "produtos",
        },
        {
          text: "Valor Total",
          align: "center",
          filterable: true,
          divider: true,
          value: "valorTotal",
        },
        {
          text: "Status",
          align: "center",
          filterable: true,
          divider: true,
          value: "status",
        },
        {
          text: "Ações",
          align: "center",
          divider: true,
          value: "action",
        },
      ],
    };
  },

  components: {
    NavBarCliente,
  },

  created() {
    this.initialize();
  },

  methods: {
    voltarPagina() {
      this.$router.push({ name: "Apresentacao" });
    },

    fecharConta() {
      this.$router.push({ name: "Agradecimento" });
    },

    initialize() {
      this.itens = [
        {
          descricao:
            "Pizza Frango com catupiry - Molho de tomate, muçarela, catupiry cremoso, frango e orégano",
          quantidade: "1",
          valorUnitario: "49,90",
          subtotal: "49,90",
        },
        {
          descricao:
            "Pizza Brigadeiro - Creme de leite, granulado e chocolate preto",
          quantidade: "1",
          valorUnitario: "39,90",
          subtotal: "39,90",
        },

        {
          descricao: "Refrigerante - Coca-Cola Zero 2,5l",
          quantidade: "2",
          valorUnitario: "9,90",
          subtotal: "19,80",
        },
      ];

      this.pedidos = [
        {
          data:"13/06/2022",
          numeroPedido: "5",
          numeroMesa: "3",
          produtos: "Pizza Frango com catupiry, Pizza brigadeiro, Coca-cola 2,5l",
          valorTotal: "200,00",
          status: "Em preparo",
        },
      ];
    },

    deleteItem(item) {
      const index = this.itens.indexOf(item);
      confirm("Tem certeza que deseja excluir essa faixa etária?") &&
        this.itens.splice(index, 1);
    },
  },
};
</script>

<style>
.button-realiza-pedido {
  border: 1px;
  display: flex;
  justify-content: flex-end !important;
}
</style>