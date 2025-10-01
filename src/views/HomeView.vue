<template>
  <div class="home-view">
    <h1 class="title">Experiment with Various Recommender Systems for Books</h1>
    <div class="slot-container">
      <SelectAUser v-if="currentStep === 1" @next-step="currentStep++" @selected-user="handleSelectedUser" />
      <SelectARS v-if="currentStep === 2" @next-step="currentStep++" @selected-rs="handleSelectedRS" />
      <TopPopularityRS v-if="currentStep === 3 && selectedRecommenderSystem === '1'" />
      <UserBasedCFRS v-if="currentStep === 3 && selectedRecommenderSystem === '2' && selectedUser" :selectedUser="selectedUser" />
      <ItemBasedCFRS v-if="currentStep === 3 && selectedRecommenderSystem === '3' && selectedUser" :selectedUser="selectedUser"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import SelectARS from '@/components/SelectARS.vue';
import SelectAUser from '@/components/SelectAUser.vue';
import TopPopularityRS from '@/components/TopPopularityRS.vue';
import UserBasedCFRS from '@/components/UserBasedCFRS.vue';
import ItemBasedCFRS from '@/components/ItemBasedCFRS.vue';
import { ref } from 'vue';

const currentStep = ref(1);
const selectedUser = ref<string | null>(null);
const selectedRecommenderSystem = ref<string | null>(null);

function handleSelectedUser(userId: string) {
  console.log("Selected User ID:", userId);
  selectedUser.value = userId.toString();
}

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
