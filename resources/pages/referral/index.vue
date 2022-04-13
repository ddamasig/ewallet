<template>
  <div>
    <c-simple-app-bar
      link="/"
      title="Referrals"
    ></c-simple-app-bar>

    <v-row>
      <v-col cols="12">
        <v-tabs
          v-model="tab"
          align-with-title
          color="primary"
          background-color="transparent"
          show-arrows
        >
          <v-tabs-slider color="primary"></v-tabs-slider>

          <v-tab
            v-for="item in items"
            :key="item"
          >
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
                <c-referral-form></c-referral-form>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <c-referral-list :items="pendingItems"></c-referral-list>
          </v-tab-item>

          <v-tab-item>
            <c-referral-list :items="approvedItems"></c-referral-list>
          </v-tab-item>

          <v-tab-item>
            <c-referral-list :items="disapprovedItems"></c-referral-list>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>

  </div>

</template>

<script>
import CReferralForm from "@/components/Referrals/CReferralForm";
import CReferralList from "@/components/Referrals/CReferralList";

export default {
  components: {CReferralList, CReferralForm},
  layout: 'no-app-bar',
  name: 'ReferralIndex',
  data: () => ({
    tab: null,
    items: ['New', 'Pending', 'Approved', 'Disapproved'],
    pendingItems: [
      {
        name: 'Harris Quedado',
        date: '10:30 am - March 31, 2022',
        id: '1000'
      },
      {
        name: 'Dean Simon Damasig',
        date: '10:30 am - March 31, 2022',
        id: '1001'
      },
      {
        name: 'Ryan Labrador',
        date: '10:30 am - March 31, 2022',
        id: '1002'
      },
    ],
    approvedItems: [
      {
        name: 'Karl Limlengco',
        date: '10:30 am - March 31, 2022',
        id: '1003'
      },
      {
        name: 'Ardee Poblete',
        date: '10:30 am - March 31, 2022',
        id: '1004'
      },
    ],
    disapprovedItems: [
      {
        name: 'John Jackson Betito',
        date: '10:30 am - March 31, 2022',
        id: '1005'
      },
    ],
  }),
}
</script>
