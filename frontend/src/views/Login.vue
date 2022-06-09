<template>
  <v-container fluid>
    <h3 class="subheading grey--text my-5 titulo">Login</h3>

    <v-flex>
      <v-card max-width="80%" elevation="14">
        <v-card-title class="justify-center">
          <v-spacer>Escolha seu usuário</v-spacer>
        </v-card-title>
        <div class="dialogs">
          <!-- Inicio dialog login admin -->
          <v-layout row justify-center ma-12>
            <v-dialog v-model="dialogAdm" persistent max-width="600px">
              <template v-slot:activator="{ on }">
                <v-btn fab dark large color="black" v-on="on">
                  <v-icon dark>mdi-cog</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">Administrador</span>
                </v-card-title>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12>
                        <v-text-field label="Login*" required></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field
                          label="Senha*"
                          type="password"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-container>
                  <small>*Campos obrigatórios</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="error" small text @click="dialogAdm = false"
                    >cancelar</v-btn
                  >
                  <v-btn color="success" small @click="dialogAdm = false"
                    >entrar</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
          <!-- Fim dialog login adm -->

          <!-- Inicio dialog login users -->
          <v-layout row justify-center ma-12>
            <v-dialog v-model="dialogUser" persistent max-width="600px">
              <template v-slot:activator="{ on }">
                <v-btn fab dark large color="black" v-on="on">
                  <v-icon dark>mdi-account-circle</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">Usuário</span>
                </v-card-title>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12>
                        <v-text-field label="Login*" required></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field
                          label="Senha*"
                          type="password"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-container>
                  <small>*Campos obrigatórios</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="error" small text @click="dialogUser = false"
                    >cancelar</v-btn
                  >
                  <v-btn color="success" small @click="dialogUser = false"
                    >entrar</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
          <!-- Fim dialog login users -->
        </div>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialogAdm: false,
    dialogUser: false,
  }),
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