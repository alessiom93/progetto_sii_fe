<template>
  <v-container class="pa-4">
    <!-- Loading State -->
    <div v-if="loading" class="text-center pa-8">
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
      <div class="text-h6 mt-4">Finding your perfect books...</div>
    </div>

    <!-- Results -->
    <div v-else-if="books.length > 0">
      <!-- Header -->
      <v-row class="mb-4">
        <v-col>
          <div class="d-flex align-center justify-space-between">
            <div>
              <h2 class="text-h4 mb-2">
                <v-icon class="mr-2">mdi-book-open-variant</v-icon>
                Recommended Books
              </h2>
              <p class="text-subtitle-1 text-medium-emphasis">
                Found {{ totalCount }} books matching your preferences
              </p>
            </div>
            <v-btn
              variant="outlined"
              color="primary"
              @click="$emit('newSearch')"
            >
              <v-icon class="mr-2">mdi-refresh</v-icon>
              New Search
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Books Grid -->
      <v-row>
        <v-col
          v-for="book in books"
          :key="book.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <BookCard :book="book" />
        </v-col>
      </v-row>

      <!-- No more results message -->
      <v-row v-if="books.length < totalCount" class="mt-4">
        <v-col class="text-center">
          <v-alert type="info" variant="outlined">
            Showing {{ books.length }} of {{ totalCount }} results.
            More books available with different preferences.
          </v-alert>
        </v-col>
      </v-row>
    </div>

    <!-- No Results -->
    <div v-else-if="!loading && hasSearched" class="text-center pa-8">
      <v-icon size="100" color="grey-lighten-1">mdi-book-off</v-icon>
      <h3 class="text-h5 mt-4 mb-2">No books found</h3>
      <p class="text-body-1 text-medium-emphasis mb-4">
        We couldn't find any books matching your preferences. 
        Try adjusting your criteria or exploring different genres.
      </p>
      <v-btn
        color="primary"
        variant="outlined"
        @click="$emit('newSearch')"
      >
        <v-icon class="mr-2">mdi-magnify</v-icon>
        Adjust Preferences
      </v-btn>
    </div>

    <!-- Initial State -->
    <div v-else class="text-center pa-8">
      <v-icon size="100" color="grey-lighten-1">mdi-book-search</v-icon>
      <h3 class="text-h5 mt-4 mb-2">Ready to discover great books?</h3>
      <p class="text-body-1 text-medium-emphasis">
        Set your preferences above to get personalized book recommendations.
      </p>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { type Book } from '@/types'
import BookCard from './BookCard.vue'

// Define props
interface Props {
  books: Book[]
  totalCount: number
  loading: boolean
  hasSearched: boolean
}

defineProps<Props>()

// Define emits
defineEmits<{
  newSearch: []
}>()
</script>

<style scoped>
/* Component-specific styles */
</style>