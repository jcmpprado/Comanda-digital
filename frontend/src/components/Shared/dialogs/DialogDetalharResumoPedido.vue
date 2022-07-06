<template>
  <v-layout row justify-center align-center>
    <v-dialog v-model="dialogDetalharResumoPedido" persistent max-width="800px">
      <template v-slot:activator="{ on }">
        <v-btn
          class="my-8"
          color="success"
          @click="dialogDetalharResumoPedido = true"
          dark
          small
          v-bind="attrs"
          v-on="on"
          >Detalhar
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Resumo do pedido
          </span>
        </v-card-title>
        <v-data-table
        dense
        class="pr-3 pl-3 mt-5 elevation-1 text-caption"
        :headers="cabecalho"
        :items="itens"
        hide-default-footer
      >
        </v-data-table>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            small
            text
            @click="dialogDetalharResumoPedido = false"
            >Fechar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    dialogDetalharResumoPedido: false,
    cabecalho: [
        {
          text: "Produtos",
          align: "center",
          filterable: true,
          value: "produtos",
        },
      ],
  }),

  created() {
    this.initialize();
  },

methods:{
    initialize() {
        this.itens = [
          {
            produtos: "Pizza Frango com catupiry, Pizza brigadeiro, Coca-cola 2,5l",
          },
        ];
      },
}
};
</script>

<style>
</style>
