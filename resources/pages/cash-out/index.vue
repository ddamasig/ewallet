<template>
  <div>
    <c-simple-app-bar
      title="Cash-Out"
      link="/"
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
            <c-cash-out-form></c-cash-out-form>
          </v-tab-item>

          <!-- Pending List -->
          <v-tab-item>
            <c-cash-out-list :items="pendingItems"></c-cash-out-list>
          </v-tab-item>

          <!-- Approved List -->
          <v-tab-item>
            <c-cash-out-list :items="approvedItems"></c-cash-out-list>
          </v-tab-item>

          <!-- Approved List -->
          <v-tab-item>
            <c-cash-out-list :items="disapprovedItems"></c-cash-out-list>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </div>

</template>

<script>
import CCashOutForm from "@/components/CashOut/CCashOutForm";
import CCashOutList from "@/components/CashOut/CCashOutList";

export default {
  name: 'HowToCashIn',
  layout: 'no-app-bar',
  components: {CCashOutList, CCashOutForm},
  data: () => ({
    tab: null,
    tabs: ['New', 'Pending', 'Approved', 'Disapproved'],

    pendingItems: [
      {
        id: '1234',
        amount: 'PHP 1,500',
        status: 'pending',
        date: '10:30 pm - March 31, 2022'
      },
    ],
    disapprovedItems: [
      {
        id: '2222',
        amount: 'PHP 1,500',
        status: 'disapproved',
        remarks: 'Lorem ipsum set amet dolor elicit.',
        date: '10:30 pm - March 31, 2022'
      },
    ],
    approvedItems: [
      {
        id: '3124',
        amount: 'PHP 2,765',
        status: 'approved',
        date: '10:30 pm - March 31, 2022',
        images: ['https://placekitten.com/640/360']
      },
      {
        id: '3125',
        amount: 'PHP 4,230',
        status: 'approved',
        date: '10:30 pm - March 31, 2022',
        images: ['https://placekitten.com/640/362']
      },
      {
        id: '3126',
        amount: 'PHP 1,000',
        status: 'approved',
        date: '10:30 pm - March 31, 2022',
        images: ['https://placekitten.com/640/361']
      },
      {
        id: '3127',
        amount: 'PHP 12,000',
        status: 'approved',
        date: '10:30 pm - March 31, 2022',
        images: ['https://placekitten.com/640/363']
      },
    ],
  })
}
</script>

