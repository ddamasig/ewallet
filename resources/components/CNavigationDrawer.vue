<template>
  <v-navigation-drawer app v-model="navigationDrawer">
    <v-list-item color="primary">
      <v-list-item-content>
        <v-list-item-title class="text-h6 font-weight-black">
          <h3 class="primary--text">
            ID#00041234
          </h3>
        </v-list-item-title>
        <v-list-item-subtitle>
          Juan Dela Cruz
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar>
        <v-img src="/logos/ewallet.png"></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-divider></v-divider>

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
        color="primary"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>


    <v-divider class="mt-12"></v-divider>

    <p class="pa-3 pb-0 font-weight-medium">
      Services Quick Access
    </p>

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in services"
        :key="item.title"
        link
        :to="item.to"
        color="primary"
        :disabled="item.disabled"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      navigationDrawer: true,
      items: [
        {title: 'Home', icon: 'mdi-home', to: '/'},
        {title: 'Dashboard', icon: 'mdi-chart-box-plus-outline', to: '/dashboard'},
        {title: 'Profile', icon: 'mdi-account', to: '/profile'},
        {title: 'Transaction History', icon: 'mdi-history', to: '/transaction-history'},
      ],
      services: [
        {title: 'Transfer', icon: 'mdi-credit-card-fast', to: '/transfer'},
        {title: 'Buy Load', icon: 'mdi-cellphone-text', to: '/eloading'},
        {title: 'Tickets', icon: 'mdi-airplane', to: '/tickets', disabled: true},
        {title: 'Referral', icon: 'mdi-gift-open-outline', to: '/referral'},
        {title: 'Pay Bills', icon: 'mdi-receipt', to: '/pay-bills'},
        {title: 'Cash-In', icon: 'mdi-cash-plus', to: '/cash-in/how-to-cash-in'},
        {title: 'Cash-Out', icon: 'mdi-cash-minus', to: '/cash-out'},
      ],
    }
  },
  methods: {
    handleToggleNavigationEventDrawer() {
      this.navigationDrawer = !this.navigationDrawer
    }
  },
  mounted() {
    this.$root.$on('toggle-navigation-drawer', this.handleToggleNavigationEventDrawer)
  }
}
</script>

