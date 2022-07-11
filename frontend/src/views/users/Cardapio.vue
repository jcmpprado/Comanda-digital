<template>
  <container id="cardapio" class="cardapio">
    <NavBarCliente />
    <Pizza :v-for="produto in produtosCategoria" :produtosDoBanco="produto" />

  </container>
</template>

<script>
import NavBarCliente from "@/components/Navbar/NavBarCliente.vue";
import Pizza from "@/components/Shared/SlideGroup/Pizza.vue";
import ProdutoApi from "@/apis/produto/ProdutoApi";

export default {
  components: {
    NavBarCliente,
    Pizza,
  },

  props: {
    produtosDoBanco: {
      type: Array,
    },
  },

  data() {
    return {
      produtosCategoria: [],
      produto: {
        imagemProduto: "",
        nomeProduto: "",
        descricaoProduto: "",
        valorProduto: "",
      },
      // produto: [
      //   {
      //     imagemProduto: "",
      //     nomeProduto: "Frango com catupiry",
      //     descricaoProduto: "Pizza de Frango com catupiry massa fina com borda recheada",
      //     valorProduto: "45,00",
      //   },
      //   // {
      //   //   imagemProduto: "",
      //   //   nomeProduto: "Pizza Calabresa",
      //   //   descricaoProduto: "Pizza de Calabresa acebolada massa fina com borda tradicional",
      //   //   valorProduto: "35,00",
      //   // },
      // ],
    };
  },

  created() {
    this.preencherCardapio();
  },

  methods: {
    preencherCardapio() {
      ProdutoApi.listarProdutosPorCategoria(`pizza`).then((response) => {
        const produtos = response.data;
        const produtoPorCategoria = {};
        produtos.forEach((produto) => {
          if (produtoPorCategoria[produto.categoria]) {
            produtoPorCategoria[produto.categoria].push(produto);
          } else {
            produtoPorCategoria[produto.categoria] = [produto];
          }
        });
        this.produtos = Object.entries(produtoPorCategoria).map(
          ([key, value]) => {
            return {
              produto: value,
            };
          }
        );
        console.log(produtos);
      });
    },
  },
};
</script>