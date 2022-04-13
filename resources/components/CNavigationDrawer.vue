<template>
  <v-navigation-drawer v-model="navigationDrawer" app>
    <v-list
      dense
      nav
    >
      <p class="pa-3 pb-0 font-weight-medium">
        EasyWallet
      </p>
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


    <v-divider class="mt-6"></v-divider>

    <p class="pa-3 pb-0 font-weight-medium">
      Services
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
        {title: 'Dashboard', icon: 'mdi-chart-box-plus-outline', to: '/'},
        {title: 'Transaction History', icon: 'mdi-history', to: '/transaction-history'},
        {title: 'Profile', icon: 'mdi-account', to: '/profile'},
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

