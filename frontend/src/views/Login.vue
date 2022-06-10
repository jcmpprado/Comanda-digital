<template>
  <v-container fluid>
    <h3 class="subheading grey--text my-5 titulo">Login</h3>

    <v-flex>
      <v-card max-width="80%" elevation="14">
        <v-card-title class="justify-center">
          <v-spacer>Escolha seu usuário</v-spacer>
        </v-card-title>
        <div class="dialogs">
          <DialogLoginAdmin />
          
          <DialogLoginUser />
        </div>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
import DialogLoginAdmin from '../components/Shared/dialogs/DialogLoginAdmin.vue';
import DialogLoginUser from '../components/Shared/dialogs/DialogLoginUser.vue';

export default {
  data: () => ({

  }),

  components:{
    DialogLoginAdmin,
    DialogLoginUser
  }
};
</script>

<style>
.titulo {
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 10%;
  margin-inline-end: 0px;
  font-weight: bold;
}

.v-card {
  min-height: 300px;
  margin: auto;
}

.dialogs {
  border: 1px;
  display: flex;
  justify-content: flex-end;
}
</style>