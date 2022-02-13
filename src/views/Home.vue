<template>
  <div class="home">
    <p v-if="errorMess" class="text-red-700">{{ errorMess }}</p>

    <main class="flex flex-col items-center space-y-16">
      <DeviceCard v-for="device in devices" :key="device.id" :device="device" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DeviceCard from '@/components/DeviceCard.vue';
import api from '@utils/api.ts';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      errorMess: '',
      devices: [],
    };
  },

  components: {
    DeviceCard,
  },
  async mounted() {
    this.devices = await this.getDevices();
  },
  methods: {
    async getDevices() {
      try {
        const response = await api.get('/devices');
        const data = await response.json();
        return data;
      } catch (error) {
        this.errorMess = error.message;
      }
    },
  },
});
</script>
