// Blog data and utilities
export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  featured?: boolean
  content?: string
}

// Mock blog posts data - in a real app, this would come from a CMS or markdown files
const posts: BlogPost[] = [
  {
    slug: "building-planubo-solo",
    title: "Building planubo: Solo Founder's Full-Stack Journey",
    description: "From initial concept to production platform - the complete technical story of building planubo solo.",
    date: "2024-01-15",
    readTime: "12 min read",
    tags: ["frontend", "full-stack", "startup", "planubo"],
    featured: true
  },
  {
    slug: "securing-ai-systems",
    title: "Securing AI Systems: A CrowdStrike Perspective",
    description: "Enterprise cybersecurity considerations for AI deployments and intelligent systems.",
    date: "2024-01-12",
    readTime: "15 min read",
    tags: ["cybersecurity", "AI", "enterprise", "security"],
    featured: true
  },
  {
    slug: "multi-agent-systems",
    title: "Deep Dive into Multi-Agent Systems (MAS)",
    description: "Exploring the architecture and implementation of intelligent multi-agent systems with practical examples.",
    date: "2024-01-10",
    readTime: "10 min read",
    tags: ["AI", "MAS", "agents", "architecture"]
  },
  {
    slug: "cloud-security-ai",
    title: "Cloud Security in the Age of AI",
    description: "How artificial intelligence is transforming cloud security and threat detection.",
    date: "2024-01-08",
    readTime: "9 min read",
    tags: ["cloud security", "AI", "threat detection", "cybersecurity"]
  },
  {
    slug: "rag-knowledge-bases",
    title: "RAG + Knowledge Bases: The Future of AI",
    description: "How Retrieval-Augmented Generation and intelligent knowledge bases are revolutionizing AI applications.",
    date: "2024-01-05",
    readTime: "8 min read",
    tags: ["AI", "RAG", "knowledge-bases", "ML"]
  }
]

export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(post => post.slug === slug)
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>()
  posts.forEach(post => {
    post.tags.forEach(tag => tagSet.add(tag))
  })
  return Array.from(tagSet).sort()
}

export function getPostsByTag(tag: string): BlogPost[] {
  return posts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getFeaturedPosts(): BlogPost[] {
  return posts.filter(post => post.featured)
}