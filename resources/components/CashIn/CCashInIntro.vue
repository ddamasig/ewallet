<template>
  <v-card class="pa-sm-4 text-center" flat>
    <v-avatar color="primary">
      <v-icon color="white">mdi-cash-plus</v-icon>
    </v-avatar>
    <v-card-title class="text-center">
       <span class="text-center font-weight-bold flex-fill">
         How to Cash-In?
       </span>
    </v-card-title>
    <v-card-text>
      <ol class="text-left">
        <li>Send the payment to the admin via the following:</li>

        <!-- Payment Options -->
        <v-list-item
          v-for="(paymentOption,index) in paymentOptions"
          :key="index"
          class="text-left"
        >
          <v-list-item-avatar>
            <v-avatar :class="paymentOption.color">
              <v-icon color="white">{{ paymentOption.icon }}</v-icon>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium">
              {{ paymentOption.number }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ paymentOption.name }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <li>Make sure to include your reference number <b>J46Y7A</b> in you payment remarks.</li>
        <li>Wait for the points to be deposited to your account.</li>
      </ol>
    </v-card-text>
    <v-card-actions>
      <v-btn
        block
        large
        elevation="0"
        color="primary"
        class="text-capitalize font-weight-bold"
        dark
        to="/cash-in/submit-proof-of-payment"
      >
        Submit Proof of Payment
      </v-btn>

    </v-card-actions>
    <v-card-actions>

      <v-btn
        block
        text
        large
        elevation="0"
        color="grey darken-2"
        class="text-capitalize font-weight-bold"
        dark
      >
        Need assistance? Click here
      </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
export default {
  data: () => ({
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
    topups: [
      {
        code: 'R6X45',
        icon: 'mdi-check',
        color: 'success',
        date: '10 Dec, 8:45 AM',
        amount: '₱ 12,500.00'
      },
      {
        code: 'J68C2',
        icon: 'mdi-check',
        color: 'success',
        date: '23 Nov, 11:34 AM',
        amount: '₱ 5,500.00'
      },
      {
        code: 'BN92C',
        icon: 'mdi-close',
        color: 'error',
        date: '9 Nov, 3:18 PM',
        amount: '₱ 3,000.00'
      },
      {
        code: 'R6X45',
        icon: 'mdi-check',
        color: 'success',
        date: '10 Dec, 8:45 AM',
        amount: '₱ 7,500.00'
      },
    ]
  })
}
</script>
