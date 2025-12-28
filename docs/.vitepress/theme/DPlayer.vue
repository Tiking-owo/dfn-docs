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

  // 监听视频元数据加载完成
  dplayerInstance.video.addEventListener('loadedmetadata', () => {
    const video = dplayerInstance.video;
    const videoRatio = video.videoWidth / video.videoHeight;
    updatePlayerSize(videoRatio);
  });

  // 初始化调整
  handleResize();

  // 监听容器变化
  if (typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(playerContainer.value);
  } else {
    window.addEventListener('resize', handleResize);
  }
});

// 更新播放器尺寸（根据视频比例）
const updatePlayerSize = (videoRatio) => {
  if (!playerContainer.value) return;

  const isVertical = videoRatio < 1; // 判断是否为竖屏
  const containerWidth = playerContainer.value.clientWidth;
  const windowHeight = window.innerHeight * 0.6; // 可视区域高度的60%（避免占用过多空间）

  if (isVertical) {
    // 竖屏视频：固定高度，宽度自适应
    player.value.style.width = 'auto';
    player.value.style.height = `${Math.min(containerWidth * 0.9, windowHeight)}px`; // 限制最大高度
    player.value.style.maxWidth = '100%';
    player.value.style.margin = '0 auto'; // 居中
  } else {
    // 横屏视频：固定宽度，高度按比例计算
    const height = (containerWidth * 9) / 16; // 默认16:9
    player.value.style.width = '100%';
    player.value.style.height = `${height}px`;
  }

  // 触发DPlayer内部重绘
  if (dplayerInstance) dplayerInstance.resize();
};

// 响应窗口变化
const handleResize = () => {
  if (dplayerInstance && dplayerInstance.video.videoWidth) {
    const videoRatio = dplayerInstance.video.videoWidth / dplayerInstance.video.videoHeight;
    updatePlayerSize(videoRatio);
  }
};

onBeforeUnmount(() => {
  if (resizeObserver) resizeObserver.disconnect();
  window.removeEventListener('resize', handleResize);
  if (dplayerInstance) dplayerInstance.destroy();
});
</script>

<style scoped>
.dplayer-container {
  width: 100%;
  max-width: 668px; /* 横屏视频的最大宽度 */
  margin: 0 auto;
}

.dplayer-wrapper {
  width: 100%;
  height: 0;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease; /* 平滑过渡 */
}

/* 内部元素填充容器 */
.dplayer-wrapper :deep(.dplayer-video-wrap),
.dplayer-wrapper :deep(.dplayer-video) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* 保持比例，完整显示视频 */
}
</style>