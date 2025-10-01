export interface Book {
  ISBN: string
  "Book-Title": string
  "Book-Author": string
  "Year-Of-Publication": string
  Publisher: string
  "Image-URL-S"?: string
  "Image-URL-M"?: string
  "Image-URL-L"?: string
}

export interface BookWithRating extends Book {
  "Book-Rating": string
  "predicted_rating"?: number
}
