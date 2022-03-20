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
          color="orange"
          background-color="transparent"
          show-arrows
        >
          <v-tabs-slider color="orange"></v-tabs-slider>

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
      <v-col>
        <v-tabs-items v-model="tab" class="transparent">
          <v-tab-item>
            <c-referral-instructions></c-referral-instructions>
          </v-tab-item>

          <v-tab-item>
            <c-referral-list :status="getReferralStatus()"></c-referral-list>
          </v-tab-item>

          <v-tab-item>
            <c-referral-list :status="getReferralStatus()"></c-referral-list>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>

  </div>

</template>

<script>
export default {
  layout: 'blank',
  name: 'ReferralIndex',
  data: () => ({
    tab: null,
    items: [
      'Instructions', 'Pending', 'Claimed'
    ],
  }),
  methods: {
    getReferralStatus() {
      switch (this.tab) {
        case 1:
          return 'pending'
        case 2:
          return 'claimed'
      }
      return ''
    }
  }
}
</script>
