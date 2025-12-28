<template>
  <ClientOnly>
    <div ref="player" class="dplayer-container"></div>
  </ClientOnly>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  videoUrl: String,
  autoplay: { type: Boolean, default: false },
});

const player = ref(null);

onMounted(async () => {
  const { default: DPlayer } = await import('dplayer');
  new DPlayer({
    container: player.value,
    video: {
      url: props.videoUrl,
      type: 'auto',
    },
    autoplay: props.autoplay,
    theme: '#b7daff',
  });
});
</script>

<style scoped>
.dplayer-container {
  width: 668px;
  height: 376px;
}
</style>