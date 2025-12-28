// filepath: d:\GitHub\dfn_docs\.vitepress\theme\DPlayer.vue
<template>
  <div ref="player" class="dplayer-container"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import DPlayer from 'dplayer';

const props = defineProps({
  videoUrl: String,
  autoplay: { type: Boolean, default: false },
});

const player = ref(null);

onMounted(() => {
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