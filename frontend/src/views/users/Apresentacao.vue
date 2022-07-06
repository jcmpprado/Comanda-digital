<template>
  <container>
    <NavBarCliente />
    <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
  </container>
</template>

<script>
import NavBarCliente from "@/components/Navbar/NavBarCliente.vue";

export default {
    data () {
      return {
        items: [
          {
            src: 'https://images6.alphacoders.com/609/thumbbig-609345.webp',
          },
          {
            src: 'https://img.elo7.com.br/product/original/286585E/painel-adesivo-pizza-sabores-pizzaria-massas-italianas-hd-painel-adesivo-alimento.jpg',
          },
          {
            src: 'https://i.pinimg.com/736x/84/be/b4/84beb4bbb6e230eef1faaf7c1805db3c.jpg',
          },
          {
            src: 'https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2020/11/origem-da-pizza-conheca-a-historia-dessa-iguaria-que-tanto-conquistou-as-pessoas.jpg',
          },
        ],
      }
    },

  components: {
    NavBarCliente,
  },
};
</script>

<style scoped>
.v-application--wrap {
    flex: 1 1 auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    min-height: 15vh !important;
    max-width: 100%;
    position: relative;
}
</style>