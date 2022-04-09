<template>
  <div>
    <c-simple-app-bar
      link="/"
      title="Enter transfer details"
    >
    </c-simple-app-bar>
    <v-card
      class="pa-4"
      flat
    >
      <p class="text-center">
        Wallet balance
      </p>
      <h2 class="text-center orange--text">
        PHP 44,200.00
      </h2>
      <v-card-text>
        <v-form
          ref="form"
          @submit.prevent="onSubmit()"
          :disabled="isLoading"
        >
          <small class="d-block mb-2">
            Enter Recipient Mobile Number / Email
          </small>
          <v-text-field
            v-model="model.recipient_number"
            prefix="+63"
            placeholder="XXX-XXX-XXXX"
            type="number"
            :rules="[rules.required, rules.number]"
            clearable
            autofocus
          ></v-text-field>

          <small class="d-block mb-2">
            Enter Amount
          </small>
          <v-text-field
            v-model="model.amount"
            prefix="PHP"
            placeholder="0.00"
            type="number"
            :rules="[rules.required, rules.amount]"
            clearable
          ></v-text-field>

          <small class="d-block mb-2">
            Remarks (Optional)
          </small>
          <v-textarea
            placeholder="Type additional description here."
          ></v-textarea>

          <v-btn
            block
            elevation="0"
            color="primary"
            type="submit"
            :loading="isLoading"
          >
            Next
          </v-btn>
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
      amount: '',
      recipient_number: '',
      proofOfPayment: '',
      remarks: ''
    },
    rules: {
      required: value => !!value || 'This field is required.',
      amount: value => value <= 10000 || 'You can transfer PHP 5,000 per transaction.',
      number: value => value.length === 10 || 'Please enter the 10 digit number',
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
          this.$router.push('/transfer/validate')
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
