<template>
  <div>
    <c-simple-app-bar
      title="Cash-Out"
      link="/cash-out"
    ></c-simple-app-bar>
    <v-card
      class="pa-4"
      flat
    >
      <v-card-text>
        <v-card-title class="px-0">
          Cash-Out Form
        </v-card-title>
        <v-card-subtitle class="px-0">
          We will send the funds to the following wallet/bank account.
        </v-card-subtitle>
        <v-form
          ref="form"
          @submit.prevent="onSubmit()"
          :disabled="isLoading"
        >
          <small class="d-block mb-2">
            Enter Amount
          </small>
          <v-text-field
            prefix="PHP"
            solo
            placeholder="0.00"
            type="number"
            :rules="[rules.required, rules.max]"
          ></v-text-field>

          <small class="d-block mb-2">
            Send to
          </small>

          <v-text-field
            prefix="GCash"
            value="+6391231231234"
            solo
            readonly
          ></v-text-field>

          <v-btn
            block
            elevation="0"
            color="primary"
            type="submit"
            :loading="isLoading"
          >
            Submit
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>

  </div>

</template>

<script>
export default {
  layout: 'no-app-bar',
  name: 'SubmitProofOfPayment',
  data: () => ({
    model: {
      amount: '',
      proofOfPayment: '',
      remarks: ''
    },
    rules: {
      required: value => !!value || 'Please provide the recipients number.',
      max: value => value <= 10000 || 'You can only cash-in PHP 10,000 a day.',
    },
    isLoading: false
  }),
  methods: {
    onSubmit() {
      this.isLoading = true
      const isValid = this.$refs.form.validate()
      if (isValid) {
        // Perform axios code here
        // this.$axios.post()....

        setTimeout(() => {
          // this.$router.push('/pin?next=pay-bills/success')
          this.$router.push('/cash-out/validate')
        }, 300)
      }
      this.isLoading = false
    }
  }
}
</script>


<style scoped>
.centered-input >>> input {
  text-align: center
}
</style>
