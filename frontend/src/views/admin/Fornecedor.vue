<template>
  <container>
    <NavBarAdmin />
    <v-card elevation="10">
      <v-card-title>
        <span class="headline">Cadastrar Fornecedor</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-form @submit.prevent="salvarFornecedor">
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                  label="CNPJ*"
                  required
                  v-model="fornecedor.cnpjFornecedor"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Nome*"
                  required
                  v-model="fornecedor.nomeFornecedor"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Telefone*"
                  required
                  v-model="fornecedor.telefoneFornecedor"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Celular*"
                  required
                  v-model="fornecedor.celularFornecedor"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Endereço*"
                  required
                  v-model="fornecedor.enderecoFornecedor"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Obs"
                  v-model="fornecedor.obsFornecedor"
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
        <v-btn color="success" small @click="salvarFornecedor()"
          >Continuar</v-btn
        >
      </v-card-actions>
    </v-card>
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
        :items="listaDeFornecedores"
        :key="fornecedor.id"
      >
        <template slot="no-data"> Nenhum fornecedor encontrado. </template>

        <template class="text-caption" v-slot:[`item.action`]="{ item }">
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
                  @click="deletarFornecedor(item.idFornecedor)"
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
import FornecedorApi from "@/apis/fornecedor/FornecedorApi";
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
          value: "idFornecedor",
        },
        {
          text: "CNPJ",
          align: "center",
          filterable: true,
          divider: true,
          value: "cnpjFornecedor",
        },
        {
          text: "Nome",
          align: "center",
          filterable: true,
          divider: true,
          value: "nomeFornecedor",
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
          value: "obsFornecedor",
        },
        {
          text: "Ações",
          align: "center",
          divider: true,
          value: "action",
        },
      ],
      listaDeFornecedores: [],
      fornecedor: {
        idFornecedor: "",
        cnpjFornecedor: "",
        nomeFornecedor: "",
        telefoneFornecedor: "",
        celularFornecedor: "",
        enderecoFornecedor: "",
        obsFornecedor: "",
      },
    };
  },

  components: {
    NavBarAdmin,
  },

  created() {
    this.listarFornecedores();
  },

  methods: {
    voltarPagina() {
      this.$router.push({ name: "ResumoAdmin" });
    },

    listarFornecedores() {
      const listaDeFornecedores = {
        idFornecedor: this.idFornecedor,
        cnpjFornecedor: this.cnpjFornecedor,
        nomeFornecedor: this.nomeFornecedor,
        telefoneFornecedor: this.telefoneFornecedor,
        celularFornecedor: this.celularFornecedor,
        enderecoFornecedor: this.enderecoFornecedor,
        obsFornecedor: this.obsFornecedor,
      };

      FornecedorApi.listarFornecedores(this.listaDeFornecedores).then(
        (response) => {
          response.data.forEach((item) => {
            console.log(response);
            this.listaDeFornecedores.push({
              idFornecedor: item.idFornecedor,
              cnpjFornecedor: item.cnpjFornecedor,
              nomeFornecedor: item.nomeFornecedor,
              telefoneFornecedor: item.telefoneFornecedor,
              celularFornecedor: item.celularFornecedor,
              enderecoFornecedor: item.enderecoFornecedor,
              obsFornecedor: item.obsFornecedor,
            });
          });
        }
      );
    },

    salvarFornecedor() {
      const fornecedor = {
        cnpjFornecedor: this.cnpjFornecedorFormatado,
        nomeFornecedor: this.nomeFornecedor,
        telefoneFornecedor: this.telefoneFornecedor,
        celularFornecedor: this.celularFornecedor,
        enderecoFornecedor: this.enderecoFornecedor,
        obsFornecedor: this.obsFornecedor,
      };

      var accessToken = sessionStorage.getItem("accessToken");
      var token = accessToken.replace(/"/gi, "");

      FornecedorApi.salvarFornecedor(this.fornecedor, token)
        .then((response) => {
          console.log(response);
          alert("Fornecedor salvo com sucesso!");
          this.limparForm();
          this.listarFornecedores();
        })

        .catch((error) => {
          console.log(error);
          alert("Fornecedor salvo com sucesso!");
          this.limparForm();

          this.listarFornecedores();

        })
        .finally(() => {
        });
    },

    deletarFornecedor(idFornecedor) {
      if (confirm("Tem certeza que deseja excluir esse fornecedor?")) {
        var accessToken = sessionStorage.getItem("accessToken");
        var token = accessToken.replace(/"/gi, "");

        FornecedorApi.deletarFornecedor(idFornecedor, token).then(
          (response) => {
            response.data;
            alert("Fornecedor excluido com êxito");
            this.limparForm();
          this.listarFornecedores();
          }

        )

        .catch((error) => {
            console.log(error);
            alert("Erro ao excluir fornecedor");
          })
          .finally(() => {
          });
      }
    },

    limparForm() {
      this.fornecedor.cnpjFornecedor = [];
      this.fornecedor.nomeFornecedor = [];
      this.fornecedor.telefoneFornecedor = [];
      this.fornecedor.celularFornecedor = [];
      this.fornecedor.enderecoFornecedor = [];
      this.fornecedor.obsFornecedor = [];
      this.listaDeFornecedores = [];
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