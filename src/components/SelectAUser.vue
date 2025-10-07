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
<<<<<<< HEAD
        @click="selectUser(user['User-ID'].toString())"
=======
        @click="selectUser(user['User-ID'])"
>>>>>>> 2afbc077706a600c093148b705a0b9538988094f
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
<<<<<<< HEAD
const users = ref(
  [
    {
        "Age": 32,
        "Location": "wahiawa, hawaii, usa",
        "Top-Five-Rated-Books": [
            {
                "Book-Author": "Antonia Barber",
                "Book-Rating": 10,
                "Book-Title": "Catkin",
                "ISBN": "156402976X",
                "Image-URL-L": "http://images.amazon.com/images/P/156402976X.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/156402976X.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/156402976X.01.THUMBZZZ.jpg",
                "Publisher": "Candlewick Press (MA)",
                "Year-Of-Publication": 1996
            },
            {
                "Book-Author": "Michael Moore",
                "Book-Rating": 10,
                "Book-Title": "Dude, Where's My Country?",
                "ISBN": "0446532231",
                "Image-URL-L": "http://images.amazon.com/images/P/0446532231.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0446532231.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0446532231.01.THUMBZZZ.jpg",
                "Publisher": "Warner Books",
                "Year-Of-Publication": 2003
            },
            {
                "Book-Author": "Neil Gaiman",
                "Book-Rating": 10,
                "Book-Title": "Good Omens",
                "ISBN": "0441003257",
                "Image-URL-L": "http://images.amazon.com/images/P/0441003257.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0441003257.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0441003257.01.THUMBZZZ.jpg",
                "Publisher": "Ace Books",
                "Year-Of-Publication": 1996
            },
            {
                "Book-Author": "Madeleine L'Engle",
                "Book-Rating": 10,
                "Book-Title": "A Wrinkle in Time",
                "ISBN": "0440998050",
                "Image-URL-L": "http://images.amazon.com/images/P/0440998050.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0440998050.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0440998050.01.THUMBZZZ.jpg",
                "Publisher": "Laure Leaf",
                "Year-Of-Publication": 1976
            },
            {
                "Book-Author": "Steve Martin",
                "Book-Rating": 10,
                "Book-Title": "The Pleasure of My Company: A Novel",
                "ISBN": "0786869216",
                "Image-URL-L": "http://images.amazon.com/images/P/0786869216.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0786869216.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0786869216.01.THUMBZZZ.jpg",
                "Publisher": "Hyperion",
                "Year-Of-Publication": 2003
            }
        ],
        "User-ID": 6251
    },
    {
        "Age": 22,
        "Location": "kuala lumpur, federal territory, malaysia",
        "Top-Five-Rated-Books": [
            {
                "Book-Author": "Carl Sagan",
                "Book-Rating": 10,
                "Book-Title": "The Demon-Haunted World: Science As a Candle in the Dark",
                "ISBN": "0345409469",
                "Image-URL-L": "http://images.amazon.com/images/P/0345409469.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0345409469.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0345409469.01.THUMBZZZ.jpg",
                "Publisher": "Ballantine Books",
                "Year-Of-Publication": 1997
            },
            {
                "Book-Author": "William Gerald Golding",
                "Book-Rating": 9,
                "Book-Title": "Lord of the Flies",
                "ISBN": "0399501487",
                "Image-URL-L": "http://images.amazon.com/images/P/0399501487.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0399501487.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0399501487.01.THUMBZZZ.jpg",
                "Publisher": "Perigee Trade",
                "Year-Of-Publication": 1959
            },
            {
                "Book-Author": "Neil Gaiman",
                "Book-Rating": 9,
                "Book-Title": "Coraline",
                "ISBN": "0380807343",
                "Image-URL-L": "http://images.amazon.com/images/P/0380807343.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0380807343.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0380807343.01.THUMBZZZ.jpg",
                "Publisher": "HarperTrophy",
                "Year-Of-Publication": 2003
            },
            {
                "Book-Author": "Fannie Flagg",
                "Book-Rating": 9,
                "Book-Title": "Fried Green Tomatoes at the Whistle Stop Cafe",
                "ISBN": "0804115613",
                "Image-URL-L": "http://images.amazon.com/images/P/0804115613.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0804115613.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0804115613.01.THUMBZZZ.jpg",
                "Publisher": "Ballantine Books",
                "Year-Of-Publication": 2000
            },
            {
                "Book-Author": "Margaret Mitchell",
                "Book-Rating": 9,
                "Book-Title": "Gone with the Wind",
                "ISBN": "0446365386",
                "Image-URL-L": "http://images.amazon.com/images/P/0446365386.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0446365386.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0446365386.01.THUMBZZZ.jpg",
                "Publisher": "Warner Books",
                "Year-Of-Publication": 1993
            }
        ],
        "User-ID": 105028
    },
    {
        "Age": 46,
        "Location": "kirkland, washington, usa",
        "Top-Five-Rated-Books": [
            {
                "Book-Author": "Harper Lee",
                "Book-Rating": 10,
                "Book-Title": "To Kill a Mockingbird",
                "ISBN": "0446310786",
                "Image-URL-L": "http://images.amazon.com/images/P/0446310786.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0446310786.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0446310786.01.THUMBZZZ.jpg",
                "Publisher": "Little Brown &amp; Company",
                "Year-Of-Publication": 1988
            },
            {
                "Book-Author": "Larry McMurtry",
                "Book-Rating": 10,
                "Book-Title": "The Last Picture Show",
                "ISBN": "0671753819",
                "Image-URL-L": "http://images.amazon.com/images/P/0671753819.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0671753819.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0671753819.01.THUMBZZZ.jpg",
                "Publisher": "Pocket",
                "Year-Of-Publication": 1992
            },
            {
                "Book-Author": "John Irving",
                "Book-Rating": 10,
                "Book-Title": "A Prayer for Owen Meany",
                "ISBN": "0345361792",
                "Image-URL-L": "http://images.amazon.com/images/P/0345361792.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0345361792.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0345361792.01.THUMBZZZ.jpg",
                "Publisher": "Ballantine Books",
                "Year-Of-Publication": 1990
            },
            {
                "Book-Author": "Jane Austen",
                "Book-Rating": 10,
                "Book-Title": "Pride and Prejudice",
                "ISBN": "0553213105",
                "Image-URL-L": "http://images.amazon.com/images/P/0553213105.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0553213105.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0553213105.01.THUMBZZZ.jpg",
                "Publisher": "Bantam",
                "Year-Of-Publication": 1981
            },
            {
                "Book-Author": "Victor Hugo",
                "Book-Rating": 10,
                "Book-Title": "Les Miserables a New Unabridged Translation (Signet Classics)",
                "ISBN": "0451525264",
                "Image-URL-L": "http://images.amazon.com/images/P/0451525264.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0451525264.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0451525264.01.THUMBZZZ.jpg",
                "Publisher": "Signet Book",
                "Year-Of-Publication": 1987
            }
        ],
        "User-ID": 110934
    },
    {
        "Age": 30,
        "Location": "vancouver, washington, usa",
        "Top-Five-Rated-Books": [
            {
                "Book-Author": "Jane Austen",
                "Book-Rating": 10,
                "Book-Title": "Sense and Sensibility",
                "ISBN": "0451187903",
                "Image-URL-L": "http://images.amazon.com/images/P/0451187903.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0451187903.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0451187903.01.THUMBZZZ.jpg",
                "Publisher": "Signet Book",
                "Year-Of-Publication": 1995
            },
            {
                "Book-Author": "J.R.R. TOLKIEN",
                "Book-Rating": 10,
                "Book-Title": "The Fellowship of the Ring (The Lord of the Rings, Part 1)",
                "ISBN": "0345339703",
                "Image-URL-L": "http://images.amazon.com/images/P/0345339703.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0345339703.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0345339703.01.THUMBZZZ.jpg",
                "Publisher": "Del Rey",
                "Year-Of-Publication": 1986
            },
            {
                "Book-Author": "L.M. MONTGOMERY",
                "Book-Rating": 10,
                "Book-Title": "Anne of Avonlea (Anne of Green Gables Novels (Paperback))",
                "ISBN": "0553213148",
                "Image-URL-L": "http://images.amazon.com/images/P/0553213148.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0553213148.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0553213148.01.THUMBZZZ.jpg",
                "Publisher": "Bantam Classics",
                "Year-Of-Publication": 1984
            },
            {
                "Book-Author": "Jane Austen",
                "Book-Rating": 9,
                "Book-Title": "Emma (Signet Classics (Paperback))",
                "ISBN": "0451526279",
                "Image-URL-L": "http://images.amazon.com/images/P/0451526279.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0451526279.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0451526279.01.THUMBZZZ.jpg",
                "Publisher": "Signet Classics",
                "Year-Of-Publication": 1996
            },
            {
                "Book-Author": "Charlotte Bronte",
                "Book-Rating": 9,
                "Book-Title": "Jane Eyre (Bantam Classics)",
                "ISBN": "0553211404",
                "Image-URL-L": "http://images.amazon.com/images/P/0553211404.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0553211404.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0553211404.01.THUMBZZZ.jpg",
                "Publisher": "Bantam",
                "Year-Of-Publication": 1983
            }
        ],
        "User-ID": 150896
    },
    {
        "Age": 28,
        "Location": "brooklyn, new york, usa",
        "Top-Five-Rated-Books": [
            {
                "Book-Author": "Jack Canfield",
                "Book-Rating": 9,
                "Book-Title": "Chicken Soup for the Pet Lover's Soul (Chicken Soup for the Soul (Hardcover Health Communications))",
                "ISBN": "1558745726",
                "Image-URL-L": "http://images.amazon.com/images/P/1558745726.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/1558745726.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/1558745726.01.THUMBZZZ.jpg",
                "Publisher": "Health Communications",
                "Year-Of-Publication": 1998
            },
            {
                "Book-Author": "Charlotte Hughes",
                "Book-Rating": 9,
                "Book-Title": "Hot Shot",
                "ISBN": "1551669412",
                "Image-URL-L": "http://images.amazon.com/images/P/1551669412.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/1551669412.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/1551669412.01.THUMBZZZ.jpg",
                "Publisher": "Mira",
                "Year-Of-Publication": 2002
            },
            {
                "Book-Author": "Julie Garwood",
                "Book-Rating": 9,
                "Book-Title": "Heartbreaker",
                "ISBN": "0671034006",
                "Image-URL-L": "http://images.amazon.com/images/P/0671034006.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0671034006.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0671034006.01.THUMBZZZ.jpg",
                "Publisher": "Pocket",
                "Year-Of-Publication": 2001
            },
            {
                "Book-Author": "Amanda Stevens",
                "Book-Rating": 9,
                "Book-Title": "Forgiven (Eden'S Children) (Harlequin Intrigue, No. 630)",
                "ISBN": "0373226306",
                "Image-URL-L": "http://images.amazon.com/images/P/0373226306.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/0373226306.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/0373226306.01.THUMBZZZ.jpg",
                "Publisher": "Harlequin",
                "Year-Of-Publication": 2001
            },
            {
                "Book-Author": "Robert Morgan",
                "Book-Rating": 8,
                "Book-Title": "Gap Creek: A Novel",
                "ISBN": "1565122968",
                "Image-URL-L": "http://images.amazon.com/images/P/1565122968.01.LZZZZZZZ.jpg",
                "Image-URL-M": "http://images.amazon.com/images/P/1565122968.01.MZZZZZZZ.jpg",
                "Image-URL-S": "http://images.amazon.com/images/P/1565122968.01.THUMBZZZ.jpg",
                "Publisher": "Algonquin Books of Chapel Hill",
                "Year-Of-Publication": 2000
            }
        ],
        "User-ID": 187517
    }
]
);
=======
const users = ref([]);
>>>>>>> 2afbc077706a600c093148b705a0b9538988094f
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
