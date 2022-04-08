<template>
  <v-app>
    <c-app-bar></c-app-bar>
    <c-navigation-drawer></c-navigation-drawer>
    <v-main>
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
export default {
  name: 'HomeLayout',
  data: () => ({})
}
</script>


<style>
  #app {
    background-color: #f9f9f9
  }
</style>
