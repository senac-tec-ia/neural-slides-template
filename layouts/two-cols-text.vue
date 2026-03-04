<script setup lang="ts">
import { computed, nextTick, onMounted, ref, useAttrs } from "vue";
import SlideBackground from "../components/SlideBackground.vue";
import SlideFooter from "../components/SlideFooter.vue";

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

const props = withDefaults(
  defineProps<{
    bgPreset?: "default" | "animate" | "palette";
  }>(),
  {
    bgPreset: "default",
  },
);

const bgOpacity = computed(() =>
  props.bgPreset === "palette" || props.bgPreset === "animate" ? 0.3 : 0.2,
);

const headerRef = ref<HTMLElement | null>(null);
const leftRef = ref<HTMLElement | null>(null);

const moveHeader = () => {
  if (!headerRef.value || !leftRef.value) return;

  const left = leftRef.value;

  // Move o primeiro H1 (título) para o header
  const title = left.querySelector("h1");
  if (title) headerRef.value.appendChild(title);
};

onMounted(async () => {
  await nextTick();
  moveHeader();
});
</script>

<template>
  <div
    class="slidev-layout two-cols-text h-full flex justify-center items-center relative"
  >
    <SlideBackground
      v-bind="attrs"
      :preset="props.bgPreset"
      :x="400"
      :y="400"
      :zoom="2"
      nodeColor="#121212"
      nodeStrokeColor="#37fa10"
      :backgroundOpacity="bgOpacity"
    />

    <div
      class="bg-black/10 rounded-[14px] border border-white backdrop-blur-md relative z-10 h-full p-8 max-w-4xl max-h-md"
    >
      <div ref="headerRef" class="two-cols-text-header"></div>

      <div class="two-cols-text-grid justify-center flex">
        <div ref="leftRef" class="col-left content-wrapper">
          <slot />
        </div>

        <div class="col-right content-wrapper">
          <slot name="right" />
        </div>
      </div>
    </div>

    <SlideFooter />
  </div>
</template>

<style scoped>
.two-cols-text {
  position: relative;
  padding-bottom: 2rem;
}

.two-cols-text-header {
  position: relative;
  z-index: 10;
  margin-bottom: 1.25rem;
}

.two-cols-text-grid {
  position: relative;
  z-index: 10;
  height: calc(100% - 3rem);
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 2rem;
}

.content-wrapper {
  min-width: 0;
}

/* Header (título/subtítulo compartilhados) */
.two-cols-text-header :deep(h1) {
  margin: 0 0 0.5rem;
}

.two-cols-text-header :deep(p),
.two-cols-text-header :deep(h2) {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
  color: #cbd5e1;
}

.two-cols-text-header :deep(strong) {
  font-weight: 800;
  color: #f1f5f9;
}

/* Colunas */
.content-wrapper :deep(h2) {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 8px;
  margin-bottom: 8px;
  color: #cbd5e1;
}

.content-wrapper :deep(p) {
  font-size: 1rem;
  line-height: 1.5;
  color: #e2e8f0;
}

.content-wrapper :deep(ul),
.content-wrapper :deep(ol) {
  margin-top: 8px;
}

.content-wrapper :deep(li) {
  font-size: 1rem;
  margin-top: 8px;
  color: #e2e8f0;
}

.vs-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: #94a3b8;
}
</style>
