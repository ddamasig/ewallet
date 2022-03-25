<template>
  <div>
    <c-simple-app-bar
      link="/eloading/recipient"
      title="Buy Load"
    ></c-simple-app-bar>

    <v-form class="fill-height pa-3">

      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="model.number"
            :prefix="model.network"
            solo
            hide-details
            append-icon="mdi-pencil"
            readonly
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-tabs
            v-model="tab"
            align-with-title
            color="primary"
            class="grow"
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

        <v-col cols="12">
          <v-tabs-items v-model="tab" class="transparent">
            <v-tab-item
              v-for="item in items"
              :key="item"
            >
              <v-row class="px-2" dense>
                <v-col cols="12">
                  <small class="d-block mb-2">Enter Amount</small>
                  <v-text-field
                    solo
                    placeholder="Min of PHP 10, Max of PHP 150"
                    type="number"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row class="pb-4 px-2">
                <v-col
                  v-for="(promo,index) in promos"
                  :key="index"
                  cols="4"
                >
                  <v-card
                    outlined
                    rounded
                    class="text-center"
                    @click="selectPromo(promo)"
                    :color="promoColor(promo)"
                  >
                    <v-card-title class="text-center d-block">
                      {{ promo.title }}
                      <small class="d-block">
                        {{ promo.subtitle }}
                      </small>
                    </v-card-title>
                  </v-card>
                </v-col>
              </v-row>


            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-btn
            elevation="0"
            color="primary"
            rounded
            block
            to="/eloading/validate"
            :disabled="isNextDisabled"
          >Next
          </v-btn>
        </v-col>
      </v-row>


    </v-form>


  </div>

</template>

<script>
export default {
  layout: 'blank',
  name: 'IndexPage',
  data: () => ({
    model: {
      number: '+631231231234',
      network: 'Globe',
      promo: {
        id: 0
      }
    },
    promos: [
      {
        id: 1,
        title: '10',
        subtitle: 'PHP',
      },
      {
        id: 2,
        title: '15',
        subtitle: 'PHP',
      },
      {
        id: 3,
        title: '20',
        subtitle: 'PHP',
      },
      {
        id: 4,
        title: '30',
        subtitle: 'PHP',
      },
      {
        id: 5,
        title: '50',
        subtitle: 'PHP',
      },
      {
        id: 6,
        title: '100',
        subtitle: 'PHP',
      },
    ],

    tab: null,
    items: [
      'Load', 'Call/Text', 'Data', 'Combo',
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }),
  computed: {
    isNextDisabled() {
      if (this.model.promo.id === 0) {
        return true
      }

      return false
    }
  },
  methods: {
    promoColor(promo) {
      if (promo.id === this.model.promo.id) {
        return 'primary white--text'
      }
    },
    selectPromo(promo) {
      this.model.promo = promo
    }
  }
}
</script>


<style scoped>
.centered-input >>> input {
  text-align: center
}
</style>
