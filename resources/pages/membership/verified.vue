<template>
  <div>
    <v-row justify="start" align="center">
      <v-col
        cols="12"
        class="mt-6"
      >
        <v-card flat>
          <v-card-title class="success--text">
            Congratulations!
          </v-card-title>
          <v-card-subtitle>
            You registration was successfully verified. Please check the confirmation email
            that we sent to <b class="orange--text">juandelacruz@gmail.com</b> to get started!
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'MembershipVerified',
  layout: 'blank',
  data: () => ({
    model: {
      proofOfPayment: null
    },
    paymentOptions: [
      {
        name: 'BPI',
        number: '0001234567890',
        color: 'primary',
        icon: 'mdi-bank',
      },
      {
        name: 'GCASH',
        number: '+639123456789',
        color: 'blue',
        icon: 'mdi-wallet',
      },
      {
        name: 'PayMaya',
        number: '+639123456789',
        color: 'orange',
        icon: 'mdi-bird'
      },
    ],
  }),
  computed: {
    isNextDisabled() {
      return this.model.proofOfPayment === null
    }
  }
}
</script>
