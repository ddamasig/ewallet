<template>
  <div>
    <v-app-bar
      flat
      color="transparent"
      class="mb-3"
    >
      <v-app-bar-nav-icon
        class="white"
        @click="$router.push('/')"
      >
        <v-icon>
          mdi-arrow-left
        </v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-card
      class="pa-4 text-center"
      flat
    >
      <v-avatar color="primary">
        <v-icon color="white">mdi-gift-open-outline</v-icon>
      </v-avatar>
      <v-card-title class="text-center">
       <span class="text-center font-weight-bold flex-fill">
         Enter Referral Code
       </span>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            filled
            rounded
            placeholder="XXXXX"
            class="centered-input"
            style="font-size: 2rem; text-align: center"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          block
          rounded
          large
          elevation="0"
          color="primary"
          class="text-capitalize font-weight-bold"
          dark
        >
          Claim
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-card
      class="mt-4 pa-4"
      flat
    >
      <v-card-title class="font-weight-bold">
        Recent Claims
        <v-spacer></v-spacer>
        <v-btn
          text
          class="text-capitalize"
          color="primary"
        >See all
        </v-btn>
      </v-card-title>

      <v-card-text class="pa-0">
        <v-list>
          <v-list-item
            v-for="(claim,index) in claims"
            :key="index"
          >

            <v-list-item-content>
              <v-list-item-title>{{ claim.code }}</v-list-item-title>
              <v-list-item-subtitle>{{ claim.date }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text>
                ₱ 2,500.00
              </v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>

</template>

<script>
export default {
  layout: 'home',
  name: 'IndexPage',
  data: () => ({
    claims: [
      {
        code: 'R6X45',
        icon: 'mdi-check',
        color: 'success',
        date: '10 Dec, 8:45 AM',
      },
      {
        code: 'J68C2',
        icon: 'mdi-check',
        color: 'success',
        date: '23 Nov, 11:34 AM',
      },
      {
        code: 'BN92C',
        icon: 'mdi-close',
        color: 'error',
        date: '9 Nov, 3:18 PM',
      },
      {
        code: 'R6X45',
        icon: 'mdi-check',
        color: 'success',
        date: '10 Dec, 8:45 AM',
      },
    ]
  })
}
</script>


<style scoped>
.centered-input >>> input {
  text-align: center
}
</style>
