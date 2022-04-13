<template>
  <div>
    <c-simple-app-bar
      title="Cash-in"
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
            <c-cash-in-intro></c-cash-in-intro>
          </v-tab-item>

          <!-- Pending List -->
          <v-tab-item>
            <c-cash-in-list :items="pendingItems" status="pending"></c-cash-in-list>
          </v-tab-item>

          <!-- Approved List -->
          <v-tab-item>
            <c-cash-in-list :items="approvedItems"></c-cash-in-list>
          </v-tab-item>

          <!-- Approved List -->
          <v-tab-item>
            <c-cash-in-list :items="disapprovedItems"></c-cash-in-list>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>

  </div>

</template>

<script>
import CCashInIntro from "@/components/CashIn/CCashInIntro";
import CCashInList from "@/components/CashIn/CCashInList";

export default {
  name: 'HowToCashIn',
  layout: 'no-app-bar',
  components: {CCashInIntro, CCashInList},
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
        images: [
          'https://placekitten.com/640/361',
          'https://placekitten.com/640/362',
        ]
      },
      {
        id: '3125',
        amount: 'PHP 4,230',
        status: 'approved',
        date: '10:30 pm - March 31, 2022',
        images: [
          'https://placekitten.com/640/363',
          'https://placekitten.com/640/364',
        ]
      },
      {
        id: '3126',
        amount: 'PHP 1,000',
        status: 'approved',
        date: '10:30 pm - March 31, 2022',
        images: [
          'https://placekitten.com/640/365',
          'https://placekitten.com/640/366',
        ]
      },
      {
        id: '3127',
        amount: 'PHP 12,000',
        status: 'approved',
        date: '10:30 pm - March 31, 2022',
        images: [
          'https://placekitten.com/640/359',
          'https://placekitten.com/640/358',
        ]
      },
    ],
  })
}
</script>
