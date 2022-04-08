<template>
  <div>
    <c-simple-app-bar
      link="/"
      title="Pay Bills"
    ></c-simple-app-bar>
    <v-card
      class="pa-4 text-center"
      flat
    >
      <v-card-text class="px-3">
        <v-row>
          <v-col
            v-for="(category,index) in categories"
            :key="index"
            cols="4"
            class="px-1"
          >
            <v-card
              outlined
              rounded
              class="text-center fill-height px-0"
              @click="selectPromo(category)"
              :color="categoryColor(category)"
            >
              <v-card-title class="text-center d-block">
                <v-avatar>
                  <v-icon :class="categoryTextColor(category)">
                    {{ category.icon }}
                  </v-icon>
                </v-avatar>
              </v-card-title>
              <v-card-subtitle
                :class="categoryTextColor(category)"
                class="caption px-0"
              >
                {{ category.title }}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>

        <v-form
          ref="form"
          v-show="model.category.id != 0"
          class="mt-4"
        >
          <v-row class="text-left">
            <v-col
              cols="12"
              class="py-0"
            >
              <p>
                Select Provider
              </p>
              <v-autocomplete
                v-model="model.provider"
                :items="providers"
                item-text="name"
                item-value="id"
                solo
                placeholder="Type keywords to filter"
              >
              </v-autocomplete>
            </v-col>
          </v-row>

          <v-row
            v-show="model.provider.id != 0"
            class="text-left"
          >

            <v-col
              cols="12"
              class="py-0"
            >
              <p>Amount</p>
              <v-text-field
                prefix="PHP"
                solo
                type="number"
              >
              </v-text-field>
            </v-col>

            <v-col
              cols="12"
              class="py-0"
            >
              <p>Account Number (10-Digit)</p>
              <v-text-field solo>
              </v-text-field>
            </v-col>

            <v-col
              cols="12"
              class="py-0"
            >
              <p>Account Name</p>
              <v-text-field solo>
              </v-text-field>
            </v-col>

            <v-col
              cols="12"
              class="py-0"
            >
              <v-btn
                block
                elevation="0"
                color="primary"
                to="pay-bills/validate"
              >
                Next
              </v-btn>
            </v-col>
          </v-row>
        </v-form>

      </v-card-text>
    </v-card>

  </div>

</template>

<script>
export default {
  layout: 'no-app-bar',
  name: 'HowToCashIn',
  data: () => ({
    model: {
      provider: {
        id: 0
      },
      category: {
        id: 0
      }
    },
    providers: [
      {
        id: 1,
        name: 'Converge'
      },
      {
        id: 2,
        name: 'PLDT Home'
      },
      {
        id: 3,
        name: 'One Sky'
      },
      {
        id: 4,
        name: 'Globe at Home'
      },
      {
        id: 5,
        name: 'Eastern Communications'
      },
    ],
    categories: [
      {
        id: 1,
        icon: 'mdi-pipe',
        title: 'Utilities',
      },
      {
        id: 2,
        icon: 'mdi-transmission-tower',
        title: 'Telecoms',
      },
      {
        id: 3,
        icon: 'mdi-credit-card',
        title: 'Credit Card',
      },
      {
        id: 4,
        icon: 'mdi-television',
        title: 'Cable & Broadband',
      },
      {
        id: 5,
        icon: 'mdi-flag',
        title: 'Government',
      },
      {
        id: 6,
        icon: 'mdi-cash',
        title: 'Loans',
      },
    ]
  }),

  computed: {
    isNextDisabled() {
      if (this.model.category.id === 0) {
        return true
      }

      return false
    }
  },
  methods: {
    categoryColor(category) {
      if (category.id === this.model.category.id) {
        return 'orange'
      }
    },
    categoryTextColor(category) {
      if (category.id === this.model.category.id) {
        return 'white--text'
      }
    },
    selectPromo(category) {
      this.model.category = category
    }
  }
}
</script>


<style scoped>
.centered-input >>> input {
  text-align: center
}
</style>
