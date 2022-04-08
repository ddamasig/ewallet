<template>
  <v-card
    class="pa-4"
    flat
    rounded
  >
    <v-card-title v-if="search">
      <v-text-field
        placeholder="Type keywords here"
        append-icon="mdi-magnify"
        v-model="model.search"
        label="Search"
      ></v-text-field>
      <v-select
        :items="categories"
        v-model="model.category"
        label="Filter by Category"
      ></v-select>
    </v-card-title>
    <v-card-text>
      <template
        v-for="(item,index) in transactions"
      >
        <v-list-item
          :key="index"
          dense
        >
          <v-list-item-content>
            <v-list-item-title
              class="font-weight-black"
              :class="getTextColor(item)"
              style="font-size: 1rem"
            >
              {{ item.amount }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action class="mt-4">
            <v-chip
              class="text-capitalize"
              :class="getStatusColor(item)"
              small
            >
              {{ item.category }}
            </v-chip>
          </v-list-item-action>
        </v-list-item>

        <v-divider
          :key="`${index}-divider`"
          class="my-2"
        ></v-divider>
      </template>

      <v-btn
        block
        text
        small
        class="text-center"
      >
        Show more
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    search: Boolean
  },
  data: () => ({
    model: {
      search: '',
      category: null
    },
    categories: [
      'All',
      'Buy Load',
      'Buy Ticket',
      'Cash-In',
      'Cash-Out',
      'Fund Transfer',
      'Money Transfer',
      'Pay Bills',
      'Referral',
    ],
    transactions: [
      {
        amount: '- PHP 2,100',
        date: 'March 12, 2022',
        category: 'Pay Bills'
      },
      {
        amount: '+ PHP 10,000',
        date: 'March 12, 2022',
        category: 'Cash-In'
      },
      {
        amount: '- PHP 1,420',
        date: 'March 12, 2022',
        category: 'Money Transfer'
      },
      {
        amount: '- PHP 5,000',
        date: 'March 12, 2022',
        category: 'Cash-Out'
      },
      {
        amount: '- PHP 500',
        date: 'March 12, 2022',
        category: 'Money Transfer'
      },
      {
        amount: '- PHP 200',
        date: 'March 12, 2022',
        category: 'Fund Transfer'
      },
      {
        amount: '- PHP 100',
        date: 'March 12, 2022',
        category: 'Buy Load'
      },
    ]
  }),
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
