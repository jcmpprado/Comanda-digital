<template>
  <container>
    <NavBarAdmin />
    <v-card elevation="10">
      <v-card-title>
        <span class="headline">Cadastrar Novo Produto</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-form @submit.prevent="salvar">
            <v-layout wrap>
              <!-- <v-flex xs12>
                <v-file-input
                  label="File input*"
                  filled
                  prepend-icon="mdi-camera"
                  v-model="produto.imagemProduto"
                ></v-file-input>
              </v-flex> -->
              <!-- <v-flex xs12>
                <v-select
                  :items="produto.categorias"
                  label="Categoria*"
                  required
                ></v-select>
              </v-flex> -->
              <v-flex xs12>
                <v-text-field
                  label="Imagem*"
                  v-model="produto.imagemProduto"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Categoria*"
                  required
                  v-model="produto.categoriaProduto"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Produto*"
                  required
                  v-model="produto.nomeProduto"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Descrição*"
                  required
                  v-model="produto.descricaoProduto"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Valor*"
                  required
                  v-model="produto.valorProduto"
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
        <v-btn color="success" small @click="salvar()">cadastrar</v-btn>
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
        :key="produto.id"
      >
        <template slot="no-data"> Nenhum produto encontrado. </template>

        <template class="text-caption" v-slot:[`item.actionStatus`]="{ item }">
          <v-row justify="center" align-items="center">
            <v-tooltip checkbox>
              <template v-slot:activator="{ on, attrs }">
                <v-checkbox
                  v-model="checkbox"
                ></v-checkbox>
              </template>
            </v-tooltip>
          </v-row>
        </template>

        <template class="text-caption" v-slot:[`item.actionCarrossel`]="{ item }">
          <v-row justify="center" align-items="center">
            <v-tooltip checkbox>
              <template v-slot:activator="{ on, attrs }">
                <v-checkbox
                  v-model="checkbox"
                ></v-checkbox>
              </template>
            </v-tooltip>
          </v-row>
        </template>

        <template class="text-caption" v-slot:[`item.action2`]="{ item }">
          <v-row justify="center" align-items="center">
            <!-- <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  class="mr-10"
                  color="primary"
                  elevation="2"
                  small
                  @click="editar(item.idProduto)"
                >
                  mdi-pencil
                </v-icon>
              </template>
              <span>Editar</span>
            </v-tooltip> -->
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  class="mr-10"
                  color="error"
                  elevation="2"
                  small
                  @click="deleteItem(item.idProduto)"
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
import ProdutoApi from "@/apis/produto/ProdutoApi";

export default {
  data() {
    return {
      listaDeProdutos: [],
      dialogCadastroProduto: false,
      DialogEditarProduto: false,
      cabecalho: [
        {
          text: "Id",
          align: "center",
          filterable: true,
          divider: true,
          value: "idProduto",
        },
        {
          text: "Categoria",
          align: "center",
          filterable: true,
          divider: true,
          value: "categoriaProduto",
        },
        {
          text: "Produto",
          align: "center",
          filterable: true,
          divider: true,
          value: "nomeProduto",
        },
        {
          text: "Descrição",
          align: "center",
          filterable: true,
          divider: true,
          value: "descricaoProduto",
        },
        {
          text: "Valor",
          align: "center",
          filterable: true,
          divider: true,
          value: "valorProduto",
        },
        {
          text: "Produto inativo",
          align: "center",
          divider: true,
          value: "actionStatus",
        },
        {
          text: "Carrossel",
          align: "center",
          divider: true,
          value: "actionCarrossel",
        },
        {
          text: "Ações",
          align: "center",
          divider: true,
          value: "action2",
        },
      ],
      categoria: [],
      descricao: [],
      valor: [],
      produto: {
        idProduto: "",
        categoriaProduto: "",
        nomeProduto: "",
        descricaoProduto: "",
        valorProduto: "",
      },
    };
  },

  components: {
    NavBarAdmin,
  },

  created() {
    this.listarProdutos();
  },

  methods: {
    voltarPagina() {
      this.$router.push({ name: "ResumoAdmin" });
    },

    deleteItem(idProduto) {
      if (confirm("Tem certeza que deseja excluir esse produto?")) {
        var accessToken = sessionStorage.getItem("accessToken");
        var token = accessToken.replace(/"/gi, "");

        ProdutoApi.apagar(idProduto, token)
          .then((response) => {
            response.data;
            alert("Produto excluido com êxito");
            this.listarProdutos();
          })

          .catch((error) => {
            console.log(error);
            alert("Erro ao excluir produto");
          })
          .finally(() => {});
      }
    },

    listarProdutos() {
      const listaDeProdutos = {
        idProduto: this.idProduto,
        categoriaProduto: this.categoriaProduto,
        nomeProduto: this.nomeProduto,
        descricaoProduto: this.descricaoProduto,
        valorProduto: this.valorProduto,
      };

      ProdutoApi.listarProdutos(listaDeProdutos).then((response) => {
        response.data.forEach((item) => {
          this.listaDeProdutos.push({
            idProduto: item.idProduto,
            categoriaProduto: item.categoriaProduto,
            nomeProduto: item.nomeProduto,
            descricaoProduto: item.descricaoProduto,
            valorProduto: item.valorProduto,
          });
        });
      });
    },

    salvar() {
      const produto = {
        categoriaProduto: this.categoriaProduto,
        nomeProduto: this.nomeProduto,
        descricaoProduto: this.descricaoProduto,
        valorProduto: this.valorProduto,
      };

      var accessToken = sessionStorage.getItem("accessToken");
      var token = accessToken.replace(/"/gi, "");
      ProdutoApi.salvar(this.produto, token)
        .then((response) => {
          console.log(response);
          alert("Produto salvo com sucesso!");
          this.listarProdutos();
        })

        .catch((error) => {
          console.log(error);
          alert("Erro ao cadastrar novo produto");
        })
        .finally(() => {
          this.limparForm();
        });
    },

    limparForm() {
      this.produto.imagemProduto = [];
      this.produto.categoriaProduto = [];
      this.produto.nomeProduto = [];
      this.produto.descricaoProduto = [];
      this.produto.valorProduto = [];
    },

    editar(idProduto) {
      ProdutoApi.editar(idProduto).then((response) => {
        response.data;
        this.listarProdutos;
        alert("Produto editado com êxito");
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