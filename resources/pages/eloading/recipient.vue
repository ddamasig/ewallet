<template>
  <div>
    <c-simple-app-bar
      link="/"
      title="Buy Load"
    ></c-simple-app-bar>

    <v-form
      @submit.prevent="next()"
      ref="form"
      class="pa-2 fill-height"
    >
      <!-- Recent contacts -->
      <small class="mb-4 d-block">Recent Contacts</small>
      <v-row dense class="justify-start">
        <v-col
          v-for="(contact,index) in recent_contacts"
          :key="index"
          class="text-center"
          cols="3"
        >
          <v-avatar color="primary" class="mb-2 white--text">
            {{ contact.initial }}
          </v-avatar>
          <small class="d-block">
            {{ contact.name }}
          </small>
          <small class="d-block mb-2">
            {{ contact.number }}
          </small>
        </v-col>
      </v-row>


      <v-divider class="grey lighten-2 my-4"></v-divider>

      <small class="my-2 d-block">Enter mobile number of recipient</small>
      <v-text-field
        v-model="model.number"
        prefix="+63"
        type="number"
        placeholder="XXX-XXX-XXXX"
        autofocus
        solo
        :rules="[rules.required, rules.max]"
        counter
        suffix="Globe"
      ></v-text-field>

      <v-btn
        elevation="0"
        color="primary"
        block
        type="submit"
      >
        Next
      </v-btn>
    </v-form>


  </div>

</template>

<script>
export default {
  layout: 'no-app-bar',
  name: 'IndexPage',
  data: () => ({
    model: {
      number: '',
    },
    rules: {
      required: value => !!value || 'Please provide the recipients number.',
      max: value => value.length === 10 || 'Please enter the last 10 digits.',
    },
    recent_contacts: [
      {
        name: 'Jon Snow',
        number: '09121231234',
        initial: 'JS',
      },
      {
        name: 'Rob Stark',
        number: '09121231234',
        initial: 'RS',
      },
      {
        name: 'The Mountain',
        number: '09121231234',
        initial: 'TM',
      },
      {
        name: 'The Hound',
        number: '09121231234',
        initial: 'TH',
      },
    ],
  }),

  methods: {
    next() {
      const isValid = this.$refs.form.validate()
      if (isValid) {
        this.$router.push('/eloading/promo')
      }
    }
  }
}
</script>
