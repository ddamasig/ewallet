<template>
  <div>
    <c-simple-app-bar
      link="/"
      title="Pay Bills"
    ></c-simple-app-bar>
    <v-row>
      <v-col cols="12">
        <v-tabs
          v-model="tab"
          color="primary"
          background-color="transparent"
        >
          <v-tabs-slider color="primary"></v-tabs-slider>

          <v-tab v-for="item in tabs" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">

        <v-tabs-items v-model="tab" class="transparent">
          <!-- Bills Payment Form -->
          <v-tab-item>
            <v-card class="pa-4 text-center" flat>
              <v-card-text class="px-3">
                <c-bills-payment-form></c-bills-payment-form>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <!-- Success List -->
          <v-tab-item>
            <c-bills-payment-list :items="successItems"></c-bills-payment-list>
          </v-tab-item>

          <!-- Failed List -->
          <v-tab-item>
            <c-bills-payment-list :items="failedItems"></c-bills-payment-list>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </div>

</template>

<script>
import CBillsPaymentForm from '@/components/BillsPayment/CBillsPaymentForm'
import CBillsPaymentList from "@/components/BillsPayment/CBillsPaymentList";

export default {
  components: {CBillsPaymentForm, CBillsPaymentList},

  layout: 'no-app-bar',
  name: 'BillsPaymentPage',
  data: () => ({
    tab: null,
    tabs: [
      'New', 'Success', 'Failed'
    ],
    successItems: [
      {
        provider: 'PLDT Home Fibr',
        amount: 'PHP 1,500',
        status: 'success',
        date: '10:30 pm - March 31, 2022'
      },
      {
        provider: 'Converge ICT',
        amount: 'PHP 1,500',
        status: 'success',
        date: '10:30 pm - March 31, 2022'
      },
      {
        provider: 'CASURECO II',
        amount: 'PHP 1,500',
        status: 'success',
        date: '10:30 pm - March 31, 2022'
      },
    ],
    failedItems: [
      {
        provider: 'Globe at Home',
        amount: 'PHP 1,200',
        status: 'failed',
        date: '10:30 pm - March 31, 2022'
      },
      {
        provider: 'MERALCO',
        amount: 'PHP 3,230',
        status: 'failed',
        date: '10:30 pm - March 31, 2022'
      },
      {
        provider: 'PLDT Home Fibr',
        amount: 'PHP 1,500',
        status: 'failed',
        date: '10:30 pm - March 31, 2022'
      },
    ]
  }),

  computed: {
    isNextDisabled() {
      if (this.model.category.id === 0) {
        return true
      }

      return false
    }
  },
}
</script>
