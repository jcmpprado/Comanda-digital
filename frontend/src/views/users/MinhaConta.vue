<template>
  <container>
    <NavBarCliente />
    <v-card class="mt-3" height="auto" elevation="14">
      <!-- <v-card-subtitle class="text-center">
        <h3 class="subheading grey--text titulo">Resumo da sua conta</h3>
      </v-card-subtitle> -->
      <v-card-title class="justify-space-between">
        <v-btn text icon color="black" @click="voltarPagina()">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <h2 class="subheading grey--text titulo">Resumo da sua conta</h2>

        <v-btn text icon color="black"> </v-btn>
      </v-card-title>

      <!-- <v-container class="justify-space-between">
        <v-layout align-center justify-space-around>
          <div class="col-md-3">
            <strong>Número do Pedido:</strong>
          </div>
          <div class="col-md-3">
            <strong>Número de itens:</strong>
          </div>
          <div class="col-md-3">
            <strong>Valor Total:</strong>
          </div>
        </v-layout>
      </v-container> -->
    </v-card>

    
    <v-card class="mt-5" elevation="14">
      <v-card-title class="justify-center">
        <v-spacer> Pedidos realizados</v-spacer>
      </v-card-title>
      <v-data-table
        dense
        class="pr-3 pl-3 mt-5 elevation-1 text-caption"
        :headers="cabecalhoPedido"
        :items="listaDePedidos"
        :key="pedido.mesa"
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
      <div class="button-realiza-pedido">
        <v-btn
          class="ma-2 justify-end"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          @click="fecharConta()"
          >Fechar conta
        </v-btn>
      </div>
    </v-card>
  </container>
</template>

<script>
import PedidoApi from "@/apis/pedido/PedidoApi";
import FinanceiroApi from "@/apis/financeiro/FinanceiroApi";
import NavBarCliente from "@/components/Navbar/NavBarCliente.vue";

export default {
  data() {
    return {
      listaDePedidos: [],
      
      cabecalhoPedido: [
        {
          text: "Data",
          align: "center",
          filterable: true,
          divider: true,
          value: "criacao",
        },
        {
          text: "Número da Mesa",
          align: "center",
          filterable: true,
          divider: true,
          value: "mesa",
        },
        {
          text: "Produtos",
          align: "center",
          filterable: true,
          divider: true,
          value: "listaProd",
        },
        {
          text: "Status",
          align: "center",
          filterable: true,
          divider: true,
          value: "status",
        },
        // {
        //   text: "Ações",
        //   align: "center",
        //   divider: true,
        //   value: "action",
        // },
      ],
      pedido: {
        criacao:"",
        mesa:"",
        listaProd: "",
        status: "",
      }
    };
  },

  components: {
    NavBarCliente,
  },

  created() {
    this.listarPedidosRealizados();
  },

  methods: {
    voltarPagina() {
      this.$router.push({ name: "Apresentacao" });
    },

    fecharConta() {
      this.salvarFinanceiro();
      this.$router.push({ name: "Agradecimento" });
    },

    salvarFinanceiro () {
      var accessToken = sessionStorage.getItem("accessToken");
      var mesa = sessionStorage.getItem("mesa");
      var usuario = sessionStorage.getItem("usuario");

      var token = accessToken.replace(/"/gi, "");
      var mesa = mesa.replace(/"/gi, "");
      var usuario = usuario.replace(/"/gi, "");

      const payloadPedido = {
        listaPedidos: this.listaDePedidos.map(item => (item)),
        mesa: mesa,
        autor: usuario
      }
      FinanceiroApi.salvarRegistroFinanceiro(payloadPedido, token)
        .then((response) => {
          console.log(response);
          alert("Registro financeiro realizado com sucesso");
          this.listaDePedidos=[];
        })

        .catch((error) => {
          console.log(error);
          alert("Erro ao realizar registro financeiro");
        })
        .finally(() => {
        });
    },

    listarPedidosRealizados(){
      const listaDePedidos ={
        criacao: this.criacao,
        mesa: this.mesa,
        listaProd: this.listaProd,
        status: this.status,
      };

      PedidoApi.listarPedidosRealizados(listaDePedidos)
      .then((response) => {
        response.data.forEach((item) => {
          this.listaDePedidos.push({
            criacao: item.criacao,
            mesa: item.mesa,
            listaProd: item.listaProd,
            status: item.status,
          })
        })
      })
    },

    deleteItem(item) {
      const index = this.itens.indexOf(item);
      confirm("Tem certeza que deseja excluir essa faixa etária?") &&
        this.itens.splice(index, 1);
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