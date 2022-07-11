<template>
  <container>
    <NavBarAdmin />
    <div id="resumoAdmin" class="mt-8">
    <p>
      Bem vindo ao painel do administrador.
    </p>
    <span
      >Aqui você pode cadastrar novos usuários e fornecedores, gerenciar o estoque, acompanhar o resumo de todos os pedidos relizados e realizar alterações no cardápio.</span
    >
</div>
  </container>
</template>

<script>
import NavBarAdmin from "@/components/Navbar/NavBarAdmin.vue";

export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },

  components: {
    NavBarAdmin,
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