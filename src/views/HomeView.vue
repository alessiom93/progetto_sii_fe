<script setup lang="ts">
import { ref } from 'vue'
import UserPreferencesForm from '@/components/UserPreferencesForm.vue'
import BookRecommendations from '@/components/BookRecommendations.vue'
import { recommendationService } from '@/services/recommendationService'
import type { UserPreferences, Book } from '@/types'

// Component state
const showPreferences = ref(true)
const isLoading = ref(false)
const hasSearched = ref(false)
const recommendedBooks = ref<Book[]>([])
const totalCount = ref(0)
const errorMessage = ref('')

// Methods
const handlePreferencesSubmit = async (preferences: UserPreferences) => {
  isLoading.value = true
  errorMessage.value = ''
  
  try {
    const response = await recommendationService.getRecommendations({
      preferences,
      limit: 12
    })
    
    recommendedBooks.value = response.books
    totalCount.value = response.totalCount
    hasSearched.value = true
    showPreferences.value = false
    
    // Scroll to results
    await nextTick()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
  } catch (error) {
    console.error('Error getting recommendations:', error)
    errorMessage.value = 'Sorry, we encountered an error while fetching recommendations. Please try again.'
  } finally {
    isLoading.value = false
  }
}

const handleNewSearch = () => {
  showPreferences.value = true
  recommendedBooks.value = []
  totalCount.value = 0
  hasSearched.value = false
  errorMessage.value = ''
}

// Import nextTick for scroll behavior
import { nextTick } from 'vue'
</script>

<template>
  <div class="home-view">
    <!-- Hero Section -->
    <v-container fluid class="hero-section pa-0">
      <v-row no-gutters>
        <v-col>
          <div class="hero-content">
            <v-container class="py-12">
              <v-row justify="center">
                <v-col cols="12" md="8" class="text-center">
                  <h1 class="text-h2 mb-4 hero-title">
                    Discover Your Next Great Read
                  </h1>
                  <p class="text-h6 mb-6 hero-subtitle">
                    Get personalized book recommendations based on your unique reading preferences
                  </p>
                  <div class="hero-icons">
                    <v-icon size="40" class="mx-2">mdi-book-open-page-variant</v-icon>
                    <v-icon size="40" class="mx-2">mdi-heart</v-icon>
                    <v-icon size="40" class="mx-2">mdi-star</v-icon>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Error Message -->
    <v-container v-if="errorMessage">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-alert
            type="error"
            variant="outlined"
            :text="errorMessage"
            class="mb-4"
            dismissible
            @click:close="errorMessage = ''"
          ></v-alert>
        </v-col>
      </v-row>
    </v-container>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Preferences Form -->
      <div v-if="showPreferences">
        <UserPreferencesForm
          @submit="handlePreferencesSubmit"
        />
      </div>

      <!-- Recommendations -->
      <div v-else>
        <BookRecommendations
          :books="recommendedBooks"
          :total-count="totalCount"
          :loading="isLoading"
          :has-searched="hasSearched"
          @new-search="handleNewSearch"
        />
      </div>
    </div>

    <!-- Features Section (only show when showing preferences) -->
    <v-container v-if="showPreferences" class="features-section py-12">
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h4 mb-4">How It Works</h2>
          <p class="text-h6 text-medium-emphasis">
            Three simple steps to discover your perfect books
          </p>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12" md="4" class="text-center">
          <div class="feature-icon mb-4">
            <v-avatar size="80" color="primary">
              <v-icon size="40" color="white">mdi-account-cog</v-icon>
            </v-avatar>
          </div>
          <h3 class="text-h5 mb-2">1. Set Preferences</h3>
          <p class="text-body-1">
            Tell us about your favorite genres, authors, and reading interests
          </p>
        </v-col>
        
        <v-col cols="12" md="4" class="text-center">
          <div class="feature-icon mb-4">
            <v-avatar size="80" color="secondary">
              <v-icon size="40" color="white">mdi-robot</v-icon>
            </v-avatar>
          </div>
          <h3 class="text-h5 mb-2">2. AI Analysis</h3>
          <p class="text-body-1">
            Our recommendation engine analyzes your preferences to find perfect matches
          </p>
        </v-col>
        
        <v-col cols="12" md="4" class="text-center">
          <div class="feature-icon mb-4">
            <v-avatar size="80" color="success">
              <v-icon size="40" color="white">mdi-book-heart</v-icon>
            </v-avatar>
          </div>
          <h3 class="text-h5 mb-2">3. Discover Books</h3>
          <p class="text-body-1">
            Get curated book recommendations tailored just for you
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.home-view {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(25, 118, 210, 0.05) 100%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.hero-content {
  position: relative;
}

.hero-title {
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
}

.hero-subtitle {
  color: rgb(var(--v-theme-on-surface-variant));
  font-weight: 400;
}

.hero-icons {
  opacity: 0.7;
}

.main-content {
  min-height: 60vh;
}

.features-section {
  background: rgba(var(--v-theme-surface-variant), 0.3);
}

.feature-icon {
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem !important;
  }
  
  .hero-subtitle {
    font-size: 1.1rem !important;
  }
}
</style>
