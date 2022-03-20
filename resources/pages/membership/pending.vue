<template>
  <div>
    <v-row justify="start" align="center">
      <v-col
        cols="12"
        class="mt-6"
      >
        <v-card flat>
          <v-card-title>
            Thank you!
          </v-card-title>
          <v-card-subtitle>
            Please wait while our admin confirms your registration. This may take a few minutes to a day.
            A confirmation e-mail will be sent to <b class="orange--text">juandelacruz@gmail.com</b> once your account is confirmed.

            <p>You can also come back to this page to check the status of your registration.</p>
          </v-card-subtitle>
          <v-card-text>
            Not your email? Contact our tech support using the following:
            <ul class="mt-2">
              <li>easywallet.support@gmail.com</li>
              <li>+6391231231234</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  name: 'MembershipIndex',
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
