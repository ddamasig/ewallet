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
        <v-icon color="white">mdi-lock</v-icon>
      </v-avatar>
      <v-card-title class="text-center">
       <span class="text-center font-weight-bold flex-fill">
         Enter PIN
       </span>
      </v-card-title>
      <v-card-subtitle>
        Never share your PIN
      </v-card-subtitle>
      <v-card-text>
        <v-form>
          <!-- Amount field -->
          <v-text-field
            class="d-none"
            filled
            rounded
            label="Amount"
            v-model="model.amount"
            type="number"
          >
          </v-text-field>

          <v-row>
            <v-col cols="12">
              <v-icon
                v-for="c in [1,2,3,4]"
                :key="c"
              >mdi-checkbox-blank-circle-outline</v-icon>
            </v-col>
          </v-row>

          <v-row class="justify-center">
            <v-col
              v-for="(n, index) in numbers"
              :key="index"
              cols="4"
            >
              <v-btn
                elevation="0"
                color="grey"
                class="font-weight-bold"
                dark
                fab
              >{{ n }}</v-btn>
            </v-col>
          </v-row>

        </v-form>
      </v-card-text>
    </v-card>
  </div>

</template>

<script>
export default {
  layout: 'home',
  name: 'IndexPage',
  data: () => ({
    numbers: [1,2,3,4,5,6,7,8,9,0],
    model: {
      pin: '',
    },
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
    claims: [
      {
        code: 'Sean O\'Malley',
        icon: 'mdi-check',
        color: 'success',
        date: '10 Dec, 8:45 AM',
      },
      {
        code: 'Brandon Moreno',
        icon: 'mdi-check',
        color: 'success',
        date: '23 Nov, 11:34 AM',
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
