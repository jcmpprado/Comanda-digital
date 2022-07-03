<template>
  <container>
    <NavBarAdmin />
    <!-- <div class="dialogCadastroProduto">
      <DialogCadastroProduto />
    </div> -->
    <v-card elevation="10">
      <v-card-title>
        <span class="headline">Cadastrar Novo Produto</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-file-input
                label="File input*"
                filled
                prepend-icon="mdi-camera"
                v-model="novoProduto.imagem"
              ></v-file-input>
            </v-flex>
            <v-flex xs12>
              <v-select
                :items="novoProduto.categorias"
                label="Categoria*"
                required
              ></v-select>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                label="Produto*"
                required
                v-model="novoProduto.produto"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                label="Descrição*"
                required
                v-model="novoProduto.descricao"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                label="Valor*"
                required
                v-model="novoProduto.valor"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <small>*Campos obrigatórios</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" small text @click="limparForm()">cancelar</v-btn>
        <v-btn
          color="success"
          small
          @click="
            dialogCadastroProduto = false;
            cadastrarProdutos();
          "
          >cadastrar</v-btn
        >
      </v-card-actions>
    </v-card>
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
                <DialogEditarProduto
                  :cadastrarProdutos="cadastrarProdutos"
                  class="mt-2"
                  elevation="2"
                />
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
      novoProduto: {
        categorias: [
          "Bebidas",
          "Combos",
          "Pizzas doces",
          "Pizzas especiais",
          "Pizzas tradicionais",
          "Porções",
        ],
        produto: "",
        descricao: "",
        valor: "",
      },
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

    cadastrarProdutos() {
      const novoProduto = {
        categoria: this.categoriaProduto,
        produto: this.nomeProduto,
        descricao: this.descricaoProduto,
        valor: this.valorProduto,
      };

      ProdutoApi.cadastrarProduto(this.nomeProduto).then((response) => {
        console.log(response);
        //  response.data.forEach((item) => {
        //   this.listaDeProdutos.push({
        //     categoria: item.categoriaProduto,
        //     produto: item.nomeProduto,
        //     descricao: item.descricaoProduto,
        //     valor: item.valorProduto,
        //   });
        // });
      });
    },

    limparForm() {
      this.novoProduto.imagem = null;
      this.novoProduto.categorias = null;
      this.novoProduto.produto = [];
      this.novoProduto.descricao = [];
      this.novoProduto.valor = [];
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