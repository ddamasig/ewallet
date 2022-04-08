<template>
  <div>
    <c-simple-app-bar
      link="/membership"
    ></c-simple-app-bar>
    <v-row justify="start" align="center">
      <v-col cols="12">
        <v-card flat>
          <v-card-title>
            Membership Form
          </v-card-title>
          <v-card-subtitle>
            Please accomplish the form below to get started with EasyWallet.
          </v-card-subtitle>
          <v-card-text>
            <v-form>
              <p class="mb-2">Last Name</p>
              <v-text-field
                solo
                dense
                placeholder="Dela Cruz"
              ></v-text-field>

              <p class="mb-2">First Name</p>
              <v-text-field
                solo
                dense
                placeholder="Juan"
              ></v-text-field>

              <p class="mb-2">Middle Name (Optional)</p>
              <v-text-field
                solo
                dense
                placeholder="Reyes"
              ></v-text-field>

              <p class="mb-2">Birthdate</p>
              <v-text-field
                solo
                dense
                type="date"
              ></v-text-field>

              <p class="mb-2">Mobile No.</p>
              <v-text-field
                prefix="+63"
                clearable
                solo
                dense
                placeholder="XXX-XXX-XXXX"
              ></v-text-field>

              <p class="mb-2">Email Address</p>
              <v-text-field
                clearable
                solo
                dense
                placeholder="juandelacruz@gmail.com"
              ></v-text-field>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-checkbox
              label="I agree that by Vivamus interdum massa congue sapien facilisis, vitae gravida dolor lacinia. Donec sit amet egestas purus, ut dictum elit. Praesent non velit ipsum."
            ></v-checkbox>
          </v-card-actions>

          <v-card-actions>
            <v-btn
              block
              elevation="0"
              color="primary"
              rounded
              to="proof-of-payment"
            >
              Next
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'MembershipForm',
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
