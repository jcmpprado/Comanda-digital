<template>
  <container>
    <NavBarAdmin />
    <v-card elevation="10">
      <v-card-title>
        <span class="headline">Cadastrar Novo usuário</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-form>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                  label="User*"
                  v-model="imagemProduto"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Senha*"
                  required
                  v-model="categoriaProduto"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Tipo*"
                  required
                  v-model="nomeProduto"
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
        <v-btn color="success" small>cadastrar</v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="mt-5" elevation="14">
      <v-card-title class="justify-center">
        <v-btn class="mr-4" text icon color="black" @click="voltarPagina()">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-spacer> Usuários cadastrados</v-spacer>
      </v-card-title>
      <v-data-table
        dense
        class="pr-3 pl-3 mt-5 elevation-1 text-caption"
        :headers="cabecalho"
        :items="items"
      >
        <template slot="no-data"> Nenhum usuário encontrado. </template>

        <template class="text-caption" v-slot:[`item.action2`]="{ item }">
          <v-row justify="center" align-items="center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  class="mr-10"
                  color="error"
                  elevation="2"
                  small
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

export default {
  data() {
    return {
      cabecalho: [
        {
          text: "Usuário",
          align: "center",
          filterable: true,
          divider: true,
          value: "user",
        },
        {
          text: "tipo",
          align: "center",
          filterable: true,
          divider: true,
          value: "tipo",
        },
        {
          text: "Ações",
          align: "center",
          divider: true,
          value: "action2",
        },
      ],
      user: [],
      tipo: [],
    };
  },

  components: {
    NavBarAdmin,
  },

  created() {
    this.inicializar();
  },

  methods: {
    voltarPagina() {
      this.$router.push({ name: "ResumoAdmin" });
    },

    // deleteItem(idProduto) {
    //   if (confirm("Tem certeza que deseja excluir esse produto?")) {
    //     var accessToken = sessionStorage.getItem("accessToken");
    //     var token = accessToken.replace(/"/gi, "");

    //     ProdutoApi.apagar(idProduto, token)
    //       .then((response) => {
    //         response.data;
    //         alert("Produto excluido com êxito");
    //         this.listarProdutos();
    //       })

    //       .catch((error) => {
    //         console.log(error);
    //         alert("Erro ao excluir produto");
    //       })
    //       .finally(() => {});
    //   }
    // },

    inicializar(){
      this.items = [
        {
          user: "Admin",
          tipo: "Administrador",
        },
         {
          user: "Vitor",
          tipo: "Atendente",
        },
         {
          user: "Leon",
          tipo: "Atendente",
        },
      ]
    },

    // listarProdutos() {
    //   const listaDeProdutos = {
    //     idProduto: this.idProduto,
    //     categoriaProduto: this.categoriaProduto,
    //     nomeProduto: this.nomeProduto,
    //     descricaoProduto: this.descricaoProduto,
    //     valorProduto: this.valorProduto,
    //   };

    //   ProdutoApi.listarProdutos(listaDeProdutos).then((response) => {
    //     response.data.forEach((item) => {
    //       this.listaDeProdutos.push({
    //         idProduto: item.idProduto,
    //         categoriaProduto: item.categoriaProduto,
    //         nomeProduto: item.nomeProduto,
    //         descricaoProduto: item.descricaoProduto,
    //         valorProduto: item.valorProduto,
    //       });
    //     });
    //   });
    // },

    // salvar() {
    //   const produto = {
    //     categoriaProduto: this.categoriaProduto,
    //     nomeProduto: this.nomeProduto,
    //     descricaoProduto: this.descricaoProduto,
    //     valorProduto: this.valorProduto,
    //   };

    //   var accessToken = sessionStorage.getItem("accessToken");
    //   var token = accessToken.replace(/"/gi, "");
    //   ProdutoApi.salvar(this.produto, token)
    //     .then((response) => {
    //       console.log(response);
    //       alert("Produto salvo com sucesso!");
    //       this.listarProdutos();
    //     })

    //     .catch((error) => {
    //       console.log(error);
    //       alert("Erro ao cadastrar novo produto");
    //     })
    //     .finally(() => {
    //       this.limparForm();
    //     });
    // },

    // limparForm() {
    //   this.produto.imagemProduto = [];
    //   this.produto.categoriaProduto = [];
    //   this.produto.nomeProduto = [];
    // },

    
  },
};
</script>

<style>
.dialogCadastroProduto {
  display: flex;
  justify-content: flex-end;
}
</style>