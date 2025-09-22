import type { Book, RecommendationRequest, RecommendationResponse } from '@/types'

// Mock data for demonstration - in a real app this would call an actual API
const mockBooks: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic Literature',
    description: 'A classic American novel about the Jazz Age and the American Dream.',
    coverImage: 'https://via.placeholder.com/200x300?text=The+Great+Gatsby',
    publicationYear: 1925,
    rating: 4.2,
    pageCount: 180
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    description: 'A gripping tale of racial injustice and childhood innocence.',
    coverImage: 'https://via.placeholder.com/200x300?text=To+Kill+a+Mockingbird',
    publicationYear: 1960,
    rating: 4.3,
    pageCount: 281
  },
  {
    id: '3',
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    description: 'Epic science fiction novel set on the desert planet Arrakis.',
    coverImage: 'https://via.placeholder.com/200x300?text=Dune',
    publicationYear: 1965,
    rating: 4.5,
    pageCount: 688
  },
  {
    id: '4',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    description: 'A witty commentary on society and marriage in Georgian England.',
    coverImage: 'https://via.placeholder.com/200x300?text=Pride+and+Prejudice',
    publicationYear: 1813,
    rating: 4.4,
    pageCount: 432
  },
  {
    id: '5',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    description: 'A hobbit\'s unexpected journey to help reclaim a kingdom.',
    coverImage: 'https://via.placeholder.com/200x300?text=The+Hobbit',
    publicationYear: 1937,
    rating: 4.6,
    pageCount: 310
  },
  {
    id: '6',
    title: 'Agatha Christie\'s Murder on the Orient Express',
    author: 'Agatha Christie',
    genre: 'Mystery',
    description: 'A classic whodunit mystery aboard a luxury train.',
    coverImage: 'https://via.placeholder.com/200x300?text=Murder+on+Orient+Express',
    publicationYear: 1934,
    rating: 4.1,
    pageCount: 256
  },
  {
    id: '7',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    genre: 'Non-Fiction',
    description: 'A brief history of humankind and our species\' development.',
    coverImage: 'https://via.placeholder.com/200x300?text=Sapiens',
    publicationYear: 2011,
    rating: 4.4,
    pageCount: 443
  },
  {
    id: '8',
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    genre: 'Thriller',
    description: 'A gripping thriller involving murder, family secrets, and corruption.',
    coverImage: 'https://via.placeholder.com/200x300?text=Girl+Dragon+Tattoo',
    publicationYear: 2005,
    rating: 4.2,
    pageCount: 465
  }
]

class RecommendationService {
  private baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

  async getRecommendations(request: RecommendationRequest): Promise<RecommendationResponse> {
    try {
      // In a real application, this would make an actual HTTP request
      // For now, we'll simulate an API call with filtering logic
      
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate network delay

      const { preferences, limit = 10 } = request
      let filteredBooks = [...mockBooks]

      // Filter by genres
      if (preferences.favoriteGenres.length > 0) {
        filteredBooks = filteredBooks.filter(book => 
          preferences.favoriteGenres.includes(book.genre)
        )
      }

      // Filter by authors
      if (preferences.favoriteAuthors.length > 0) {
        filteredBooks = filteredBooks.filter(book =>
          preferences.favoriteAuthors.some(author => 
            book.author.toLowerCase().includes(author.toLowerCase())
          )
        )
      }

      // Filter by rating
      if (preferences.preferredRating > 0) {
        filteredBooks = filteredBooks.filter(book => 
          (book.rating || 0) >= preferences.preferredRating
        )
      }

      // Sort by rating descending
      filteredBooks.sort((a, b) => (b.rating || 0) - (a.rating || 0))

      // Limit results
      const resultBooks = filteredBooks.slice(0, limit)

      return {
        books: resultBooks,
        totalCount: filteredBooks.length,
        requestId: Math.random().toString(36).substr(2, 9)
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error)
      throw new Error('Failed to fetch book recommendations')
    }
  }

  async searchBooks(query: string): Promise<Book[]> {
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const filteredBooks = mockBooks.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase()) ||
        book.genre.toLowerCase().includes(query.toLowerCase())
      )

      return filteredBooks
    } catch (error) {
      console.error('Error searching books:', error)
      throw new Error('Failed to search books')
    }
  }
}

export const recommendationService = new RecommendationService()