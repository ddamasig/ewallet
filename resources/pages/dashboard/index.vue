<template>
  <div>
    <c-app-bar></c-app-bar>
    <v-row
      justify="center"
      align="start"
      class="px-3"
      dense
    >
      <v-col
        cols="12"
        sm="2"
      >
        <h3>Dashboard</h3>
        <small>Here is a quick overview of your account details.</small>
        <v-row class="mt-1">
          <v-col
            v-for="(card,index) in cards"
            :key="index"
            cols="4"
            sm="12"
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

        <v-row>
          <v-col>
            <c-dashboard-withdrawal-request-table></c-dashboard-withdrawal-request-table>
          </v-col>
        </v-row>

      </v-col>

      <v-col sm="9">
        <v-row>
          <v-col>
            <h3>Sales Report</h3>
            <small>Here is an overview of your revenue based on markup.</small>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="8">
            <c-statistics></c-statistics>
          </v-col>
          <v-col cols="12" sm="4">
            <c-pie-chart></c-pie-chart>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import CPieChart from "../../components/CPieChart";

export default {
  name: 'DashboardIndex',
  components: {CPieChart},
  layout: 'home',
  data: () => ({
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
        value: 'P 44,000',
        label: 'Wallet Balance',
        icon: 'mdi-sale',
      },
      {
        color: 'orange',
        textColor: 'white--text',
        value: 'P 1,206',
        label: 'Sales',
        icon: 'mdi-piggy-bank',
      },
      {
        color: 'success',
        textColor: 'white--text',
        value: '3',
        label: 'Pending Referrals',
        icon: 'mdi-account',
      },
    ]
  })
}
</script>
