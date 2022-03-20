<template>
  <div class="mt-3">
    <h3>Pending Referrals</h3>
    <small class="mb-3">You will receive P 2,500 commission fee per use who completes their registration.</small>
    <template
      v-for="(item,index) in requests"
    >
      <v-list-item
        :key="index"
        class="pt-2"
      >
        <v-list-item-content>
          <v-list-item-title class="font-weight-medium">
            {{ item.id }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ item.date }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-chip
            class="text-capitalize"
            :class="getStatusColor(item)"
            small
          >
            {{ item.status }}
          </v-chip>
        </v-list-item-action>
      </v-list-item>
      <v-divider
        :key="`${index}-divider`"
        class="my-2">
      </v-divider>
    </template>

  </div>
</template>

<script>
export default {
  data: () => ({
    requests: [
      {
        id: 'KK23LQD',
        date: 'March 16, 2022',
        expiryDate: 'March 24, 2022',
        status: 'pending'
      },
      {
        id: 'QS5LS01',
        date: 'March 10, 2022',
        status: 'complete'
      },
      {
        id: 'SM0X921',
        date: 'March 02, 2022',
        status: 'complete'
      },
    ]
  }),
  methods: {
    getStatusColor(item) {
      switch (item.status) {
        case 'pending':
          return 'orange lighten-5 orange--text'
        case 'complete':
          return 'success lighten-5 success--text'
      }
    }
  }
}
</script>
