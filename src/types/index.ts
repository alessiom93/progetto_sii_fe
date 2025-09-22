export interface Book {
  id: string
  title: string
  author: string
  genre: string
  description?: string
  coverImage?: string
  publicationYear?: number
  isbn?: string
  rating?: number
  pageCount?: number
}

export interface UserPreferences {
  favoriteGenres: string[]
  favoriteAuthors: string[]
  preferredRating: number
  readingLevel: 'beginner' | 'intermediate' | 'advanced'
  interests: string[]
}

export interface RecommendationRequest {
  preferences: UserPreferences
  limit?: number
}

export interface RecommendationResponse {
  books: Book[]
  totalCount: number
  requestId: string
}

export const AVAILABLE_GENRES = [
  'Fiction',
  'Non-Fiction', 
  'Mystery',
  'Romance',
  'Science Fiction',
  'Fantasy',
  'Thriller',
  'Biography',
  'History',
  'Science',
  'Self-Help',
  'Business',
  'Philosophy',
  'Poetry',
  'Drama',
  'Horror',
  'Young Adult',
  'Children',
  'Classic Literature',
  'Contemporary',
  'Adventure',
  'Crime',
  'Memoir',
  'Travel',
  'Health & Fitness'
] as const

export type Genre = typeof AVAILABLE_GENRES[number]

export const READING_INTERESTS = [
  'Character Development',
  'Plot-driven',
  'Educational',
  'Entertainment',
  'Emotional Journey',
  'World Building',
  'Historical Context',
  'Scientific Accuracy',
  'Philosophical Themes',
  'Social Issues',
  'Personal Growth',
  'Adventure & Action',
  'Humor',
  'Psychological Depth',
  'Cultural Diversity'
] as const

export type Interest = typeof READING_INTERESTS[number]