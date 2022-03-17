<template>
  <v-app>

    <v-main>
      <v-container class="pa-0">
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
    /*background-color: #eff7ff;*/
    /*background-color: rgba(247,106,110, 0.04)*/
    background-color: #f9f9f9
  }
</style>
