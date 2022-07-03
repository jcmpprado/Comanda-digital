<template>
  <v-layout row justify-end mb-3>
    <v-dialog v-model="dialogCadastroProduto" persistent max-width="800px">
      <template v-slot:activator="{ on }">
        <v-btn
          color="success"
          @click="dialogCadastroProduto = true"
          dark
          v-bind="attrs"
          v-on="on"
          >Cadastrar novo produto
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Novo Produto</span>
        </v-card-title>
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
                <v-select :items="categorias" label="Categoria*" required></v-select>
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
          <v-btn color="error" small text @click="dialogCadastroProduto = false"
            >cancelar</v-btn
          >
          <v-btn color="success" small @click="dialogCadastroProduto = false; cadastrarProduto()">entrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    dialogCadastroProduto: false,
    
  }),
};
</script>

<style>
.dialogCadastroProduto {
  display: flex;
  justify-content: flex-end;
}
</style>
