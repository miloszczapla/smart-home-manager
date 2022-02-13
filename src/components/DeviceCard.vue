<template>
  <section class="shadow-lg">
    <div>
      <img
        :src="`@/assets/icons/${device.type}.svg`"
        :alt="device.type"
        class="w-12 h-12"
      />
      <p>{{ deviceType }}</p>
    </div>
  </section>
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
  components: {},
  computed: {
    deviceType() {
      switch (this.device.type) {
        case 'temperatureSensor':
          return 'Temperature Sensor';

        default:
          return this.device.type;
      }
    },
  },
  methods: {
    onClick() {
      this.$emit('click', this.device);
    },
  },
});
</script>
