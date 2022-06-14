<template>
  <container>
    <NavBarAdmin />
    <div class="dialogCadastroProduto">
      <DialogCadastroProduto />
    </div>
    <v-card class="mt-5" elevation="14">
      <v-card-title class="justify-center">
        <v-spacer> Cardápio</v-spacer>
      </v-card-title>
      <v-data-table
        dense
        class="pr-3 pl-3 mt-5 elevation-1 text-caption"
        :headers="cabecalho"
        :items="itens"
      >
        <template slot="no-data"> Nenhum produto encontrado. </template>

        <template class="text-caption" v-slot:[`item.action`]="{ item }">
          <v-row justify="center" align="center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <DialogEditarProduto class="mt-2" elevation="2" />
              </template>
              <span>Editar</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  class="ma-1 mr-2"
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
    </v-card>
  </container>
</template>

<script>
import NavBarAdmin from "@/components/Navbar/NavBarAdmin.vue";
import DialogCadastroProduto from "@/components/Shared/dialogs/DialogCadastroProduto.vue";
import DialogEditarProduto from "@/components/Shared/dialogs/DialogEditarProduto.vue";

export default {
  data() {
    return {
      dialogCadastroProduto: false,
      DialogEditarProduto: false,
      cabecalho: [
        {
          text: "Categoria",
          align: "center",
          filterable: true,
          divider: true,
          value: "categoria",
        },
        {
          text: "Produto",
          align: "center",
          filterable: true,
          divider: true,
          value: "produto",
        },
        {
          text: "Descrição",
          align: "center",
          filterable: true,
          divider: true,
          value: "descricao",
        },
        {
          text: "Valor",
          align: "center",
          filterable: true,
          divider: true,
          value: "valor",
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
    DialogCadastroProduto,
    DialogEditarProduto,
  },

  created() {
    this.initialize();
  },

  methods: {
    voltarPagina() {
      this.$router.push({ name: "Apresentacao" });
    },

    initialize() {
      this.itens = [
        {
          categoria: "Pizzas Tradicionais",
          produto: "Frango com catupiry",
          descricao:
            "Molho de tomate, muçarela, catupiry cremoso, frango e orégano",
          valor: "49,90",
        },
        {
          categoria: "Pizzas doces",
          produto: "Brigadeiro",
          descricao: "Creme de leite, granulado e chocolate preto",
          valor: "39,90",
        },
        {
          categoria: "Bebidas",
          produto: "Refrigerante",
          descricao: "Coca-Cola Zero 2,5l",
          valor: "9,90",
        },
      ];
    },

    deleteItem(item) {
      const index = this.itens.indexOf(item);
      confirm("Tem certeza que deseja excluir esse item?") &&
        this.itens.splice(index, 1);
    },
  },
};
</script>

<style>
.dialogCadastroProduto {
  display: flex;
  justify-content: flex-end;
}
</style>