<template>
  <v-bottom-navigation
    :value="value"
    color="primary"
    grow
    app
  >
    <v-btn to="/">
<!--      <span>Home</span>-->

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn>
<!--      <span>History</span>-->

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
<!--      <span>Statistics</span>-->

      <v-icon>mdi-chart-box-plus-outline</v-icon>
    </v-btn>

    <v-btn>
<!--      <span>Account</span>-->

      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>


<script>
export default {
  data: () => ({ value: 1 }),
}
</script>
