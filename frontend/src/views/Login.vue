<template>
  <v-container fluid>
    <v-flex>
      <v-card max-width="50%" elevation="14">
        <v-card-title class="justify-center">
          <v-spacer>Realize o login</v-spacer>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-form @submit.prevent="login" ref="form">
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field
                    v-model="user"
                    type="text"
                    label="Usuário*"
                    placeholder="Usuário"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    v-model="senha"
                    :type="senhaVisivel ? 'text' : 'password'"
                    label="Senha*"
                    placeholder="Senha"
                    :append-icon="senhaVisivel ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="senhaVisivel = !senhaVisivel"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
          <small>*Campos obrigatórios</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" small text>cancelar</v-btn>
          <v-btn color="success" small @click="login()"
            >Realizar login</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
import UsuarioApi from "@/apis/usuario/UsuarioApi";

export default {
  data: () => ({
    user: "",
    senha: "",
  }),

  components: {},

  methods: {
    login() {
      const auth = {
        user: this.user,
        senha: this.senha,
      };

      UsuarioApi.login(this.auth).then((response) => {
        const respota = response.data;
      });
    },
    // login:async function(){
    //   const auth = {
    //     user: this.user,
    //     senha: this.senha,
    //   };

    //   await UsuarioApi.login(this.auth).then((response) => {
    //     response.data
    //   })
    // }
  },
};
</script>

<style>
.titulo {
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 10%;
  margin-inline-end: 0px;
  font-weight: bold;
}

.v-card {
  min-height: 300px;
  margin: auto;
}

.dialogs {
  border: 1px;
  display: flex;
  justify-content: flex-end;
}
</style>