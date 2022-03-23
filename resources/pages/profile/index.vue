<template>
  <div>
    <c-app-bar></c-app-bar>
    <v-row
      justify="start"
      align="center"
      dense
    >
      <v-col cols="12">
        <v-card flat class="py-2">
          <v-card-title>
            Profile
          </v-card-title>
          <v-card-subtitle>
            This is how you appear to the admin other members that you interact with.
          </v-card-subtitle>
          <v-card-text>
            <v-form
              ref="form"
            >
              <p class="mb-0">First Name</p>
              <v-text-field
                v-model="model.full_name"
                solo
                flat
                dense
                readonly
              ></v-text-field>
              <p class="mb-0">Email Address</p>
              <v-text-field
                v-model="model.email"
                solo
                flat
                dense
                readonly
              ></v-text-field>
              <p class="mb-0">Birthdate</p>
              <v-text-field
                v-model="model.birthdate"
                solo
                flat
                dense
                readonly
              ></v-text-field>
              <p class="mb-0">Mobile Number</p>
              <v-text-field
                v-model="model.mobile_number"
                solo
                flat
                dense
                readonly
                prefix="+63"
              ></v-text-field>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card flat class="py-2">
          <v-card-title>
            Security
          </v-card-title>
          <v-card-subtitle>
            Update your password or PIN here.
          </v-card-subtitle>
          <v-card-text>
            <v-btn
              block
              color="primary"
              rounded
              outlined
              class="text-capitalize"
              elevation="0"
            >
              Update PIN
            </v-btn>
            <v-btn
              class="mt-2 text-capitalize"
              block
              color="primary"
              rounded
              outlined
              elevation="0"
            >
              Update Password
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card flat class="py-2">
          <v-card-title>
            Markup
          </v-card-title>
          <v-card-subtitle>
            Manage your markup for each service.
          </v-card-subtitle>
          <v-card-text>
            <v-btn
              to="/profile/markup"
              block
              color="primary"
              rounded
              outlined
              class="text-capitalize"
              elevation="0"
            >
              Update Markup
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>

  </div>
</template>

<script>
export default {
  layout: 'home',
  name: 'MembershipIndex',
  data: () => ({
    model: {
      alias: 'JD Loading Station',
      full_name: 'Juan R. Dela Cruz',
      first_name: 'Juan',
      middle_name: 'Reyes',
      last_name: 'Dela Cruz',
      birthdate: 'March 31, 1990',
      email: 'juandelacruz@gmail.com',
      mobile_number: '1231231234',
    }
  })
}
</script>
