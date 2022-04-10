<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
        <Nuxt/>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
export default {
  name: 'BlankLayout',
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
