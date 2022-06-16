<template>
  <v-sheet
    class="mx-auto mt-5"
    elevation="8"
    max-width="1150"
  ><v-title class="subheading grey--text my-5 titulo">
      Bebidas
      </v-title>
    <v-slide-group
      v-model="model"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="200"
          width="200"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-cart'"
                @click="adicionaNoPedido()"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      model: null,
    }),
  }
</script>

<style scoped>
.titulo {
  display: block;
  font-size: 1.7em;
  text-align: left;
  font-weight: bold;
  margin: 20px 20px;
}
</style>