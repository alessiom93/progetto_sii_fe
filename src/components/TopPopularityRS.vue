<template>
  <div class="top-popularity-rs">
    <h1>Top Popularity Recommender System</h1>
    <h2>Top 10 Recommended Books</h2>
    <div v-if="loading">Loading...</div>
    <div v-else>
    <ul v-if="books.length">
      <div v-for="book in books" :key="book.ISBN" class="book-item">
        <BookCard :book="book" />
      </div>
    </ul>
    <div v-else>
      No recommendations available.
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BookCard from './BookCard.vue';
import { getTopPopularityRSRecommendations } from '@/connectors/commonConnector';
import type { BookWithRating } from '@/types/bookType';

const books = ref<BookWithRating[]>([]);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  books.value = await getTopPopularityRSRecommendations('user-id');
  console.log('Book response:', books.value);
  loading.value = false;
});


</script>

<style scoped>
.top-popularity-rs {
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
