<template>
  <div>
    <v-row justify="start" align="center">
      <v-col
        cols="12"
        class="mt-6"
      >
        <v-card flat>
          <v-card-title>
            You're almost there!
          </v-card-title>
          <v-card-subtitle>
            Please follow the instructions below to complete your membership.
          </v-card-subtitle>
          <v-card-text>
            <ol>
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
            </ol>

            <v-form class="mt-5">
              <v-card
                flat
                color="grey"
                height="200"
                width="auto"
                class="ma-3"
              >
                <v-row
                  align="center"
                  justify="center"
                  class="fill-height text-center"
                >
                  <v-col>
                    <v-icon x-large>
                      mdi-image
                    </v-icon>
                  </v-col>
                </v-row>
              </v-card>
              <p class="mb-2">Upload Proof of Payment</p>
              <v-file-input
                solo
                dense
                v-model="model.proofOfPayment"
                prepend-inner-icon="mdi-image"
                prepend-icon=""
                placeholder="No upload yet"
              >
              </v-file-input>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="px-3">
      <v-col>
        <v-btn
          rounded
          elevation="0"
          block
          color="primary"
          to="pending"
          :disabled="isNextDisabled"
        >
          Next
        </v-btn>
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
