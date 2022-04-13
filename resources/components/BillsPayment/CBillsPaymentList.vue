<template>
  <v-card
    class="pa-4"
    flat
  >
    <v-card-text>
      <template v-for="(item,index) in items">
        <v-list-item :key="index" dense>
          <v-list-item-content>
            <v-list-item-title>{{ item.provider }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.date }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action class="text-mono font-weight-bold">
            {{ item.amount }}
          </v-list-item-action>
        </v-list-item>

        <v-divider v-if="index < items.length - 1" :key="`${index}-divider`" class="my-2"></v-divider>
      </template>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    items: String
  },
}
</script>
