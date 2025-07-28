export interface INews {
  id: number
  author: string
  title: string
  sub_title?: string
  content: string
  created_at: Date
  image_url?: string
}
