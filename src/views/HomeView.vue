<template>
  <div class="home-view">
    <h1 class="title">Experiment with Various Recommender Systems for Books</h1>
    <div class="slot-container">
      <SelectAUser v-if="currentStep === 1" @next-step="currentStep++" />
      <SelectARS v-if="currentStep === 2" @next-step="currentStep++" @selected-rs="handleSelectedRS" />
      <TopPopularityRS v-if="currentStep === 3 && selectedRecommenderSystem === '1'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SelectARS from '@/components/SelectARS.vue';
import SelectAUser from '@/components/SelectAUser.vue';
import TopPopularityRS from '@/components/TopPopularityRS.vue';
import { ref } from 'vue';

const currentStep = ref(1);
const selectedRecommenderSystem = ref<string | null>(null);

function handleSelectedRS(rsId: string) {
  console.log("Selected Recommender System ID:", rsId);
  selectedRecommenderSystem.value = rsId.toString();
}
</script>

<style scoped>
.home-view {
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 2rem;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
}

.slot-container {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
</style>
