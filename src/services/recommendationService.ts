import type { Book, RecommendationRequest, RecommendationResponse } from '@/types'

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
