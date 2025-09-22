<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        <v-icon class="mr-2">mdi-book-open-page-variant</v-icon>
        Book Recommender System
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn 
        variant="text" 
        :to="{ name: 'home' }"
        exact
      >
        <v-icon left>mdi-home</v-icon>
        Home
      </v-btn>
      <v-btn 
        variant="text" 
        :to="{ name: 'about' }"
      >
        <v-icon left>mdi-information</v-icon>
        About
      </v-btn>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>

    <v-footer app color="primary" dark>
      <v-spacer></v-spacer>
      <div class="text-center">
        &copy; {{ new Date().getFullYear() }} - University Book Recommendation System
      </div>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<style scoped>
/* Global styles handled by Vuetify */
</style>
