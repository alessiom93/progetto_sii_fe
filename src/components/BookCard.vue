<template>
  <div class="book-card">
    <img :src="props.book['Image-URL-S']" alt="Book cover" class="book-image" />
    <div class="book-info">
      <p><strong>Title:</strong> {{ props.book['Book-Title'] }}</p>
      <p><strong>Author:</strong> {{ props.book['Book-Author'] }}</p>
      <p><strong>Year:</strong> {{ props.book['Year-Of-Publication'] }}</p>
      <p><strong>Publisher:</strong> {{ props.book['Publisher'] }}</p>
      <p><strong>ISBN:</strong> {{ props.book['ISBN'] }}</p>
      <p><strong>Rating:</strong> {{ props.book['Book-Rating'] }}</p>
      <p v-if="props.book['predicted_rating']"><strong>Predicted Rating:</strong> {{ props.book['predicted_rating'] }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  book: {
    type: Object,
      required: true
    }
  })
</script>

<style scoped>
.book-card {
  display: flex;
  align-items: flex-start;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background: #fff;
  max-width: 400px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.book-image {
  width: 100px;
  height: auto;
  margin-right: 16px;
  border-radius: 4px;
  object-fit: cover;
}

.book-info p {
  margin: 4px 0;
}
</style>
