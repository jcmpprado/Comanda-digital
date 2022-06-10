<template>
  <v-layout row justify-center ma-12>
    <v-dialog v-model="dialogUser" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn fab dark large color="black" v-on="on" @click="redirecionar()">
          <v-icon dark>mdi-account-circle</v-icon>
        </v-btn>
      </template>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    dialogUser: false,
  }),

  methods: {
    redirecionar() {
      this.$router.push({ name: "Abertura" });
    },
  },
};
</script>