<template>
  <container>
    <NavBarAdmin />
    
    <v-card class="mt-5" elevation="14">
      <v-card-title class="justify-center">
        <v-btn class="mr-4" text icon color="black" @click="voltarPagina()">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-spacer> Resumo de pedidos</v-spacer>
      </v-card-title>
      <v-data-table
        dense
        class="pr-3 pl-3 mt-5 elevation-1 text-caption"
        :headers="cabecalho"
        :items="itens"
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
    </v-card>
  </container>
</template>

<script>
import NavBarAdmin from "@/components/Navbar/NavBarAdmin.vue";

export default {
  data() {
    return {
      cabecalho: [
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
          text: "Valor total",
          align: "center",
          filterable: true,
          divider: true,
          value: "valorTotal",
        },
        {
          text: "Açoes",
          align: "center",
          divider: true,
          value: "action",
        },
      ],
    };
  },

  components: {
    NavBarAdmin,
  },

  created() {
    this.initialize();
  },

  methods: {
    voltarPagina() {
      this.$router.push({ name: "ResumoAdmin" });
    },

    initialize() {
      this.itens = [
        {
          data: "12/06/2022",
          numeroPedido: "1",
          numeroMesa: "6",
          valorTotal: "49,90",
        },
        {
          data: "12/06/2022",
          numeroPedido: "2",
          numeroMesa: "4",
          valorTotal: "89,90",
        },
        {
          data: "12/06/2022",
          numeroPedido: "3",
          numeroMesa: "8",
          valorTotal: "119,90",
        },
        {
          data: "12/06/2022",
          numeroPedido: "4",
          numeroMesa: "3",
          valorTotal: "69,90",
        },
      ];
    },

    deleteItem(item) {
      const index = this.itens.indexOf(item);
      confirm("Tem certeza que deseja excluir essa faixa etária?") &&
        this.itens.splice(index, 1);
    }
  },
};
</script>

<style>

</style>