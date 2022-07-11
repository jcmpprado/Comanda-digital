<template>
  <div>
    <v-card elevation="10">
      <h2 class="ma-4 grey--text">Pizzas</h2>
      <Carousel :per-page="3">
        <Slide v-for="produto in produtosDoBanco" :key="produto">
          <v-card class="ma-2" max-width="344">
            <v-img
              :img-src="produto.imagemProduto"
              height="200px"
            ></v-img>

            <v-card-title> {{produto.nomeProduto}} </v-card-title>

            <v-card-subtitle> {{produto.descricaoProduto}} </v-card-subtitle>

            <v-card-text> {{produto.valorProduto}} </v-card-text>

            <v-card-actions>
              <v-btn color="success" small> Adicionar ao pedido </v-btn>
            </v-card-actions>
          </v-card>
        </Slide>
      </Carousel>
    </v-card>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },

  props: {
    produtosDoBanco: {
      type: Array,
    },
  },
};
</script>

<style>
</style>