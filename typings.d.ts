type Category =
  | "general"
  | "business"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "technology";

interface Article {
  author: string | null;
  category: string;
  country: string;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
}

interface Pagination {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
}

interface NewsResponse {
  pagination: Pagination;
  data: Article[];
}
