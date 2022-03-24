<template>
  <v-navigation-drawer
    app
    fixed
    class="d-none d-sm-block"
  >
    <v-list-item color="primary">
      <v-list-item-content>
        <v-list-item-title class="text-h6 font-weight-black">
          <h3 class="primary--text">
            PHP 44,000
          </h3>
        </v-list-item-title>
        <v-list-item-subtitle>
          Wallet Balance
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-icon class="my-auto">
        <v-icon
          color="primary"
          @click="cashIn()"
          x-large
        >
          mdi-plus-circle
        </v-icon>
      </v-list-item-icon>
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
      items: [
        {title: 'Home', icon: 'mdi-home', to: '/'},
        {title: 'Dashboard', icon: 'mdi-chart-box-plus-outline', to: '/dashboard'},
        {title: 'Profile', icon: 'mdi-account', to: '/profile'},
        {title: 'Transaction History', icon: 'mdi-history', to: '/history'},
      ],
      services: [
        {title: 'Transfer', icon: 'mdi-credit-card-fast', to: '/transfer'},
        {title: 'Buy Load', icon: 'mdi-cellphone-text', to: '/eloading'},
        {title: 'Tickets', icon: 'mdi-airplane', to: '/tickets'},
        {title: 'Referral', icon: 'mdi-gift-open-outline', to: '/referral'},
        {title: 'Pay Bills', icon: 'mdi-receipt', to: '/pay-bills'},
      ],
      right: null,
    }
  },
  methods: {
    cashIn() {
      console.log('Cash In')
    }
  }
}
</script>

