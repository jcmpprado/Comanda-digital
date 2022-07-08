<template>
  <container>
    <NavBarAdmin />
    <v-card elevation="10">
      <v-card-title>
        <span class="headline">Cadastrar Novo Usuário</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-form @submit.prevent="salvar">
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                  label="User*"
                  v-model="usuario.user"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Senha*"
                  required
                  v-model="usuario.senha"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Tipo*"
                  required
                  v-model="usuario.tipo"
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
        <v-spacer> Usuários cadastrados</v-spacer>
      </v-card-title>
      <v-data-table
        dense
        class="pr-3 pl-3 mt-5 elevation-1 text-caption"
        :headers="cabecalho"
        :items="listaDeUsuarios"
        :key="usuario.id"
      >
        <template slot="no-data"> Nenhum usuário encontrado. </template>

        <template class="text-caption" v-slot:[`item.action`]="{ item }">
          <v-row justify="center" align-items="center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  class="mr-10"
                  color="error"
                  elevation="2"
                  small
                  @click="deleteItem(item.idUser)"
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
import UsuarioApi from "@/apis/usuario/UsuarioApi";

export default {
  data() {
    return {
      listaDeUsuarios: [],
      cabecalho: [
        {
          text: "Id",
          align: "center",
          filterable: true,
          divider: true,
          value: "idUser",
        },
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
          value: "action",
        },
      ],
      user: [],
      senha: [],
      tipo: [],
      usuario: {
        idUser: "",
        user: "",
        senha: "",
        tipo: "",
      },
    };
  },

  components: {
    NavBarAdmin,
  },

  created() {
    this.listarUsuario();
  },

  methods: {
    voltarPagina() {
      this.$router.push({ name: "ResumoAdmin" });
    },

    deleteItem(idUser) {
      if (confirm("Tem certeza que deseja excluir esse usuário?")) {
        var accessToken = sessionStorage.getItem("accessToken");
        var token = accessToken.replace(/"/gi, "");

        UsuarioApi.apagar(idUser, token)
          .then((response) => {
            response.data;
            alert("Usuário excluido com êxito");
            this.listarProdutos();
          })

          .catch((error) => {
            console.log(error);
            alert("Erro ao excluir usuário");
          })
          .finally(() => {});
      }
    },

    listarUsuario() {
      const listaDeUsuarios = {
        idUser: this.idUser,
        user: this.user,
        tipo: this.tipo,
      };

      UsuarioApi.listarUsuario(listaDeUsuarios).then((response) => {
        response.data.forEach((item) => {
          this.listaDeUsuarios.push({
            idUser: item.idUser,
            user: item.user,
            tipo: item.tipo,
          });
        });
      });
    },

    salvar() {
      const usuario = {
        user: this.user,
        senha: this.senha,
        tipo: this.tipo,
      };

      var accessToken = sessionStorage.getItem("accessToken");
      var token = accessToken.replace(/"/gi, "");
      UsuarioApi.salvarUsuario(this.usuario, token)
        .then((response) => {
          console.log(response);
          alert("Usuário salvo com sucesso!");
          this.listarUsuario();
        })

        .catch((error) => {
          console.log(error);
          alert("Erro ao cadastrar novo usuário");
        })
        .finally(() => {
          this.limparForm();
        });
    },

    limparForm() {
      this.novoUsuario.user = [];
      this.novoUsuario.senha = [];
      this.novoUsuario.tipo = [];
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