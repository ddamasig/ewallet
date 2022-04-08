<template>
  <div>
    <c-simple-app-bar
      link="/cash-out/new"
      title="Cash-Out"
    ></c-simple-app-bar>
    <v-card
      class="pa-4"
      flat
    >
      <v-card-title>
       <span class="font-weight-bold flex-fill">
         Confirm Cash-out Request
       </span>
      </v-card-title>
      <v-card-subtitle>
        Please make sure that the details below are in order before proceeding.
      </v-card-subtitle>
      <v-card-text>
        <v-simple-table>
          <tr>
            <td class="text-left">Method</td>
            <td class="text-right">GCash</td>
          </tr>
          <tr>
            <td class="text-left">Number</td>
            <td class="text-right">+639123214455</td>
          </tr>
          <tr>
            <td class="text-left">Amount</td>
            <td class="text-right">PHP 1000</td>
          </tr>
          <tr>
            <td class="text-left">Wallet Balance After Transaction</td>
            <td class="text-right">PHP 43,207.00</td>
          </tr>
        </v-simple-table>
      </v-card-text>
      <v-card-actions class="px-3">
        <v-row>
          <v-col cols="12">
            <small>
              By clicking proceed, you acknowledge that nuclear vexatum iaceres sunt galluss de fidelis brodium.
            </small>
          </v-col>
          <v-col cols="12">
            <v-btn
              color="primary"
              block
              elevation="0"
              to="/pin?next=/cash-out/success"
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
  layout: 'blank',
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

