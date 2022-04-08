<template>
  <v-app-bar
    flat
    color="transparent"
    class="mb-3"
    app
  >
    <v-app-bar-nav-icon
      class="white"
      @click="back"
    >
      <v-icon>
        mdi-arrow-left
      </v-icon>
    </v-app-bar-nav-icon>
    <span class="font-weight-medium">
      {{ title }}
    </span>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    link: String,
    title: String
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>
