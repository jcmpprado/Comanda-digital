<template>
  <v-layout row justify-end mb-3>
    <v-dialog v-model="dialogEntradaEstoque" persistent max-width="800px">
      <template v-slot:activator="{ on }">
        <v-btn
          color="success"
          @click="dialogEntradaEstoque = true"
          dark
          v-bind="attrs"
          v-on="on"
          >Alimentar estoque
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Nova entrada no estoque</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Produto*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Fornecedor*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Quantidade*" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*Campos obrigatórios</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" small text @click="dialogEntradaEstoque = false"
            >cancelar</v-btn
          >
          <v-btn color="success" small @click="dialogEntradaEstoque = false">Dar entrada</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    dialogEntradaEstoque: false,
  }),
};
</script>

<style>
.dialogEntradaEstoque {
  display: flex;
  justify-content: flex-end;
}
</style>
