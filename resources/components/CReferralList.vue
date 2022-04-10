<template>
  <v-card
    class="pa-4"
    flat
  >
    <v-card-text>
      <template
        v-for="(item,index) in filteredReferrals"
      >
        <v-list-item
          three-line
          :key="index"
          dense
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
            <v-list-item-subtitle class="mt-4">
              <v-chip
                class="text-capitalize"
                :class="getStatusColor(item)"
                small
              >
                {{ item.status }}
              </v-chip>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider
          :key="`${index}-divider`"
          class="my-2"
        ></v-divider>
      </template>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    status: String
  },
  data: () => ({
    referrals: [
      {
        name: 'Harris Quedado',
        date: '10:30 am, March 12, 2022',
        status: 'pending'
      },
      {
        name: 'Dean Simon Damasig',
        date: '10:30 am, March 05, 2022',
        status: 'pending'
      },
      {
        name: 'Ryan Labrador',
        date: '10:30 am, March 05, 2022',
        status: 'pending'
      },
      {
        name: 'John Jackson Betito',
        date: 'Claimed 12 hours ago',
        status: 'claimed'
      },
      {
        name: 'Max Betito',
        date: 'Claimed 14 hours ago',
        status: 'claimed'
      },
      {
        name: 'Karl Limlengco',
        date: 'Claimed 12 hours ago',
        status: 'claimed'
      },
      {
        name: 'Ardee Poblete',
        date: 'Claimed 14 hours ago',
        status: 'claimed'
      },
    ]
  }),
  computed: {
    filteredReferrals() {
      return this.referrals.filter(r => r.status === this.status)
    },
  },
  methods: {
    getStatusColor(item) {
      switch (item.status) {
        case 'pending':
          return 'orange lighten-5 orange--text'
        case 'claimed':
          return 'success lighten-5 success--text'
      }
    }
  }
}
</script>
