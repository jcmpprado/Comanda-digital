<template>
   <v-container fluid>
      <h3 class="subheading grey--text my-5 titulo">Bem vindo!</h3>

      <v-flex>
         <v-card class="d-flex align-start mx-auto justify-center" flat height="400" tile>
            <v-card-text>
               <p style="text-align: center">
                  Por favor, realize o login para iniciar a aplicação.
<div>{{produtos}}</div>
               </p>
            </v-card-text>
         </v-card>
      </v-flex>
   </v-container>
</template>

<script>
import axios from 'axios'

export default {
   data(){
      return {
      produtos: []
      }
   },

   components: {},

   async mounted() {

      const { data: produtos } = await axios.get('http://localhost:3000/produtos')

      console.log(produtos)

   },
}
</script>

<style>
.titulo {
   display: block;
   font-size: 1.7em;
   text-align: center;
   font-weight: bold;
}

.p {
   text-align: center;
}
</style>
