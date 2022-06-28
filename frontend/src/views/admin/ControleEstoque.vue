<template>
  <container>
    <NavBarAdmin />
    <div class="dialogEntradaEstoque">
      <DialogEntradaEstoque />
    </div>
    <v-card class="mt-5" elevation="14">
      <v-card-title class="justify-center">
        <v-btn class="mr-4" text icon color="black" @click="voltarPagina()">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-spacer>Estoque atual</v-spacer>
      </v-card-title>
      <v-data-table
        dense
        class="pr-3 pl-3 mt-5 elevation-1 text-caption"
        :headers="cabecalho"
        :items="itens"
      >
        <template slot="no-data"> Nenhum produto encontrado. </template>
      </v-data-table>
    </v-card>
  </container>
</template>

<script>
import NavBarAdmin from '@/components/Navbar/NavBarAdmin.vue';
import DialogEntradaEstoque from '@/components/Shared/dialogs/DialogEntradaEstoque.vue';

export default {
  data() {
    return {
      cabecalho: [
        {
          text: "Produto",
          align: "center",
          filterable: true,
          divider: true,
          value: "nomeProduto",
        },
        {
          text: "Fornecedor",
          align: "center",
          filterable: true,
          divider: true,
          value: "fornecedor",
        },
        {
          text: "Quantidade",
          align: "center",
          filterable: true,
          divider: true,
          value: "quantidade",
        },
      ],
    };
  },

  components: {
    NavBarAdmin,
    DialogEntradaEstoque,
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
          nomeProduto: "Coca-cola lata",
          fornecedor: "Refrigerantes Coca Cola Andina",
          quantidade: "49",
        },
        {
          nomeProduto: "Coca-cola 2,5lt",
          fornecedor: "Refrigerantes Coca Cola Andina",
          quantidade: "110",
        },
        {
          nomeProduto: "Coca-Cola 3lt",
          fornecedor: "Refrigerantes Coca Cola Andina",
          quantidade: "23",
        },
        {
          nomeProduto: "Kuat 2lt",
          fornecedor: "Refrigerantes Coca Cola Andina",
          quantidade: "112",
        },
      ];
    },
  },
};
</script>

<style>
.dialogEntradaEstoque {
  display: flex;
  justify-content: flex-end;
}
</style>