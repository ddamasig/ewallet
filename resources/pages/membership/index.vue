<template>
  <div>
    <v-row
      justify="start"
      align="center"
      dense
    >
      <v-col cols="12">
        <v-card flat class="py-2">
          <v-card-title>
            What is EasyWallet?
          </v-card-title>
          <v-card-subtitle>
            You can watch the following videos to learn what EasyWallet can do for you!
          </v-card-subtitle>
          <c-membership-video-carousel></c-membership-video-carousel>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        class="mt-6"
      >
        <v-card flat>
          <v-card-title>
            Join EasyWallet!
          </v-card-title>
          <v-card-subtitle>
            Juan Dela Cruz is inviting you to join EasyWallet.
          </v-card-subtitle>
          <v-card-text>
            <ol>
              <li>Accomplish the registration form.</li>
              <li>
                Send a membership fee of PHP 5,000 to the either of the following payment channels:
                Make sure to include the code <b class="orange--text">C3520J</b> on the remarks section.
              </li>
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

              <li>Submit a screenshot of the proof of payment.</li>
              <li>You will receive a confirmation email.</li>
              <li>Start using EasyWallet!</li>
            </ol>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="px-3 pb-4" dense>
      <v-col>
        <v-btn
          elevation="0"
          block
          color="primary"
          to="/membership/form"
        >
          Next
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'MembershipIndex',
  layout: 'blank',
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
  })
}
</script>
