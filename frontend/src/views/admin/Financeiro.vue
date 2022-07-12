<template>
  <container>
    <NavBarAdmin />

    <v-card class="mt-5" elevation="14">
      <v-card-title class="justify-center">
        <v-btn class="mr-4" text icon color="black" @click="voltarPagina()">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-spacer>Controle Financeiro</v-spacer>
      </v-card-title>
      <v-data-table
        dense
        class="pr-3 pl-3 mt-5 elevation-1 text-caption"
        :headers="cabecalho"
        :items="listaDeRegistros"
        :key="registros.id"
      >
        <template slot="no-data"> Nenhum fornecedor encontrado. </template>
      </v-data-table>
    </v-card>
  </container>
</template>

<script>
import FinanceiroApi from "@/apis/financeiro/FinanceiroApi"
import NavBarAdmin from "@/components/Navbar/NavBarAdmin.vue";

export default {
  data() {
    return {
      listaDeRegistros: [],
      cabecalho: [
        {
          text: "Id",
          align: "center",
          filterable: true,
          divider: true,
          value: "id",
        },
        {
          text: "data de Finalização",
          align: "center",
          filterable: true,
          divider: true,
          value: "dataFinalizacao",
        },
        {
          text: "Nº da Mesa",
          align: "center",
          filterable: true,
          divider: true,
          value: "mesa",
        },
        {
          text: "Pedido(s)",
          align: "center",
          filterable: true,
          divider: true,
          value: "listaPedidos",
        },
        {
          text: "Valor Total",
          align: "center",
          filterable: true,
          divider: true,
          value: "valorTotal",
        },
        {
          text: "Atendente",
          align: "center",
          filterable: true,
          divider: true,
          value: "autor",
        },
      ],
      registros: {
        id: "",
        dataFinalizacao: "",
        mesa: "",
        listaPedidos: [],
      },
    };
  },

  components: {
    NavBarAdmin,
  },

  created() {
    this.listarRegistro();
  },

  methods: {
    voltarPagina() {
      this.$router.push({ name: "ResumoAdmin" });
    },

    listarRegistro (){
    const listaDeRegistros= {
      id: this._id,
      dataFinalizacao: this.dataFinalizacao,
      mesa: this.mesa,
      listaPedidos: this.listaPedidos,
      autor: this.autor,
    }

console.log(listaDeRegistros)

    FinanceiroApi.listarRegistroFinanceiro(listaDeRegistros)
    .then((response) => {
      response.data.forEach((item) => {
        this.listaDeRegistros.push({
          id:item._id,
          dataFinalizacao: item.dataFinalizacao,
          mesa: item.mesa,
          listaPedidos: item.listaPedidos,
          autor: item.autor,
          valorTotal: 50,
        })
      })
    })
  }
    
  },
};
</script>

<style>
.dialogFornecedor {
  display: flex;
  justify-content: flex-end;
}
</style>