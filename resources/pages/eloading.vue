<template>
  <div>
    <v-app-bar
      flat
      color="transparent"
      class="mb-3"
    >
      <v-app-bar-nav-icon
        class="white"
        @click="$router.push('/')"
      >
        <v-icon>
          mdi-arrow-left
        </v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-card
      class="pa-4 text-center"
      flat
    >
      <v-avatar color="primary">
        <v-icon color="white">mdi-cellphone-text</v-icon>
      </v-avatar>
      <v-card-title class="text-center">
       <span class="text-center font-weight-bold flex-fill">
         E-Loading
       </span>
      </v-card-title>
      <v-card-text>
        <v-form>
          <!-- Recipient selection -->
          <v-autocomplete
            flat
            filled
            rounded
            placeholder="Enter mobile number"
            label="Send To"
            color="primary"
            item-text="name"
            item-value="name"
            :items="users"
            v-model="model.recipient"
            autofocus
          >
            <template v-slot:selection="data">
              <v-list-item-content style="min-width: 100%">
                <v-list-item-title v-text="data.item.name"></v-list-item-title>
                <v-list-item-subtitle v-text="data.item.key"></v-list-item-subtitle>
              </v-list-item-content>
            </template>
            <template v-slot:item="data">
              <v-list-item-avatar>
                <v-avatar color="primary">
                  <v-icon>mdi-account</v-icon>
                </v-avatar>
                <!--                <img :src="data.item.avatar">-->
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="data.item.name"></v-list-item-title>
                <v-list-item-subtitle v-text="data.item.key"></v-list-item-subtitle>
                <v-list-item-subtitle v-text="data.item.email"></v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-autocomplete>

          <!-- Network Provider selection -->
          <v-autocomplete
            flat
            filled
            rounded
            placeholder="Enter Network Provider"
            label="Network Provider"
            color="primary"
            item-text="name"
            item-value="name"
            :items="network_providers"
            v-model="model.network_provider"
          >
          </v-autocomplete>

          <!-- Promo selection -->
          <v-autocomplete
            flat
            filled
            rounded
            placeholder="Select Load Amount"
            label="Load Amount"
            color="primary"
            item-text="name"
            item-value="id"
            :items="promos"
            v-model="model.promo"
          >
          </v-autocomplete>

          <!-- Remarks field -->
          <v-textarea
            filled
            rounded
            label="Remarks (Optional)"
            v-model="model.remarks"
          >
          </v-textarea>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          block
          rounded
          large
          elevation="0"
          color="primary"
          class="text-capitalize font-weight-bold"
          dark
          to="/pin"
        >
          Send
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-card
      class="mt-4 pa-4"
      flat
    >
      <v-card-title class="font-weight-bold">
        Recent Transactions
        <v-spacer></v-spacer>
        <v-btn
          text
          class="text-capitalize"
          color="primary"
        >See all
        </v-btn>
      </v-card-title>

      <v-card-text class="pa-0">
        <v-list>
          <v-list-item
            v-for="(transaction,index) in transactions"
            :key="index"
            three-line
          >

            <v-list-item-content>
              <v-list-item-title>{{ transaction.code }}</v-list-item-title>
              <v-list-item-subtitle>
                {{ transaction.date }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                {{ transaction.promo }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text>
                {{ transaction.sale }}
              </v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>

</template>

<script>
export default {
  layout: 'home',
  name: 'IndexPage',
  data: () => ({
    model: {
      recipient: null,
      promo: null,
      network_provider: null
    },
    promos: [
      {
        id: 1,
        name: 'GoSurf50'
      },
      {
        id: 2,
        name: 'GoExtra99'
      },
      {
        id: 3,
        name: 'GoUnli50'
      },
    ],
    network_providers: [
      'Globe',
      'Smart',
      'TNT',
      'TM',
      'SUN'
    ],
    users: [
      {
        name: 'John D. Doe',
        email: 'jdoe@example.net',
        key: 'J49X2P'
      },
      {
        name: 'Jane F. Foster',
        email: 'jfoster@example.net',
        key: 'K92LN3'
      },
      {
        name: 'Sean O\'Malley',
        email: 'somalley@example.net',
        key: 'SM21KL'
      },
      {
        name: 'Brandon Moreno',
        email: 'bmoreno@example.net',
        key: 'BM275LK'
      },
    ],
    transactions: [
      {
        code: 'Sean O\'Malley',
        icon: 'mdi-check',
        color: 'success',
        date: '10 Dec, 8:45 AM',
        promo: 'GoUnli50',
        sale: '₱ 55.00',
      },
      {
        code: 'Brandon Moreno',
        icon: 'mdi-check',
        color: 'success',
        date: '23 Nov, 11:34 AM',
        promo: 'GoExtra99',
        sale: '₱ 105.00'
      },
    ]
  })
}
</script>


<style scoped>
.centered-input >>> input {
  text-align: center
}
</style>
