<template>
  <v-col align-self="center" cols="12">
    <v-btn
        class="d-block ma-auto"
        @click="$router.push({name: 'boost'})"
    >Boost me</v-btn>
  </v-col>
</template>

<script>
export default {
name: "firstRow"
}
</script>

<style scoped>

</style>