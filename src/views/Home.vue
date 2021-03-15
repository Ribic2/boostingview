<template>
  <v-app>
    <v-navigation-drawer
        v-model="toggle"
        app
        right
    >
      <h1>test</h1>
    </v-navigation-drawer>

   <v-app-bar app>

     <v-toolbar-title>Boosting site</v-toolbar-title>
     <v-spacer>

     </v-spacer>

     <!-- Breaks when viewport is mobile -->
     <v-app-bar-nav-icon
         v-if="$vuetify.breakpoint.xs"
         @click="toggle = !toggle"
     ></v-app-bar-nav-icon>

     <!-- Displayed if viewport is not mobile-->
     <div v-else>
       <v-btn rounded :elevation="false">
         Our prices
       </v-btn>

       <v-btn rounded :elevation="false">
         Contact us
       </v-btn>
     </div>
   </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row class="row-fill">
          <first-row></first-row>
        </v-row>
        <v-row class="row-fill">
          <h1>test</h1>
        </v-row>
        <v-row class="row-fill">
          <h1>test</h1>
        </v-row>
        <v-row class="row-fill">
          <h1>test</h1>
        </v-row>
      </v-container>

      <v-footer>

      </v-footer>
    </v-main>
  </v-app>
</template>

<script>


import FirstRow from "@/pages/Home/firstRow";
export default {
  name: 'Home',
  components: {FirstRow},
  data(){
    return{
      toggle: false
    }
  }
}
</script>

<style>
  .row-fill{
    border: solid 1px black;
    height: 100vh;
  }
</style>
