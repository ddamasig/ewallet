<template>
  <div class="mb-12 fill-height px-3 pb-6 fill-height">
    <v-row
      justify="center"
      align="start"
      dense
    >
      <v-col
        cols="12"
        sm="9"
        class="mb-4 fill-height"
      >
        <!-- Services -->
        <v-row>
          <v-col cols="12">
            <h3>Services</h3>
            <small>These are the services that you can avail at the moment.</small>
          </v-col>
          <v-col
            cols="6"
            sm="2"
            v-for="(feature,index) in features"
            :key="index"
          >
            <c-feature-card :feature="feature"></c-feature-card>
          </v-col>
        </v-row>

        <!-- Dashboard -->
        <v-row class="mt-1">
          <v-col cols="12">
            <h3>Dashboard</h3>
            <small>Here is a quick overview of important numbers.</small>
          </v-col>
          <v-col
            v-for="(card,index) in cards"
            :key="index"
            cols="12"
            sm="4"
          >
            <c-dashboard-card
              :color="card.color"
              :text-color="card.textColor"
              :value="card.value"
              :label="card.label"
              :icon="card.icon"
            ></c-dashboard-card>
          </v-col>
        </v-row>

        <!-- Sales Report -->
        <v-row>
          <v-col cols="12">
            <h3>Sales Report</h3>
            <small>Here is an overview of your revenue based on markup.</small>
          </v-col>
          <v-col cols="12" sm="8">
            <c-statistics></c-statistics>
          </v-col>
          <v-col cols="12" sm="4">
            <c-pie-chart></c-pie-chart>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" sm="3">
        <v-row>
          <v-col cols="12">
            <c-dashboard-recent-referrals-list></c-dashboard-recent-referrals-list>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CPieChart from "@/components/Dashboard/CPieChart";
import CStatistics from "@/components/Dashboard/CStatistics";
import CDashboardCard from "@/components/Dashboard/CDashboardCard";
import CDashboardRecentReferralsList from "@/components/Dashboard/CDashboardRecentReferralsList";

export default {
  name: 'DashboardIndex',
  components: {CPieChart, CStatistics, CDashboardCard, CDashboardRecentReferralsList},
  layout: 'home',
  data: () => ({

    features: [
      {
        name: 'Cash-In',
        icon: 'mdi-cash-plus',
        color: 'primary',
        to: '/cash-in/how-to-cash-in',
        disabled: false
      },
      {
        name: 'Cash-Out',
        icon: 'mdi-cash-minus',
        color: 'green',
        to: '/cash-out',
        disabled: false
      },
      {
        name: 'Transfer',
        icon: 'mdi-credit-card-fast',
        color: 'blue',
        to: '/transfer',
        disabled: false
      },
      {
        name: 'E-Load',
        icon: 'mdi-cellphone-text',
        color: 'orange',
        to: '/eloading/recipient',
        disabled: false
      },
      {
        name: 'Tickets',
        icon: 'mdi-airplane',
        color: 'teal',
        to: '/',
        disabled: true
      },
      {
        name: 'Referral',
        icon: 'mdi-gift-open-outline',
        color: 'purple',
        to: '/referral',
        disabled: false
      },
      {
        name: 'Pay Bills',
        icon: 'mdi-receipt',
        color: 'pink',
        to: '/pay-bills',
        disabled: false
      },
    ],
    model: {
      alias: 'JD Loading Station',
      full_name: 'Juan R. Dela Cruz',
      first_name: 'Juan',
      middle_name: 'Reyes',
      last_name: 'Dela Cruz',
      birthdate: 'March 31, 1990',
      email: 'juandelacruz@gmail.com',
      mobile_number: '1231231234',
    },
    cards: [
      {
        color: 'primary',
        textColor: 'white--text',
        value: 'P 36,422',
        label: 'Sales',
        icon: 'mdi-sale',
      },
      {
        color: 'orange',
        textColor: 'white--text',
        value: 'P 75,500',
        label: 'Commission',
        icon: 'mdi-piggy-bank',
      },
      {
        color: 'success',
        textColor: 'white--text',
        value: 'P 55,000',
        label: 'Total Cash-out',
        icon: 'mdi-cash-fast',
      },
    ]
  })
}
</script>
