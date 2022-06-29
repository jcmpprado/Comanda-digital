<template>
  <container>
    <NavBarAdmin />
    <div class="dialogCadastroProduto">
      <DialogCadastroProduto />
    </div>
    <v-card class="mt-5" elevation="14">
      <v-card-title class="justify-center">
        <v-btn class="mr-4" text icon color="black" @click="voltarPagina()">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-spacer> Cardápio</v-spacer>
      </v-card-title>
      <v-data-table
        dense
        class="pr-3 pl-3 mt-5 elevation-1 text-caption"
        :headers="cabecalho"
        :items="listaDeProdutos"
      >
        <template slot="no-data"> Nenhum produto encontrado. </template>

        <template class="text-caption" v-slot:[`item.action`]="{ item }">
          <v-row justify="center" align-items="center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <DialogEditarProduto class="mt-2" elevation="2" />
              </template>
              <span>Editar</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                class="mr-10"
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
import ProdutoApi from "@/apis/produto/ProdutoApi";

export default {
  data() {
    return {
      listaDeProdutos: [],
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
      categoria: [],
      produto: [],
      descricao: [],
      valor: [],
    };
  },

  components: {
    NavBarAdmin,
    DialogCadastroProduto,
    DialogEditarProduto,
  },

  created() {
    this.listarProdutos();
  },

  methods: {
    voltarPagina() {
      this.$router.push({ name: "ResumoAdmin" });
    },

    deleteItem(item) {
      const index = this.listaDeProdutos.indexOf(item);
      confirm("Tem certeza que deseja excluir esse item?") &&
        this.listaDeProdutos.splice(index, 1);
    },

    listarProdutos() {
      const listaDeProdutos = {
        categoria: this.categoriaProduto,
        produto: this.nomeProduto,
        descricao: this.descricaoProduto,
        valor: this.valorProduto,
      };

      ProdutoApi.listarProdutos(listaDeProdutos).then((response) => {
        response.data.forEach((item) => {
          this.listaDeProdutos.push({
            categoria: item.categoriaProduto,
            produto: item.nomeProduto,
            descricao: item.descricaoProduto,
            valor: item.valorProduto,
          });
        });
      });
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