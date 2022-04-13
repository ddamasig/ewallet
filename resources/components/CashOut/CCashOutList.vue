<template>
  <v-card class="pa-4" flat>
    <v-card-text>
      <template v-for="(item,index) in items">
        <v-list-item :key="index" dense :three-line="item.remarks !== undefined">
          <v-list-item-content>
            <v-list-item-title class="text-mono">{{ item.amount }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
            <v-list-item-subtitle v-if="item.remarks">
              Remarks: {{ item.remarks }}
            </v-list-item-subtitle>
            <v-list-item-subtitle v-if="item.images">
              <v-row>
                <v-col sm="3" v-for="(image,index) in item.images" :key="index">
                  <v-avatar tile @click="selectImage(image)">
                    <v-img contain :src="image"></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action class="text-mono">
            TID#{{ item.id }}
          </v-list-item-action>
        </v-list-item>

        <v-divider v-if="index < items.length - 1" :key="`${index}-divider`" class="my-2"></v-divider>
      </template>
    </v-card-text>
    <c-image-viewer :src="selectedImage"></c-image-viewer>
  </v-card>
</template>

<script>
import CImageViewer from "@/components/General/CImageViewer";

export default {
  components: {CImageViewer},

  props: {
    items: Array
  },
  data: () => ({
    selectedImage: ''
  }),
  methods: {
    selectImage(image) {
      this.selectedImage = image
    }
  }
}
</script>
