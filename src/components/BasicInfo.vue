<template>
  <div class="grid w-full self-start">
    <h3>{{ device.name }}</h3>
    <h3>{{ device.id }}</h3>
    <div class="flex items-center space-x-3">
      <div
        class="rounded-full border border-gray-700 w-7 h-7 flex items-center justify-center"
      >
        <div class="rounded-full w-5 h-5" :class="connectionColor"></div>
      </div>
      <h3 class="capitalize">{{ connectionStatus }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SmartDevice } from '@/types';

export default defineComponent({
  name: 'DeviceCard',
  props: {
    device: {
      type: Object as PropType<SmartDevice>,
      required: true,
    },
  },

  computed: {
    connectionColor() {
      switch (this.device.connectionState) {
        case 'connected':
          return 'bg-green-500';

        case 'poorConnection':
          return 'bg-yellow-500';

        default:
          return 'bg-red-500';
      }
    },
    connectionStatus() {
      return this.device.connectionState.split(/(?=[A-Z])/).join(' ');
    },
  },
});
</script>
<style lang="scss" scoped>
.grid {
  grid-template-columns: repeat(2, minmax(100px, 300px)) 1fr;
}
.max-w-16 {
  max-width: 4rem;
}
</style>
