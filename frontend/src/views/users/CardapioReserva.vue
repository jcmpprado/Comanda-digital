<template>
  <container>
    <NavBarCliente />
    <v-card class="mt-5" elevation="14">
      <v-card-title class="justify-center">
        <v-spacer> Cardápio</v-spacer>
      </v-card-title>
      <v-data-table
        dense
        class="pr-3 pl-3 mt-2 elevation-1 text-caption"
        :headers="cabecalho"
        :items="listaDeProdutos"
        :key="produto.id"
      >
        <template slot="no-data"> Nenhum produto encontrado. </template>

        <template class="text-caption" v-slot:[`item.action`]="{ item }">
          <v-row justify="center" align-items="center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  class="mx-auto"
                  color="success"
                  elevation="2"
                  @click="adicionarAoPedido(item)"
                >
                  mdi-plus-circle
                </v-icon>
              </template>
              <span>Adicionar a comanda</span>
            </v-tooltip>
          </v-row>
        </template>
      </v-data-table>
    </v-card>

    <v-card class="mt-5" elevation="14">
      <v-card-title class="justify-center">
        <v-spacer> Itens do pedido</v-spacer>
      </v-card-title>
      <v-data-table
        dense
        class="pr-3 pl-3 mt-5 elevation-1 text-caption"
        :headers="cabecalhoComanda"
        :items="listaDeProdutosSelecionados"
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
          @click="salvar()"
          >Realizar pedido
        </v-btn>
      </div>
    </v-card>
  </container>
</template>

<script>
import NavBarCliente from "@/components/Navbar/NavBarCliente.vue";
import ProdutoApi from "@/apis/produto/ProdutoApi";

export default {
  data() {
    return {
      listaDeProdutos: [],
      listaDeProdutosSelecionados: [],
      cabecalho: [
        {
          text: "Foto",
          align: "center",
          filterable: true,
          divider: true,
          value: "imagemProduto",
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
          text: "Ações",
          align: "center",
          divider: true,
          value: "action",
        },
      ],
      categoria: [],
      descricao: [],
      valor: [],
      produto: {
        nomeProduto: "",
        valorProduto: "",
      },
      cabecalhoComanda: [
        {
          text: "Descrição",
          align: "center",
          filterable: true,
          divider: true,
          value: "descricaoProduto",
        },
        {
          text: "Valor unitário",
          align: "center",
          filterable: true,
          divider: true,
          value: "valorProduto",
        },
      ],
    };
  },

  components: {
    NavBarCliente,
  },

  created() {
    this.listarProdutos();
  },

  // mounted() {
  //   setTimeout(() => {
  //     this.listaDeProdutos = []
  //   },
  //   3000
  //   )
  // },

  methods: {
    listarProdutos() {
      const listaDeProdutos = {
        imagemProduto: this.imagemProduto,
        categoriaProduto: this.categoriaProduto,
        nomeProduto: this.nomeProduto,
        descricaoProduto: this.descricaoProduto,
        valorProduto: this.valorProduto,
      };

      ProdutoApi.listarProdutos(listaDeProdutos).then((response) => {
        response.data.forEach((item) => {
          
          this.listaDeProdutos.push({
            imagemProduto: item.imagemProduto,
            categoriaProduto: item.categoriaProduto,
            nomeProduto: item.nomeProduto,
            descricaoProduto: item.descricaoProduto,
            valorProduto: item.valorProduto,
          });

        });
      });
    },

    adicionarAoPedido(item) {
      this.listaDeProdutosSelecionados.push(item)
      console.log(item)
    },

    salvar() {
      const produto = {
        descricaoProduto: this.descricaoProduto,
      };

      var accessToken = sessionStorage.getItem("accessToken");
      var mesa = sessionStorage.getItem("mesa");
      var usuario = sessionStorage.getItem("usuario");

      var token = accessToken.replace(/"/gi, "");
      var mesa = mesa.replace(/"/gi, "");
      var usuario = usuario.replace(/"/gi, "");

      const payloadPedido = {
        listaProd: this.listaDeProdutosSelecionados.map(item => ({nomeProduto: item.nomeProduto})),
        mesa: mesa,
        autor: usuario
      }
      ProdutoApi.salvarPedido(payloadPedido, token)
        .then((response) => {
          console.log(response);
          alert("Pedido realizado com sucesso");
          this.listarPedido();
        })

        .catch((error) => {
          console.log(error);
          alert("Erro ao realizar pedido");
        })
        .finally(() => {
        });
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