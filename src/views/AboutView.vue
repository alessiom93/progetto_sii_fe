<template>
  <v-container class="about-page py-8">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <!-- Header -->
        <div class="text-center mb-8">
          <v-icon size="80" color="primary" class="mb-4">mdi-information</v-icon>
          <h1 class="text-h3 mb-4">About This Project</h1>
          <p class="text-h6 text-medium-emphasis">
            University Book Recommendation System
          </p>
        </div>

        <!-- Project Description -->
        <v-card elevation="2" class="mb-6">
          <v-card-title class="text-h5 primary white--text">
            <v-icon class="mr-2" color="white">mdi-school</v-icon>
            Project Overview
          </v-card-title>
          <v-card-text class="pa-6">
            <p class="text-body-1 mb-4">
              This Book Recommendation System is a university project designed to demonstrate 
              modern web development techniques and recommendation algorithms. The system 
              helps users discover new books based on their personal reading preferences.
            </p>
            <p class="text-body-1">
              The frontend is built with Vue.js 3 and Vuetify, providing a responsive and 
              intuitive user interface for exploring personalized book recommendations.
            </p>
          </v-card-text>
        </v-card>

        <!-- Technology Stack -->
        <v-card elevation="2" class="mb-6">
          <v-card-title class="text-h5 secondary white--text">
            <v-icon class="mr-2" color="white">mdi-code-tags</v-icon>
            Technology Stack
          </v-card-title>
          <v-card-text class="pa-6">
            <v-row>
              <v-col cols="12" sm="6">
                <div class="tech-category mb-4">
                  <h4 class="text-h6 mb-2">Frontend</h4>
                  <v-chip class="ma-1" variant="outlined">Vue.js 3</v-chip>
                  <v-chip class="ma-1" variant="outlined">TypeScript</v-chip>
                  <v-chip class="ma-1" variant="outlined">Vuetify</v-chip>
                  <v-chip class="ma-1" variant="outlined">Vite</v-chip>
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="tech-category mb-4">
                  <h4 class="text-h6 mb-2">Tools & Libraries</h4>
                  <v-chip class="ma-1" variant="outlined">Vue Router</v-chip>
                  <v-chip class="ma-1" variant="outlined">Pinia</v-chip>
                  <v-chip class="ma-1" variant="outlined">ESLint</v-chip>
                  <v-chip class="ma-1" variant="outlined">Prettier</v-chip>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- Features -->
        <v-card elevation="2" class="mb-6">
          <v-card-title class="text-h5 success white--text">
            <v-icon class="mr-2" color="white">mdi-feature-search</v-icon>
            Key Features
          </v-card-title>
          <v-card-text class="pa-6">
            <v-list class="bg-transparent">
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="success">mdi-check-circle</v-icon>
                </template>
                <v-list-item-title>Personalized book recommendations</v-list-item-title>
                <v-list-item-subtitle>Based on genre, author, and reading preferences</v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="success">mdi-check-circle</v-icon>
                </template>
                <v-list-item-title>Responsive design</v-list-item-title>
                <v-list-item-subtitle>Optimized for desktop, tablet, and mobile devices</v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="success">mdi-check-circle</v-icon>
                </template>
                <v-list-item-title>Interactive user interface</v-list-item-title>
                <v-list-item-subtitle>Intuitive forms and beautiful book displays</v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="success">mdi-check-circle</v-icon>
                </template>
                <v-list-item-title>Modern web technologies</v-list-item-title>
                <v-list-item-subtitle>Built with the latest Vue.js 3 and TypeScript</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>

        <!-- How It Works -->
        <v-card elevation="2" class="mb-6">
          <v-card-title class="text-h5 info white--text">
            <v-icon class="mr-2" color="white">mdi-cog</v-icon>
            How It Works
          </v-card-title>
          <v-card-text class="pa-6">
            <!-- How it works steps -->
            <div class="workflow-steps">
              <div class="step mb-4">
                <div class="d-flex align-center mb-2">
                  <v-avatar size="32" color="primary" class="mr-3">
                    <span class="text-white">1</span>
                  </v-avatar>
                  <h4 class="text-h6">User Input</h4>
                </div>
                <p class="text-body-2 ml-11">
                  Users provide their reading preferences including favorite genres, 
                  authors, desired rating, reading level, and interests.
                </p>
              </div>

              <div class="step mb-4">
                <div class="d-flex align-center mb-2">
                  <v-avatar size="32" color="primary" class="mr-3">
                    <span class="text-white">2</span>
                  </v-avatar>
                  <h4 class="text-h6">Processing</h4>
                </div>
                <p class="text-body-2 ml-11">
                  The system processes the preferences and matches them against 
                  a curated database of books with detailed metadata.
                </p>
              </div>

              <div class="step mb-4">
                <div class="d-flex align-center mb-2">
                  <v-avatar size="32" color="primary" class="mr-3">
                    <span class="text-white">3</span>
                  </v-avatar>
                  <h4 class="text-h6">Recommendations</h4>
                </div>
                <p class="text-body-2 ml-11">
                  Relevant books are returned with detailed information including 
                  ratings, descriptions, and publication details.
                </p>
              </div>
            </div>
          </v-card-text>
        </v-card>

        <!-- Development Info -->
        <v-card elevation="2">
          <v-card-title class="text-h5 warning white--text">
            <v-icon class="mr-2" color="white">mdi-dev-to</v-icon>
            Development Notes
          </v-card-title>
          <v-card-text class="pa-6">
            <p class="text-body-1 mb-3">
              This project demonstrates best practices in modern frontend development:
            </p>
            <ul class="text-body-2">
              <li>Component-based architecture with Vue.js 3 Composition API</li>
              <li>Type safety with TypeScript</li>
              <li>Responsive UI design with Vuetify Material Design components</li>
              <li>State management with Pinia</li>
              <li>Modern build tooling with Vite</li>
              <li>Code quality tools (ESLint, Prettier)</li>
            </ul>
            <v-alert
              type="info"
              variant="outlined"
              class="mt-4"
            >
              <strong>Note:</strong> This is a demonstration project. In a production environment, 
              the recommendation system would integrate with a real backend API and machine learning models.
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// No reactive data needed for this static page
</script>

<style scoped>
.about-page {
  min-height: 100vh;
}

.tech-category {
  min-height: 100px;
}

.v-card {
  margin-bottom: 1rem;
}

.v-list-item {
  padding: 8px 0;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}
</style>
