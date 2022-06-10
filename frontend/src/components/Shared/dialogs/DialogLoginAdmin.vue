<template>
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
          <v-btn color="success" small @click="dialogAdm = false">entrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    dialogAdm: false,
  }),
};
</script>
