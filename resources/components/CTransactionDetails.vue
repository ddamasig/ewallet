<template>
  <v-card
    class="pa-4"
    flat
    rounded
  >
    <v-card-title>
      Transaction Details
    </v-card-title>
    <v-card-text>
      <v-simple-table>
        <tr>
          <td class="font-weight-medium">Transaction Number</td>
          <td>4LP01JK2</td>
        </tr>
        <tr>
          <td class="font-weight-medium">Transaction Type</td>
          <td>Pay Bills</td>
        </tr>
        <tr>
          <td class="font-weight-medium">Amount</td>
          <td>PHP 2,100</td>
        </tr>
        <tr>
          <td class="font-weight-medium">Provider</td>
          <td>PLDT Home</td>
        </tr>
        <tr>
          <td class="font-weight-medium">Account Number</td>
          <td>900213002913</td>
        </tr>
        <tr>
          <td class="font-weight-medium">Account Name</td>
          <td>PLDT Home Account Name</td>
        </tr>
        <tr>
          <td class="font-weight-medium">Status</td>
          <td class="font-weight-medium success--text">Success</td>
        </tr>
      </v-simple-table>
    </v-card-text>

    <v-card-actions>
      <v-btn
        block
        outlined
        color="primary"
      >
        Print
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    search: Boolean
  },
  data: () => ({}),
  methods: {
    getTextColor(item) {
      const firstString = item.amount.charAt(0)
      switch (firstString) {
        case '-':
          return 'error--text'
        case '+':
          return 'success--text'
      }
    },
    getStatusColor(item) {
      const firstString = item.amount.charAt(0)
      switch (firstString) {
        case '-':
          return 'error lighten-5 error--text'
        case '+':
          return 'success lighten-5 success--text'
      }
    }
  }
}
</script>
