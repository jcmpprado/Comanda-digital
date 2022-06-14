<template>
  <v-layout row justify-center mb-3>
    <v-dialog v-model="dialogEditarProduto" persistent max-width="800px">
      <template v-slot:activator="{ on }">
        <v-icon
          class="ma-1"
          color="primary"
          elevation="2"
          small
          v-on="on"
          @click="DialogEditarProduto = true"
        >
          mdi-pencil
        </v-icon>
      </template>
      <v-card>
        <v-card-title> </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-file-input
                  label="File input*"
                  filled
                  prepend-icon="mdi-camera"
                ></v-file-input>
              </v-flex>
              <v-flex xs12>
                <v-select label="Categoria*" required></v-select>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Produto*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Descrição*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Valor*" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*Campos obrigatórios</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" small text @click="dialogEditarProduto = false"
            >cancelar</v-btn
          >
          <v-btn color="success" small @click="dialogEditarProduto = false"
            >entrar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    dialogEditarProduto: false,
  }),
};
</script>

<style>
.dialogCadastroProduto {
  display: flex;
  justify-content: flex-end;
}
</style>
