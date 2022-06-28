<template>
  <v-layout row justify-end mb-3>
    <v-dialog v-model="dialogFornecedor" persistent max-width="800px">
      <template v-slot:activator="{ on }">
        <v-btn
          color="success"
          @click="dialogFornecedor = true"
          dark
          v-bind="attrs"
          v-on="on"
          >Cadastrar Fornecedor
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Cadastrar Fornecedor</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Fornecedor*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="CNPJ" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Telefone*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Celular" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Endereço Completo*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Observação" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*Campos obrigatórios</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" small text @click="dialogFornecedor = false"
            >cancelar</v-btn
          >
          <v-btn color="success" small @click="dialogFornecedor = false">Cadastrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    dialogFornecedor: false,
  }),
};
</script>

<style>
.dialogFornecedor {
  display: flex;
  justify-content: flex-end;
}
</style>
