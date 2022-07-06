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
        :items="items"
      >
        <template slot="no-data"> Nenhum fornecedor encontrado. </template>
      </v-data-table>
    </v-card>
  </container>
</template>

<script>
// import FornecedorApi from "@/apis/fornecedor/FornecedorApi";
import NavBarAdmin from "@/components/Navbar/NavBarAdmin.vue";

export default {
  data() {
    return {
      cabecalho: [
        {
          text: "Id",
          align: "center",
          filterable: true,
          divider: true,
          value: "idFinanceiro",
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
          value: "Mesa",
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
      listaDePedidosFinalizados: "",
      // pedidoFinalizado: {
      //   idFinanceiro: "",
      //   dataFinalizacao: "",
      //   mesa: "",
      //   listaPedidos: {
      //     idPedido:"",
      //     criacao: "",
      //     mesa: "",

      //   },
      // },
    };
  },

  components: {
    NavBarAdmin,
  },

  created() {
    this.inicializar();
    // this.listarFornecedores();
  },

  methods: {
    voltarPagina() {
      this.$router.push({ name: "ResumoAdmin" });
    },

    inicializar(){
      this.items = [
        {
          idFinanceiro: "1",
          dataFinalizacao: "06/07/2022",
          Mesa: "6",
          listaPedidos: ["Pizza Frango com catupiry, Pizza brigadeiro, Coca-cola 2,5l ||", " Pizza Frango com catupiry, Pizza brigadeiro, Coca-cola 2,5l"],
          valorTotal: "89,90",
          autor: "Vitor",
        },
        {
          idFinanceiro: "2",
          dataFinalizacao: "06/07/2022",
          Mesa: "7",
          listaPedidos: ["Pizza Frango com catupiry, Pizza brigadeiro, Coca-cola 2,5l ||", " Pizza Frango com catupiry, Pizza brigadeiro, Coca-cola 2,5l ||", " Pizza Frango com catupiry, Pizza brigadeiro, Coca-cola 2,5l"],
          valorTotal: "119,90",
          autor: "Vitor",
        },
      ];

    },

    // listarFornecedores() {
    //   const listaDeFornecedores = {
    //     idFornecedor: this.idFornecedor,
    //     cnpjFornecedor: this.cnpjFornecedor,
    //     nomeFornecedor: this.nomeFornecedor,
    //     telefoneFornecedor: this.telefoneFornecedor,
    //     celularFornecedor: this.celularFornecedor,
    //     enderecoFornecedor: this.enderecoFornecedor,
    //     obsFornecedor: this.obsFornecedor,
    //   };

    //   FornecedorApi.listarFornecedores(this.listaDeFornecedores).then(
    //     (response) => {
    //       response.data.forEach((item) => {
    //         console.log(response);
    //         this.listaDeFornecedores.push({
    //           idFornecedor: item.idFornecedor,
    //           cnpjFornecedor: item.cnpjFornecedor,
    //           nomeFornecedor: item.nomeFornecedor,
    //           telefoneFornecedor: item.telefoneFornecedor,
    //           celularFornecedor: item.celularFornecedor,
    //           enderecoFornecedor: item.enderecoFornecedor,
    //           obsFornecedor: item.obsFornecedor,
    //         });
    //       });
    //     }
    //   );
    // },

    // salvarFornecedor(){

    //   const fornecedor = {
    //     cnpjFornecedor: this.cnpjFornecedorFormatado,
    //     nomeFornecedor: this.nomeFornecedor,
    //     telefoneFornecedor: this.telefoneFornecedor,
    //     celularFornecedor: this.celularFornecedor,
    //     enderecoFornecedor: this.enderecoFornecedor,
    //     obsFornecedor: this.obsFornecedor,
    //   };

    //   var accessToken = sessionStorage.getItem("accessToken");
    //   var token = accessToken.replace(/"/gi, "");

    //   FornecedorApi.salvarFornecedor(this.fornecedor, token)
    //   .then((response) => {
    //     console.log(response);
    //     alert("Fornecedor salvo com sucesso!");
    //   })
    // },

    // deletarFornecedor(idFornecedor){
    //   if (confirm("Tem certeza que deseja excluir esse fornecedor?")) {
    //     var accessToken = sessionStorage.getItem("accessToken");
    //     var token = accessToken.replace(/"/gi, "");

    //     FornecedorApi.deletarFornecedor(idFornecedor, token)
    //     .then((response) =>{
    //       response.data;
    //       alert("Fornecedor excluido com êxito");
    //     })
    //   }
    // },

    // limparForm() {
    //   this.fornecedor.cnpjFornecedor = [];
    //   this.fornecedor.nomeFornecedor = [];
    //   this.fornecedor.telefoneFornecedor = [];
    //   this.fornecedor.celularFornecedor = [];
    //   this.fornecedor.enderecoFornecedor = [];
    //   this.fornecedor.obsFornecedor = [];
    // },
  },
};
</script>

<style>
.dialogFornecedor {
  display: flex;
  justify-content: flex-end;
}
</style>