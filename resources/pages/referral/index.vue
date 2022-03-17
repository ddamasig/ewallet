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
      <v-app-bar-title class="">
        Referrals
      </v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-card
      class="pa-4 text-center"
      flat
    >
      <v-card-title class="text-center">
       <span class="text-center font-weight-bold flex-fill">
         How to Invite Members?
       </span>
      </v-card-title>
      <v-card-text>
        <ol class="text-left">
          <li>Copy your referral link below.</li>
          <li>Send the link to your friends.</li>
          <li>Wait for them to complete their account and pay the membership fee PHP 5,000</li>
          <li>A referral fee of <b>PHP 2,500</b> will be deposited into you wallet.</li>
        </ol>
      </v-card-text>
      <v-card-actions>
        <v-text-field
          v-model="referral_link"
          ref="referralLinkInput"
          solo
          autofocus
          readonly
          append-icon="mdi-content-copy"
          hint="Click to copy referral link."
          persistent-hint
        ></v-text-field>
      </v-card-actions>
    </v-card>

  </div>

</template>

<script>
export default {
  layout: 'blank',
  name: 'ReferralIndex',
  data: () => ({
    referral_link: 'www.easywallet.ph/referrals/J4y7KD',
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
}
</script>


<style scoped>
.centered-input >>> input {
  text-align: center
}
</style>
