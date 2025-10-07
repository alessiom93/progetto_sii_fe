<template>
  <div>
    <h2>Select a Recommender System</h2>
    <div v-if="loading">Loading...</div>
    <div v-else>
<v-radio-group v-model="selectedType">
  <v-radio
    v-for="type in recommenderTypes"
    :key="type.id"
    :label="`${type.name} - ${type.description}`"
    :value="type.id"
  />
</v-radio-group>


      <v-btn
        color="success"
        class="mt-4"
        :disabled="!selectedType"
        @click="nextStep"
      >
        Next Step
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getRecommenderSystemsInfos } from "@/connectors/commonConnector";
import { ref, onMounted } from "vue";

const emit = defineEmits(['next-step', 'selected-rs']);

const recommenderTypes = ref([]);
const selectedType = ref(null);
const loading = ref(false);

async function fetchRecommenderTypes() {
  try {
    const response = await getRecommenderSystemsInfos();
    console.log("Recommender types fetched:", response);
    recommenderTypes.value = response;
  } catch (error) {
    console.error("Failed to fetch recommender types:", error);
  }
}

function nextStep() {
  emit("next-step");
  emit("selected-rs", selectedType.value);
}

onMounted(async () => {
  loading.value = true;
  await fetchRecommenderTypes();
  loading.value = false;

})
</script>

<style scoped>
h2 {
  margin-bottom: 1rem;
}
select {
  margin-right: 1rem;
}
</style>
