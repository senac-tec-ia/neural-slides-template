<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    icons?: Array<{ src: string; alt: string }>;
    size?: string;
    question?: string;
    subtitle?: string;
  }>(),
  {
    icons: () => [
      { src: "/icons/instagram.svg", alt: "Instagram" },
      { src: "/icons/tiktok.svg", alt: "TikTok" },
      { src: "/icons/yt.svg", alt: "YouTube" },
      { src: "/icons/spotify.svg", alt: "Spotify" },
    ],
    size: "96px",
  },
);
</script>

<template>
  <div class="flex flex-col items-center gap-10">
    <div class="text-center"></div>

    <div class="flex items-center justify-center gap-10">
      <div
        v-for="(icon, idx) in props.icons"
        :key="icon.src"
        v-click="idx + 1"
        class="rounded-2xl border border-white/20 bg-black/50 p-6 backdrop-blur"
      >
        <img
          :src="icon.src"
          :alt="icon.alt"
          class="block"
          :style="{ width: props.size, height: props.size }"
          draggable="false"
        />
      </div>
    </div>
  </div>
</template>
