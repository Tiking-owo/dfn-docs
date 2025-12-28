<template>
  <ClientOnly>
    <div ref="playerContainer" class="dplayer-container">
      <div ref="player" class="dplayer-wrapper"></div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const props = defineProps({
  videoUrl: String,
  autoplay: { type: Boolean, default: false },
});

const player = ref(null);
const playerContainer = ref(null);
let dplayerInstance = null;
let resizeObserver = null;

onMounted(async () => {
  const { default: DPlayer } = await import('dplayer');
  
  dplayerInstance = new DPlayer({
    container: player.value,
    video: {
      url: props.videoUrl,
      type: 'auto',
    },
    autoplay: props.autoplay,
    theme: '#b7daff',
  });

  // 初始化时调整一次大小
  handleResize();

  // 使用 ResizeObserver 监听容器变化
  if (typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(playerContainer.value);
  } else {
    // 监听窗口变化
    window.addEventListener('resize', handleResize);
  }
});

// 调整播放器大小
const handleResize = () => {
  if (dplayerInstance && playerContainer.value) {
    const containerWidth = playerContainer.value.clientWidth;
    // 按比例计算高度（16:9）
    const height = (containerWidth * 9) / 16;
    player.value.style.height = `${height}px`;
    dplayerInstance.resize();
  }
};

onBeforeUnmount(() => {
  // 清理监听器
  if (resizeObserver) resizeObserver.disconnect();
  window.removeEventListener('resize', handleResize);
  if (dplayerInstance) dplayerInstance.destroy();
});
</script>

<style scoped>
.dplayer-container {
  width: 100%; /* 容器宽度自适应父元素 */
  max-width: 668px; /*限制最大宽度 */
  margin: 0 auto;
}

.dplayer-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9  */
  position: relative;
}

/* 确保 DPlayer 内部元素填充容器 */
.dplayer-wrapper :deep(.dplayer-video-wrap),
.dplayer-wrapper :deep(.dplayer-video) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>