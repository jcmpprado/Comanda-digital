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
                    v-model="auth.user"
                    type="text"
                    label="Usuário*"
                    placeholder="Usuário"
                    prepend-inner-icon="mdi-account"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    v-model="auth.senha"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    label="Senha*"
                    placeholder="Senha"
                    prepend-inner-icon="mdi-lock"
                    required
                    @click:append="show1 = !show1"
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
          <v-btn color="success" small @click="login()">Realizar login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
import UsuarioApi from "@/apis/usuario/UsuarioApi";

export default {
  data: () => ({
    auth: {
      user: "",
      senha: "",
    },
    show1: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          emailMatch: () => (`The email and password you entered don't match`),
        },
  }),

  components: {},

  methods: {
    login() {
      const auth = {
        user: this.user,
        senha: this.senha,
      };

      UsuarioApi.login(this.auth).then((response) => {
        const resposta = response.data;
        sessionStorage.setItem(
          "accessToken",
          JSON.stringify(resposta.accessToken)
        );
        sessionStorage.setItem("usuario", JSON.stringify(resposta.usuario));

        // this.$router.push(
        // sessionStorage.getItem("/ResumoAdmin")
        // )
        // console.log(resposta)
        // alert("login realizado com sucesso")
        this.$router.push({ name: "Abertura" });
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

<style scoped>
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