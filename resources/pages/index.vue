<template>
  <div>
    <c-app-bar></c-app-bar>
    <v-row justify="start" align="center">
      <v-col
        cols="12"
        sm="8"
        md="6"
        class="mt-6"
      >
        <!-- Points BAN -->
        <c-points-card></c-points-card>
      </v-col>

      <v-col
        cols="4"
        v-for="(feature,index) in features"
        :key="index"
      >
        <!-- Feature Buttons -->
        <c-feature-card :feature="feature"></c-feature-card>
      </v-col>
    </v-row>


    <!-- Bottom Sheet -->
    <v-row>
      <v-col cols="12">
        <c-statistics></c-statistics>
      </v-col>
    </v-row>
  </div>

</template>

<script>
export default {
  layout: 'home',
  name: 'IndexPage',
  data: () => ({
    features: [
      {
        name: 'Transfer',
        icon: 'mdi-credit-card-fast',
        color: 'blue',
        to: '/transfer'
      },
      {
        name: 'E-Load',
        icon: 'mdi-cellphone-text',
        color: 'orange',
        to: '/eloading'
      },
      {
        name: 'Tickets',
        icon: 'mdi-airplane',
        color: 'teal',
        to: '/'
      },
      {
        name: 'Referral',
        icon: 'mdi-gift-open-outline',
        color: 'purple',
        to: '/referral'
      },
      {
        name: 'Pay Bills',
        icon: 'mdi-receipt',
        color: 'pink',
        to: '/'
      }
    ]
  })
}
</script>
