<template>
  <v-app-bar
    app
    elevate-on-scroll
  >
    <v-app-bar-nav-icon
      @click="toggleNavigationBar"
    ></v-app-bar-nav-icon>

    <v-avatar size="32" class="mr-2">
      <v-img src="/logos/ewallet.png"></v-img>
    </v-avatar>
    <span class="font-weight-medium d-none d-sm-block">
      EasyWallet
    </span>

    <v-spacer></v-spacer>
    <span class="font-weight-black text-mono grey--text">Balance: Php 12,500</span>
    <c-notifications></c-notifications>
    <c-avatar-menu></c-avatar-menu>
  </v-app-bar>
</template>


<script>
export default {
  methods: {
    toggleNavigationBar() {

      this.$root.$emit('toggle-navigation-drawer')
    }
  }
}
</script>



