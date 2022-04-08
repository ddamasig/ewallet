<template>
  <div>
    <c-simple-app-bar title="Choose you provider"></c-simple-app-bar>
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
          min-height="150"
          @click="selectProvider(item)"
        >
          <v-row align="center fill-height ma-0 pa-0">
            <v-col cols="12">
              <v-img
                :src="item.img"
              ></v-img>
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
        name: 'Smart',
        img: '/logos/smart.png',
      },
      {
        name: 'TNT',
        img: '/logos/tnt.svg',
      },
      {
        name: 'Globe',
        img: '/logos/globe.png',
      },
      {
        name: 'TM',
        img: '/logos/tm.png',
      },
      {
        name: 'Sun Cellular',
        img: '/logos/sun.png',
      },
      {
        name: 'Smart Bro',
        img: '/logos/smart-bro.png',
      },
      {
        name: 'DITO',
        img: '/logos/dito.png',
      },
    ]
  }),
  methods: {
    selectProvider(provider) {
      this.$router.push(`/eloading/recipient`)
    }
  }
}
</script>
