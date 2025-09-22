<template>
  <v-card elevation="2" class="book-card h-100" hover>
    <!-- Book Cover -->
    <div class="book-cover-container">
      <v-img
        :src="book.coverImage"
        :alt="`Cover of ${book.title}`"
        aspect-ratio="2/3"
        cover
        class="book-cover"
      >
        <template v-slot:error>
          <div class="d-flex align-center justify-center h-100 bg-grey-lighten-3">
            <v-icon size="48" color="grey">mdi-book</v-icon>
          </div>
        </template>
        
        <!-- Rating Badge -->
        <v-chip
          v-if="book.rating"
          class="rating-chip"
          color="primary"
          size="small"
        >
          <v-icon start size="16">mdi-star</v-icon>
          {{ book.rating.toFixed(1) }}
        </v-chip>
      </v-img>
    </div>

    <!-- Book Details -->
    <v-card-title class="text-h6 pa-3 pb-1">
      {{ book.title }}
    </v-card-title>
    
    <v-card-subtitle class="pa-3 pt-0 pb-1">
      by {{ book.author }}
    </v-card-subtitle>

    <v-card-text class="pa-3 pt-1">
      <!-- Genre -->
      <v-chip
        size="small"
        variant="outlined"
        color="secondary"
        class="mb-2"
      >
        {{ book.genre }}
      </v-chip>

      <!-- Description -->
      <p 
        v-if="book.description" 
        class="text-body-2 text-medium-emphasis book-description"
      >
        {{ truncatedDescription }}
      </p>

      <!-- Book Info -->
      <div class="book-info mt-2">
        <div v-if="book.publicationYear" class="text-caption text-medium-emphasis">
          <v-icon size="14" class="mr-1">mdi-calendar</v-icon>
          {{ book.publicationYear }}
        </div>
        <div v-if="book.pageCount" class="text-caption text-medium-emphasis">
          <v-icon size="14" class="mr-1">mdi-book-open</v-icon>
          {{ book.pageCount }} pages
        </div>
      </div>
    </v-card-text>

    <!-- Actions -->
    <v-card-actions class="pa-3 pt-0">
      <v-spacer></v-spacer>
      <v-btn
        variant="outlined"
        size="small"
        color="primary"
        @click="showDetails"
      >
        <v-icon class="mr-1" size="16">mdi-information</v-icon>
        Details
      </v-btn>
    </v-card-actions>

    <!-- Details Dialog -->
    <v-dialog v-model="detailsDialog" max-width="600">
      <v-card>
        <v-card-title class="d-flex align-center">
          <v-icon class="mr-2">mdi-book</v-icon>
          Book Details
          <v-spacer></v-spacer>
          <v-btn
            variant="text"
            icon="mdi-close"
            @click="detailsDialog = false"
          ></v-btn>
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col cols="4">
              <v-img
                :src="book.coverImage"
                :alt="`Cover of ${book.title}`"
                aspect-ratio="2/3"
                cover
              >
                <template v-slot:error>
                  <div class="d-flex align-center justify-center h-100 bg-grey-lighten-3">
                    <v-icon size="48" color="grey">mdi-book</v-icon>
                  </div>
                </template>
              </v-img>
            </v-col>
            <v-col cols="8">
              <h3 class="text-h5 mb-2">{{ book.title }}</h3>
              <p class="text-h6 text-medium-emphasis mb-3">by {{ book.author }}</p>
              
              <div class="mb-3">
                <v-chip color="secondary" variant="outlined" class="mr-2">
                  {{ book.genre }}
                </v-chip>
                <v-chip v-if="book.rating" color="primary" variant="outlined">
                  <v-icon start size="16">mdi-star</v-icon>
                  {{ book.rating.toFixed(1) }}
                </v-chip>
              </div>

              <div class="book-details">
                <div v-if="book.publicationYear" class="mb-1">
                  <strong>Published:</strong> {{ book.publicationYear }}
                </div>
                <div v-if="book.pageCount" class="mb-1">
                  <strong>Pages:</strong> {{ book.pageCount }}
                </div>
                <div v-if="book.isbn" class="mb-1">
                  <strong>ISBN:</strong> {{ book.isbn }}
                </div>
              </div>
            </v-col>
          </v-row>

          <div v-if="book.description" class="mt-4">
            <h4 class="text-h6 mb-2">Description</h4>
            <p class="text-body-1">{{ book.description }}</p>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="detailsDialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { type Book } from '@/types'

// Define props
interface Props {
  book: Book
}

const props = defineProps<Props>()

// Component state
const detailsDialog = ref(false)

// Computed properties
const truncatedDescription = computed(() => {
  if (!props.book.description) return ''
  return props.book.description.length > 120 
    ? props.book.description.substring(0, 120) + '...'
    : props.book.description
})

// Methods
const showDetails = () => {
  detailsDialog.value = true
}
</script>

<style scoped>
.book-card {
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;
}

.book-card:hover {
  transform: translateY(-2px);
}

.book-cover-container {
  position: relative;
}

.book-cover {
  border-radius: 4px 4px 0 0;
}

.rating-chip {
  position: absolute;
  top: 8px;
  right: 8px;
}

.book-description {
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.book-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.book-details {
  font-size: 0.875rem;
}
</style>