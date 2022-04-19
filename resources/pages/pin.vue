<template>
  <div>
    <c-simple-app-bar
      title="Enter PIN"
    ></c-simple-app-bar>
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
          <v-text-field
            v-model="model.pin"
            solo
            label="PIN"
            prepend-inner-icon="mdi-lock"
            type="password"
            counter
          >
          </v-text-field>

        </v-form>
      </v-card-text>
    </v-card>
  </div>

</template>

<script>
export default {
  layout: 'no-app-bar',
  name: 'IndexPage',
  data: () => ({
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    model: {
      pin: '',
    },
  }),
  watch: {
    model: {
      handler(val) {
        // Redirect to the summary page after encoding PIN.
        if (this.model.pin.length === 4) {
          let next = '/eloading/success'
          if (this.$route.query.next) {
            next = this.$route.query.next
          }
          this.$router.push(next)
        }
      },
      deep: true
    }
  },
  methods: {
    /**
     * Appends the number parameter to the PIN.
     * @param number
     */
    handleInput(number) {
      if (this.model.pin.length < 4) {
        this.model.pin += number
      }
    },
    /**
     * Returns a shaded or outlined circle icon depending on the index parameter.
     * @param index
     * @returns {string}
     */
    getIcon(index) {
      if (this.model.pin.length >= index) {
        return 'mdi-checkbox-blank-circle'
      }
      return 'mdi-checkbox-blank-circle-outline'
    }
  }
}
</script>

<style>

.v-text-field input {
  text-align: center;
  font-size: 2rem;
  letter-spacing: 1rem;
}
</style>

