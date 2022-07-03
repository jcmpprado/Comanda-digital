<template>
  <container>
    <NavBarAdmin />
    <v-card elevation="10">
      <v-card-title>
        <span class="headline">Alimentar estoque</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-form @submit.prevent="salvarEstoque">
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                  label="Produto*"
                  required
                  v-model="produto.nomeProduto"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Quantidade*"
                  required
                  type="number"
                  v-model="produto.quantidade"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </v-container>
        <small>*Campos obrigatórios</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" small text @click="limparForm()">cancelar</v-btn>
        <v-btn color="success" small @click="salvarEstoque()">Continuar</v-btn>
      </v-card-actions>
    </v-card>
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
        :items="listaDeProdutosDoEstoque"
      >
        <template slot="no-data"> Nenhum produto encontrado. </template>
      </v-data-table>
    </v-card>
  </container>
</template>

<script>
import NavBarAdmin from "@/components/Navbar/NavBarAdmin.vue";
import DialogEntradaEstoque from "@/components/Shared/dialogs/DialogEntradaEstoque.vue";
import ProdutoApi from "@/apis/produto/ProdutoApi";

export default {
  data() {
    return {
      listaDeProdutosDoEstoque: [],
      cabecalho: [
        {
          text: "Produto",
          align: "center",
          filterable: true,
          divider: true,
          value: "nomeProduto",
        },
        {
          text: "Quantidade",
          align: "center",
          filterable: true,
          divider: true,
          value: "quantidade",
        },
      ],
      produto: {
        nomeProduto: "",
        quantidade: "",
      },
    };
  },

  components: {
    NavBarAdmin,
    DialogEntradaEstoque,
  },

  created() {
    this.listarEstoque();
  },

  methods: {
    voltarPagina() {
      this.$router.push({ name: "ResumoAdmin" });
    },

    listarEstoque() {
      const listaDeProdutosDoEstoque = {
        nomeProduto: this.nomeProduto,
        quantidade: this.quantidade,
      };

      ProdutoApi.listarEstoque(listaDeProdutosDoEstoque).then((response) => {
        response.data.forEach((item) => {
          this.listaDeProdutosDoEstoque.push({
            nomeProduto: item.nomeProduto,
            quantidade: item.quantidadeProduto,
          });
        });
      });
    },

    salvarEstoque() {
      const produto = {
        nomeProduto: this.nomeProduto,
        quantidade: this.quantidade,
      };

      ProdutoApi.salvarEstoque(this.produto)
        .then((response) => {
          console.log(response);
          alert("Estoque salvo com sucesso!");
          this.listarEstoque();
        })

        .catch((error) => {
          console.log(error);
          alert("Erro ao dar entrada no estoque");
        })
        .finally(() => {
          this.limparForm();
        });
    },

    limparForm() {
      this.produto.nomeProduto = [];
      this.produto.quantidade = [];
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