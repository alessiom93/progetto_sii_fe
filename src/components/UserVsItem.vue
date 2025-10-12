<template>
  <div class="user-based-cf-rs">
    <h1>User Based vs Item Based Collaborative Filtering Recommender Systems</h1>
    <h2>Results:</h2>
    <div v-if="loading">Loading...</div>
    <div v-else-if="result.item_based.hit_rate !== 0 || result.user_based.hit_rate !== 0">
      <h2>Item Based CF</h2>
      <p>Hit Rate:</p>{{result.item_based.hit_rate}}
      <p>Precision:</p>{{result.item_based.precision}}
      <p>Recall:</p>{{result.item_based.recall}}
      <h2>User Based CF</h2>
      <p>Hit Rate:</p>{{result.user_based.hit_rate}}
      <p>Precision:</p>{{result.user_based.precision}}
      <p>Recall:</p>{{result.user_based.recall}}
      <h2>Chart:</h2>
      <h3>Values converted to percentages:</h3>
      <div style="position: relative;">
      <vue-bar-graph
        :points="[(result.item_based.hit_rate*100).toFixed(2), (result.user_based.hit_rate*100).toFixed(2), 0, (result.item_based.precision*100).toFixed(2), (result.user_based.precision*100).toFixed(2), 0, (result.item_based.recall*100).toFixed(2), (result.user_based.recall*100).toFixed(2)]"
        :show-y-axis="true"
        :show-x-axis="true"
        :show-values="true"
        use-custom-labels="true"
        :labels="['Item Based Hit Rate', 'User Based Hit Rate', '', 'Item Based Precision', 'User Based Precision', '', 'Item Based Recall', 'User Based Recall']"
        :width="450"
        :height="300"
      />
      </div>
        <div style="display: flex; justify-content: space-around; margin-top: 10px; padding: 0 10px; gap: 5px;">
        <span style="font-size: 11px; text-align: center; width: 12.5%;">Item Based Hit Rate</span>
        <span style="font-size: 11px; text-align: center; width: 12.5%;">User Based Hit Rate</span>
        <span style="font-size: 11px; text-align: center; width: 12.5%;"></span>
        <span style="font-size: 11px; text-align: center; width: 12.5%;">Item Based Precision</span>
        <span style="font-size: 11px; text-align: center; width: 12.5%;">User Based Precision</span>
        <span style="font-size: 11px; text-align: center; width: 12.5%;"></span>
        <span style="font-size: 11px; text-align: center; width: 12.5%;">Item Based Recall</span>
        <span style="font-size: 11px; text-align: center; width: 12.5%;">User Based Recall</span>
  </div>
    </div>
    <div v-else>
      Something went wrong.
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getUserVsItemCFRSComparison } from '@/connectors/commonConnector';
import { VueBarGraph } from 'vue-bar-graph';

const result = ref({item_based: {hit_rate: 0, precision: 0, recall: 0}, user_based: {hit_rate: 0, precision: 0, recall: 0}});
const loading = ref(false);


onMounted(async () => {
  loading.value = true;
  result.value = await getUserVsItemCFRSComparison();
  console.log('Metrics response:', result.value);
  loading.value = false;
});


</script>

<style scoped>
.user-based-cf-rs {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 8px;
}
h2 {
  text-align: center;
  margin-bottom: 1rem;
}
.book-item {
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
</style>
