<template>
  <div>
    <v-row
      justify="center"
      align="center"
      dense
    >
      <v-col
        cols="12"
        sm="4"
      >
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
              <p class="mb-0">ID#</p>
              <v-text-field
                v-model="model.id"
                solo
                flat
                dense
                readonly
              ></v-text-field>
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
              <p class="mb-0">Full Address</p>
              <v-text-field
                v-model="model.address"
                solo
                flat
                dense
                readonly
              ></v-text-field>
            </v-form>
            <v-row class="pt-12">
              <v-col cols="12">
                <span class="font-weight-black">
                  Attachments
                </span>
              </v-col>
              <v-col cols="4" v-for="(image,index) in model.attachments" :key="index">
                <v-card @click="selectImage(image)" flat>
                  <v-img :src="image.src" eager></v-img>
                  <v-card-subtitle class="overflow-x-hidden">
                    {{ image.name }}
                  </v-card-subtitle>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              elevation="0"
              block
            >
              Logout
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        sm="3"
        align-self="start"
      >
        <v-card flat class="py-2 fill-height">
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
              outlined
              class="text-capitalize"
              elevation="0"
              to="/profile/update-pin"
            >
              Update PIN
            </v-btn>
            <v-btn
              class="mt-2 text-capitalize"
              block
              color="primary"
              outlined
              elevation="0"
              to="/profile/update-password"
            >
              Update Password
            </v-btn>
          </v-card-text>
        </v-card>
        <v-card flat class="mt-2 py-2 fill-height">
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
    <c-image-viewer
      :src="selectedImage.src"
      :name="selectedImage.name"
      @close-image-viewer="handleCloseImageViewer"
    ></c-image-viewer>
  </div>
</template>

<script>
import CImageViewer from "@/components/General/CImageViewer";

export default {
  components: {CImageViewer},

  layout: 'home',
  name: 'MembershipIndex',
  data: () => ({
    selectedImage: '',
    model: {
      alias: 'JD Loading Station',
      id: '00041234',
      full_name: 'Juan R. Dela Cruz',
      address: 'Penafrancia St, Naga City, Camarines Sur',
      first_name: 'Juan',
      middle_name: 'Reyes',
      last_name: 'Dela Cruz',
      birthdate: 'March 31, 1990',
      email: 'juandelacruz@gmail.com',
      mobile_number: '1231231234',
      attachments: [
        {
          src: 'https://placekitten.com/640/360',
          name: 'proof_of_payment.png'
        },
        {
          src: 'https://placekitten.com/640/361',
          name: 'id_photo.png'
        },
        {
          src: 'https://placekitten.com/640/359',
          name: 'selfie.png'
        }
      ]
    }
  }),

  methods: {
    selectImage(image) {
      this.selectedImage = image
    },
    handleCloseImageViewer(item) {
      console.log('Received close-image-viewer event')
      this.selectedImage = {
        src: '',
        name: '',
      }
    },
  }
}
</script>
