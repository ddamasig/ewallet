<template>
  <div>
    <c-simple-app-bar
      title="Markup Settings"
      link="/profile"
    >
    </c-simple-app-bar>
    <v-row
      justify="center"
      align="center"
      dense
    >
      <v-col cols="12" sm="3">
        <v-card flat class="py-2 px-3">
          <v-card-title>
            Markup Settings
          </v-card-title>
          <v-card-subtitle>
            Modify markup value for each of the services then tap the
            save button to commit your changes.
          </v-card-subtitle>
          <v-card-text>
            <v-form
              ref="form"
            >
              <p class="mb-0">Ticketing</p>
              <v-text-field
                v-model="model.ticketing"
                prefix="PHP"
                type="number"
                solo
                dense
              ></v-text-field>
              <p class="mb-0">E-Loading</p>
              <v-text-field
                v-model="model.eloading"
                prefix="PHP"
                type="number"
                solo
                dense
              ></v-text-field>
              <p class="mb-0">Pay Bills</p>
              <v-text-field
                v-model="model.pay_bills"
                prefix="PHP"
                type="number"
                solo
                dense
              ></v-text-field>
              <p class="mb-0">Money Transfer</p>
              <v-text-field
                v-model="model.money_transfer"
                prefix="PHP"
                type="number"
                solo
                dense
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              block
              rounded
              color="primary"
              elevation="0"
            >
              Save
            </v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn
              block
              rounded
              elevation="0"
              text
            >
              Reset
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>

  </div>
</template>

<script>
import CSimpleAppBar from "../../components/CSimpleAppBar";

export default {
  components: {CSimpleAppBar},
  layout: 'home',
  name: 'MembershipIndex',
  data: () => ({
    model: {
      ticketing: 25,
      eloading: 25,
      pay_bills: 25,
      money_transfer: 25,
    }
  })
}
</script>
