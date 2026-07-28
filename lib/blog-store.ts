import fs from "fs";
import path from "path";

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

export type CreatePostInput = {
  title: string;
  excerpt: string;
  category: string;
  quickAnswer: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  content: BlogSection[];
};

const DATA_PATH = path.join(process.cwd(), "data", "blog-posts.json");

function ensureDataFile(): void {
  const dir = path.dirname(DATA_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DATA_PATH)) {
    fs.writeFileSync(DATA_PATH, "[]", "utf-8");
  }
}

function readPosts(): BlogPost[] {
  ensureDataFile();
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writePosts(posts: BlogPost[]): void {
  ensureDataFile();
  fs.writeFileSync(DATA_PATH, JSON.stringify(posts, null, 2), "utf-8");
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function uniqueSlug(base: string, existing: BlogPost[]): string {
  const taken = new Set(existing.map((p) => p.slug));
  if (!taken.has(base)) return base;
  let i = 2;
  while (taken.has(`${base}-${i}`)) i++;
  return `${base}-${i}`;
}

function calculateReadTime(content: BlogSection[]): string {
  const wordCount = content.reduce((total, section) => {
    const headingWords = section.heading.split(/\s+/).filter(Boolean).length;
    const bodyWords = section.body.reduce(
      (sum, p) => sum + p.split(/\s+/).filter(Boolean).length,
      0
    );
    return total + headingWords + bodyWords;
  }, 0);
  const minutes = Math.max(1, Math.round(wordCount / 200)); // ~200 wpm
  return `${minutes} min read`;
}

function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10); // YYYY-MM-DD, matches existing posts
}

export function getAllPosts(): BlogPost[] {
  return readPosts().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return readPosts().find((p) => p.slug === slug);
}

export function createPost(input: CreatePostInput): BlogPost {
  const posts = readPosts();
  const slug = uniqueSlug(slugify(input.title), posts);

  const post: BlogPost = {
    slug,
    title: input.title,
    excerpt: input.excerpt,
    date: formatDate(new Date()),
    readTime: calculateReadTime(input.content),
    category: input.category,
    tags: input.tags,
    image: input.image,
    imageAlt: input.imageAlt,
    quickAnswer: input.quickAnswer,
    content: input.content,
  };

  posts.push(post);
  writePosts(posts);
  return post;
}

export function deletePost(slug: string): boolean {
  const posts = readPosts();
  const next = posts.filter((p) => p.slug !== slug);
  if (next.length === posts.length) return false;
  writePosts(next);
  return true;
}
