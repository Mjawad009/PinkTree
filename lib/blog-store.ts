export type BlogSection = {
  heading: string;
  body: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  quickAnswer: string;
  content: BlogSection[];
};
