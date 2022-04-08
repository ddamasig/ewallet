<template>
  <div>
    <v-row
      justify="center"
      align="start"
      class="px-3 pb-12"
      dense
    >
      <v-col
        cols="12"
        sm="3"
        :class="listClass"
        @click="selectTransaction()"
      >
        <c-transaction-history
          :search="true"
        ></c-transaction-history>
      </v-col>

      <v-col
        sm="4"
        :class="detailsClass"
      >
        <v-toolbar
          flat
          class="pa-3 mb-0 d-block d-sm-none"
        >
          <v-icon
            @click="back()">
            mdi-arrow-left
          </v-icon>
        </v-toolbar>
        <c-transaction-details
        ></c-transaction-details>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  name: 'TransactionHistory',
  layout: 'home',
  data: () => ({
    showList: true,
  }),
  computed: {
    listClass() {
      if (this.showList) {
        return 'd-block'
      }
      return 'd-none d-sm-block'
    },
    detailsClass() {
      if (!this.showList) {
        return 'd-block'
      }
      return 'd-none d-sm-block'
    }
  },
  methods: {
    selectTransaction() {
      console.log('select ')
      this.showList = false
    },
    back() {
      this.showList = true
    }
  }
}
</script>
