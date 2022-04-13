<template>
  <v-card
    class="pa-4 text-center"
    flat
  >
    <v-card-title class="text-center">
       <span class="text-center font-weight-bold flex-fill">
         How to Invite Members?
       </span>
    </v-card-title>
    <v-card-text>
      <ol class="text-left">
        <li>Enter the emails of the people you wish to invite. (You can enter up to 20 per batch)</li>
        <li>Send the link to your friends.</li>
        <li>Wait for them to complete their registration and pay the membership fee.</li>
        <li>A referral fee will be deposited into you wallet.</li>
      </ol>
    </v-card-text>
    <v-card-actions>
      <v-row>
        <v-col cols="12">
          <v-combobox multiple prepend-inner-icon="mdi-email" label="Recipients" chips deletable-chips
                      small-chips hint="Type the email then press the TAB or ENTER key." persistent-hint
          ></v-combobox>
        </v-col>

        <v-col cols="12">
          <v-btn block color="primary" elevation="0">Send</v-btn>
        </v-col>
      </v-row>

    </v-card-actions>
  </v-card>
</template>
