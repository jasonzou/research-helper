<template>
  <div
    class="row justify-between items-center"
    style="width: 128px"
  >
    <q-btn
      v-for="color in colors"
      :key="color"
      :style="`background: ${color}`"
      size="sm"
      padding="sm"
      square
      @click="selectColor(color)"
      :data-cy="`btn-${color.slice(1)}`"
    ></q-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const colors = ref(["#ffff00", "#019a9d", "#d9b801", "#e8045a", "#b2028a"]);
const emit = defineEmits(["selected"]);
const selectColor = (color: string) => {
  emit("selected", color);
};
</script>
