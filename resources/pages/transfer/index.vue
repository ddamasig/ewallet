<template>
  <div>
    <c-simple-app-bar title="Choose you recipient bank/wallet"></c-simple-app-bar>
    <v-row>
      <v-col
        v-for="(item,index) in providers"
        :key="index"
        cols="6"
        sm="3"
      >
        <v-card
          outlined
          class="fill-height"
          min-height="120"
          @click="selectProvider(item)"
        >
          <v-row align="center" class="fill-height ma-0 pa-0">
            <v-col cols="12">
              <v-img :src="item.img" class="mx-auto" max-width="80" contain></v-img>
            </v-col>
          </v-row>

        </v-card>
      </v-col>
    </v-row>
  </div>

</template>

<script>
export default {
  layout: 'no-app-bar',
  name: 'ELoadingProviders',
  data: () => ({
    providers: [
      {
        name: 'EasyWallet',
        img: '/logos/ewallet.png',
      },
      {
        name: 'GCash',
        img: '/logos/gcash.png',
      },
      {
        name: 'PayMaya',
        img: '/logos/paymaya.png',
      },
      {
        name: 'BPI',
        img: '/logos/bpi.png',
      },
      {
        name: 'BDO',
        img: '/logos/bdo.svg',
      },
    ]
  }),
  methods: {
    selectProvider(provider) {
      this.$router.push(`/transfer/form`)
    }
  }
}
</script>
