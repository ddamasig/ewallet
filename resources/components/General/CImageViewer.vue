<template>
  <v-dialog v-model="isVisible" persistent max-width="1000">
    <v-card>
      <v-card-title>
        <span>Image Viewer</span>
        <v-spacer></v-spacer>
        <v-btn icon @click="isVisible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle>
        File Name: {{ name ? name : 'image#1.png' }}
        <v-icon color="primary" @click="download">mdi-download</v-icon>
      </v-card-subtitle>
      <v-card-text>
        <v-img eager max-height="600" contain :src="src"></v-img>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    src: String,
    name: String
  },
  data: () => ({
    isVisible: false
  }),
  methods: {
    download() {
      console.log('Download')
    }
  },
  watch: {
    src(val) {
      this.isVisible = val !== ''
    },
    isVisible(val) {
      if (!val) {
        this.$emit('close-image-viewer')
      }
    }
  }
}
</script>
