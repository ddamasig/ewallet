<template>
  <div>
    <c-simple-app-bar
      title="Cash-Out"
      link="/"
    ></c-simple-app-bar>
    <v-card
      class="pa-4"
      flat
    >
      <v-card-title>
       <span class="font-weight-bold flex-fill">
         Choose Cash-Out Method
       </span>
      </v-card-title>
      <v-card-text>
        <v-list>
          <template v-for="(item,index) in cashOutMethods">
            <v-list-item :key="index" @click="selectCashOutMethod(item)">
              <v-list-item-avatar :color="item.color">
                <v-icon color="white">{{ item.icon }}</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.number }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider
              :key="`${index}-divider`"
              v-if="index < cashOutMethods.length - 1"
            ></v-divider>
          </template>


          <v-btn
            color="primary"
            block
            text
            @click="addCashOutMethod()"
            class="mt-4"
          >
            <v-icon>mdi-plus</v-icon>
            New
          </v-btn>

        </v-list>
      </v-card-text>
    </v-card>
  </div>

</template>

<script>
export default {
  layout: 'blank',
  name: 'HowToCashIn',
  data: () => ({
    cashOutMethods: [
      {
        name: 'BPI',
        number: '0001234567890',
        color: 'primary',
        icon: 'mdi-bank',
        id: 3
      },
      {
        name: 'GCash',
        number: '+639123456789',
        color: 'blue',
        icon: 'mdi-wallet',
        id: 2
      },
      {
        name: 'PayMaya',
        number: '+639123456789',
        color: 'orange',
        icon: 'mdi-bird',
        id: 1
      },
    ],
  }),
  methods: {
    selectCashOutMethod(method) {
      console.log(`Selecting ${method.name}`)
      this.$router.push(`/cash-out/new?method=${method.id}`)
    }
  }
}
</script>

