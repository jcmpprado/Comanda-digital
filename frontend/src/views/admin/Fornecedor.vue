<template>
  <container>
    <NavBarAdmin />
    <div class="dialogFornecedor">
      <DialogFornecedor />
    </div>
    <v-card class="mt-5" elevation="14">
      <v-card-title class="justify-center">
        <v-btn class="mr-4" text icon color="black" @click="voltarPagina()">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-spacer>Fornecedores</v-spacer>
      </v-card-title>
      <v-data-table
        dense
        class="pr-3 pl-3 mt-5 elevation-1 text-caption"
        :headers="cabecalho"
        :items="itens"
      >
        <template slot="no-data"> Nenhum fornecedor encontrado. </template>
      </v-data-table>
    </v-card>
  </container>
</template>

<script>
import NavBarAdmin from "@/components/Navbar/NavBarAdmin.vue";
import DialogFornecedor from "@/components/Shared/dialogs/DialogFornecedor.vue";

export default {
  data() {
    return {
      cabecalho: [
        {
          text: "Nome",
          align: "center",
          filterable: true,
          divider: true,
          value: "nomeFornecedor",
        },
        {
          text: "CNPJ",
          align: "center",
          filterable: true,
          divider: true,
          value: "cnpjFornecedor",
        },
        {
          text: "Telefone",
          align: "center",
          filterable: true,
          divider: true,
          value: "telefoneFornecedor",
        },
        {
          text: "Celular",
          align: "center",
          filterable: true,
          divider: true,
          value: "celularFornecedor",
        },
        {
          text: "Endereço",
          align: "center",
          filterable: true,
          divider: true,
          value: "enderecoFornecedor",
        },
        {
          text: "Obs:",
          align: "center",
          filterable: true,
          divider: true,
          value: "observacao",
        },
      ],
    };
  },

  components: {
    NavBarAdmin,
    DialogFornecedor,
  },

  created() {
    this.initialize();
  },

  methods: {
    voltarPagina() {
      this.$router.push({ name: "ResumoAdmin" });
    },

    initialize() {
      this.itens = [
        {
          nomeFornecedor: "Refrigerantes Coca Cola Andina",
          cnpjFornecedor: "123.456.789/0001-01",
          telefoneFornecedor: "21 3384-8687",
          celularFornecedor:"21 98840-2536" ,
          enderecoFornecedor: "Rua Itapaci, 208 - Rio de Janeiro/RJ - CEP 23.060.850",
          observacao: "Pagamento somente a vista",
        },
       
      ];
    },
  },
};
</script>

<style>
.dialogFornecedor {
  display: flex;
  justify-content: flex-end;
}
</style>