<template>
  <v-container class="pa-4">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card elevation="3">
          <v-card-title class="text-h5 primary white--text">
            <v-icon class="mr-2" color="white">mdi-account-cog</v-icon>
            Tell us your reading preferences
          </v-card-title>
          
          <v-card-text class="pa-6">
            <v-form ref="preferencesForm" v-model="formValid" @submit.prevent="handleSubmit">
              <!-- Favorite Genres -->
              <div class="mb-6">
                <v-label class="text-h6 mb-3">Favorite Genres</v-label>
                <v-chip-group 
                  v-model="preferences.favoriteGenres" 
                  column 
                  multiple
                  mandatory
                >
                  <v-chip
                    v-for="genre in availableGenres"
                    :key="genre"
                    :value="genre"
                    variant="outlined"
                    filter
                  >
                    {{ genre }}
                  </v-chip>
                </v-chip-group>
                <v-alert
                  v-if="preferences.favoriteGenres.length === 0"
                  type="info"
                  variant="outlined"
                  class="mt-2"
                >
                  Please select at least one genre to get personalized recommendations.
                </v-alert>
              </div>

              <!-- Favorite Authors -->
              <div class="mb-6">
                <v-label class="text-h6 mb-3">Favorite Authors (Optional)</v-label>
                <v-combobox
                  v-model="preferences.favoriteAuthors"
                  label="Add your favorite authors"
                  placeholder="Type an author name and press Enter"
                  multiple
                  chips
                  closable-chips
                  hide-details="auto"
                >
                  <template v-slot:chip="{ props, item }">
                    <v-chip
                      v-bind="props"
                      :text="item.raw"
                    ></v-chip>
                  </template>
                </v-combobox>
              </div>

              <!-- Preferred Rating -->
              <div class="mb-6">
                <v-label class="text-h6 mb-3">
                  Minimum Rating: {{ preferences.preferredRating.toFixed(1) }} stars
                </v-label>
                <v-slider
                  v-model="preferences.preferredRating"
                  :min="0"
                  :max="5"
                  :step="0.1"
                  thumb-label
                  color="primary"
                >
                  <template v-slot:prepend>
                    <v-icon>mdi-star-outline</v-icon>
                  </template>
                  <template v-slot:append>
                    <v-icon>mdi-star</v-icon>
                  </template>
                </v-slider>
              </div>

              <!-- Reading Level -->
              <div class="mb-6">
                <v-label class="text-h6 mb-3">Reading Level</v-label>
                <v-radio-group 
                  v-model="preferences.readingLevel" 
                  inline
                  hide-details
                >
                  <v-radio 
                    label="Beginner" 
                    value="beginner"
                  ></v-radio>
                  <v-radio 
                    label="Intermediate" 
                    value="intermediate"
                  ></v-radio>
                  <v-radio 
                    label="Advanced" 
                    value="advanced"
                  ></v-radio>
                </v-radio-group>
              </div>

              <!-- Reading Interests -->
              <div class="mb-6">
                <v-label class="text-h6 mb-3">What interests you in books?</v-label>
                <v-chip-group 
                  v-model="preferences.interests" 
                  column 
                  multiple
                >
                  <v-chip
                    v-for="interest in readingInterests"
                    :key="interest"
                    :value="interest"
                    variant="outlined"
                    filter
                  >
                    {{ interest }}
                  </v-chip>
                </v-chip-group>
              </div>
            </v-form>
          </v-card-text>

          <v-card-actions class="pa-6">
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              size="large"
              :disabled="!canSubmit"
              :loading="isLoading"
              @click="handleSubmit"
            >
              <v-icon class="mr-2">mdi-book-search</v-icon>
              Get Recommendations
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { AVAILABLE_GENRES, READING_INTERESTS, type UserPreferences } from '@/types'

// Define emits
const emit = defineEmits<{
  submit: [preferences: UserPreferences]
}>()

// Form state
const formValid = ref(false)
const isLoading = ref(false)
const preferencesForm = ref()

// Available options
const availableGenres = AVAILABLE_GENRES
const readingInterests = READING_INTERESTS

// User preferences data
const preferences = reactive<UserPreferences>({
  favoriteGenres: [],
  favoriteAuthors: [],
  preferredRating: 3.0,
  readingLevel: 'intermediate',
  interests: []
})

// Computed properties
const canSubmit = computed(() => {
  return preferences.favoriteGenres.length > 0 && formValid.value
})

// Methods
const handleSubmit = async () => {
  if (!canSubmit.value) return

  isLoading.value = true
  
  try {
    // Emit the preferences to parent component
    emit('submit', { ...preferences })
  } catch (error) {
    console.error('Error submitting preferences:', error)
  } finally {
    isLoading.value = false
  }
}

const resetForm = () => {
  preferences.favoriteGenres = []
  preferences.favoriteAuthors = []
  preferences.preferredRating = 3.0
  preferences.readingLevel = 'intermediate'
  preferences.interests = []
  
  if (preferencesForm.value) {
    preferencesForm.value.reset()
  }
}

// Expose methods to parent component if needed
defineExpose({
  resetForm
})
</script>

<style scoped>
.v-chip-group {
  gap: 8px;
}

.v-label {
  font-weight: 500;
  color: rgb(var(--v-theme-on-surface));
}
</style>