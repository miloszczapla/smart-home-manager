<template>
  <section class="shadow-lg rounded-md max-w-5xl w-full flex py-5">
    <div class="flex items-center">
      <img src="@/assets/icons/drag.svg" alt="drag" class="h-16" />
    </div>
    <div>
      <img
        :src="getImgUrl(device.type)"
        :alt="device.type"
        class="w-16 h-16 mb-2"
      />
    </div>
    <BasicInfo :device="device" />
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SmartDevice } from '@/types';
import BasicInfo from '@/components/BasicInfo.vue';
import api from '@/utils/api';
import { AxiosResponse } from 'axios';

export default defineComponent({
  name: 'DeviceCard',
  props: {
    device: {
      type: Object as PropType<SmartDevice>,
      required: true,
    },
  },

  components: { BasicInfo },

  methods: {
    getImgUrl(deviceType: string) {
      var images = require.context('@/assets/icons', false, /\.svg$/);
      return images('./' + deviceType + '.svg');
    },
    onClick() {
      this.getDetails();
    },
    async getDetails() {
      try {
        const { data }: AxiosResponse = await api.get(
          '/devices/' + this.device.id
        );
        return data;
      } catch (error) {
        this.$emit('error', error.message);
      }
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
