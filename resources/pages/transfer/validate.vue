<template>
  <div>
    <c-simple-app-bar
      link="/transfer"
      title="Transfer Funds"
    ></c-simple-app-bar>
    <v-card
      class="pa-4 text-center"
      flat
    >
      <v-card-title class="text-center">
       <span class="text-center font-weight-bold flex-fill">
         Confirm Fund Transfer
       </span>
      </v-card-title>
      <v-card-subtitle>
        Please make sure that the details below are in order before proceeding.
      </v-card-subtitle>
      <v-card-text>
        <v-simple-table>
          <tr>
            <td class="text-left">Recipient Avatar</td>
            <td class="text-right">
              <v-avatar class="my-3">
                <v-img src="https://i.pravatar.cc/128"></v-img>
              </v-avatar>
            </td>
          </tr>
          <tr>
            <td class="text-left">Recipient Name</td>
            <td class="text-right">Juan Dela Cruz</td>
          </tr>
          <tr>
            <td class="text-left">Recipient ID#</td>
            <td class="text-right text-mono">1234567890</td>
          </tr>
          <tr>
            <td class="text-left">Current Balance</td>
            <td class="text-right text-mono">PHP 13,707</td>
          </tr>
          <tr>
            <td class="text-left">Amount</td>
            <td class="text-right font-weight-bold orange--text text-mono">PHP 1,500</td>
          </tr>
          <tr>
            <td class="text-left">Wallet Balance After Transaction</td>
            <td class="text-right text-mono">PHP 12,207</td>
          </tr>
        </v-simple-table>
      </v-card-text>
      <v-card-actions>
        <v-row>
          <v-col cols="12">
            <v-btn
              color="primary"
              block
              elevation="0"
              to="/pin?next=/transfer/success"
            >
              Proceed
            </v-btn>
          </v-col>

          <v-col cols="12">
            <v-btn
              block
              text
              to="/"
            >
              Cancel
            </v-btn>
          </v-col>
        </v-row>


      </v-card-actions>
    </v-card>
  </div>

</template>

<script>
export default {
  layout: 'no-app-bar',
  name: 'IndexPage',
  data: () => ({
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    model: {
      pin: '',
    },
  }),
  watch: {
    model: {
      handler(val) {
        console.log(val.pin)
      },
      deep: true
    }
  },
  methods: {
    /**
     * Appends the number parameter to the PIN.
     * @param number
     */
    handleInput(number) {
      if (this.model.pin.length < 4) {
        this.model.pin += number
      }
    },
    /**
     * Returns a shaded or outlined circle icon depending on the index parameter.
     * @param index
     * @returns {string}
     */
    getIcon(index) {
      if (this.model.pin.length >= index) {
        return 'mdi-checkbox-blank-circle'
      }
      return 'mdi-checkbox-blank-circle-outline'
    }
  }
}
</script>

