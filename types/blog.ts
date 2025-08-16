export interface BlogPost {
    slug: string
    title: string
    description: string
    date: string
    author: string
    tags: string[]
    readTime: string
    featured?: boolean
    published: boolean
    content: string
}

export interface BlogPostMetadata {
    slug: string
    title: string
    description: string
    date: string
    author: string
    tags: string[]
    readTime: string
    featured?: boolean
    published: boolean
}
