<template>
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
</template>

<script>


import FirstRow from "@/pages/Home/firstRow";

export default {
  name: 'Home',
  components: {FirstRow},
}
</script>

<style>
  .row-fill{
    height: 100vh;
  }
</style>