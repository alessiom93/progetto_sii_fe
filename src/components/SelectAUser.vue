<template>
  <div class="choose-user-page">
    <h1>Select a User</h1>
    <v-btn color="primary" class="mb-4" :loading="buttonLoading" @click="getFiveRandomUsers">
      Load 5 Random Users
    </v-btn>
    <div class="users-list">
      <div
        v-for="user in users"
        :key="user['User-ID']"
        class="user-card"
        @click="selectUser(user['User-ID'])"
      >
        <h2>{{ user['User-ID'] }}</h2>
        <p><strong>Location:</strong> {{ user['Location'] }}</p>
        <p><strong>Age:</strong> {{ user['Age'] }}</p>
        <h3>Top 5 Favourite Books:</h3>
        <ul>
          <li v-for="book in user['Top-Five-Rated-Books']" :key="book['ISBN']" class="book-item">
            <BookCard :book="book" />
          </li>
        </ul>
      </div>
    </div>
    <div v-if="selectedUserId" class="selected-user">
      <h2>You selected: {{ selectedUserId }}</h2>
      <!-- You can add more actions here -->
    </div>
    <v-btn
      color="success"
      class="mt-4"
      :disabled="!selectedUserId"
      @click="nextStep"
    >
      Next Step
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { getFiveRandomUsersWithBooks } from "@/connectors/commonConnector";
import { ref } from "vue";
import BookCard from "./BookCard.vue";

const emit = defineEmits(['next-step', 'selected-user']);

const selectedUserId = ref('null');
const users = ref([]);
const buttonLoading = ref(false);

function selectUser(userId: string) {
  selectedUserId.value = userId;
}

async function getFiveRandomUsers() {
  buttonLoading.value = true;
  users.value = await getFiveRandomUsersWithBooks();
  console.log(users.value);
  buttonLoading.value = false;
}

function nextStep() {
  // Send event to parent component to go to next step
  emit("next-step");
  emit("selected-user", selectedUserId.value);
}
</script>

<style scoped>
.choose-user-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}
.users-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
.user-card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  width: 350px;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.user-card:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.book-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
}
.book-image {
  width: 60px;
  height: 90px;
  object-fit: cover;
  margin-right: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.book-info p {
  margin: 0.2rem 0;
}
.selected-user {
  margin-top: 2rem;
  padding: 1rem;
  background: #e6f7ff;
  border-radius: 8px;
  border: 1px solid #91d5ff;
}
</style>
