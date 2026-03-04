<script setup lang="ts">
import { computed, useAttrs } from "vue";
import SlideBackground from "../components/SlideBackground.vue";
import SlideFooter from "../components/SlideFooter.vue";

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

const props = withDefaults(
  defineProps<{
    bgPreset?: "default" | "animate" | "palette";
    /** URL da foto de avatar (ex: https://github.com/LeoZanini.png?size=256) */
    avatar?: string;
    /** Handle do GitHub (ex: LeoZanini) */
    github?: string;
    /** URL completa do perfil — gerada automaticamente a partir de `github` se omitida */
    profileUrl?: string;
  }>(),
  {
    bgPreset: "default",
    avatar: "",
    github: "",
    profileUrl: "",
  },
);

const resolvedProfileUrl = computed(
  () =>
    props.profileUrl ||
    (props.github ? `https://github.com/${props.github}` : ""),
);

const bgOpacity = computed(() =>
  props.bgPreset === "palette" || props.bgPreset === "animate" ? 0.3 : 0.1,
);
</script>

<template>
  <div
    class="slidev-layout end relative flex flex-col items-center justify-center text-center h-full"
  >
    <SlideBackground
      v-bind="attrs"
      :preset="props.bgPreset"
      :x="250"
      :y="100"
      :zoom="1"
      nodeColor="#ffffff"
      :backgroundOpacity="bgOpacity"
    />
    <div class="content-wrapper">
      <slot />

      <!-- Card de perfil: exibido quando as props avatar ou github forem passadas -->
      <div v-if="props.avatar || props.github" class="profile-card">
        <img
          v-if="props.avatar"
          :src="props.avatar"
          alt="Foto de perfil"
          class="profile-avatar"
        />
        <div v-if="props.github" class="profile-info">
          <p class="profile-label">GitHub:</p>
          <a
            :href="resolvedProfileUrl"
            target="_blank"
            rel="noreferrer"
            class="profile-link"
          >
            github.com/{{ props.github }}
          </a>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
</template>

<style scoped>
.end {
  position: relative;
  padding-bottom: 2rem;
}

.content-wrapper {
  position: relative;
  z-index: 10;
}

/* Título principal */
.content-wrapper :deep(h1) {
  margin-bottom: 1.5rem;
}

/* Subtítulo */
.content-wrapper :deep(h2) {
  font-size: 1.875rem;
  font-weight: 500;
  color: #cbd5e1;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

/* Parágrafos */
.content-wrapper :deep(p) {
  font-size: 1.125rem;
  color: rgba(226, 232, 240, 0.7);
}

/* Card de perfil (avatar + github) */
.profile-card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.profile-avatar {
  width: 7rem;
  height: 7rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  object-fit: cover;
}

.profile-info {
  text-align: left;
}

.profile-label {
  margin: 0 0 4px;
  font-size: 1rem;
  color: rgba(226, 232, 240, 0.7);
}

.profile-link {
  font-size: 1.875rem;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 4px;
  color: #f1f5f9;
  transition: color 0.2s ease;
}

.profile-link:hover {
  color: #37fa10;
}
</style>
