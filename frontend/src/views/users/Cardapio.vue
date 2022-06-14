<template>
  <container>
    <NavBarCliente />
    <PizzasTradicionais />
    <PizzasEspeciais />
    <PizzasDoces />
    <Combos />
    <Porcoes />
    <Bebidas />
  </container>
</template>

<script>
import PizzasTradicionais from "@/components/Shared/SlideGroup/PizzasTradicionais.vue";
import PizzasEspeciais from "@/components/Shared/SlideGroup/PizzasEspeciais.vue";
import PizzasDoces from "@/components/Shared/SlideGroup/PizzasDoces.vue";
import Combos from "@/components/Shared/SlideGroup/Combos.vue";
import Porcoes from "@/components/Shared/SlideGroup/Porcoes.vue";
import Bebidas from "@/components/Shared/SlideGroup/Bebidas.vue";
import NavBarCliente from "@/components/Navbar/NavBarCliente.vue";

export default {
  components: {
    NavBarCliente,
    PizzasTradicionais,
    PizzasEspeciais,
    PizzasDoces,
    Combos,
    Porcoes,
    Bebidas
  },
};
</script>