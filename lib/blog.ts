import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost, BlogPostMetadata } from '../types/blog'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPosts(): BlogPostMetadata[] {
    // Create posts directory if it doesn't exist
    if (!fs.existsSync(postsDirectory)) {
        fs.mkdirSync(postsDirectory, { recursive: true })
        return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '')
            const fullPath = path.join(postsDirectory, fileName)
            const fileContents = fs.readFileSync(fullPath, 'utf8')
            const matterResult = matter(fileContents)

            return {
                slug,
                title: matterResult.data.title || '',
                description: matterResult.data.description || '',
                date: matterResult.data.date || '',
                author: matterResult.data.author || 'Chris',
                tags: matterResult.data.tags || [],
                readTime: matterResult.data.readTime || calculateReadTime(matterResult.content),
                featured: matterResult.data.featured || false,
                published: matterResult.data.published !== false, // Default to true if not specified
            }
        })
        .filter((post) => post.published)
        .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))

    return allPostsData
}

export function getPostBySlug(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`)
        if (!fs.existsSync(fullPath)) {
            return null
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        const post: BlogPost = {
            slug,
            title: matterResult.data.title || '',
            description: matterResult.data.description || '',
            date: matterResult.data.date || '',
            author: matterResult.data.author || 'Chris',
            tags: matterResult.data.tags || [],
            readTime: matterResult.data.readTime || calculateReadTime(matterResult.content),
            featured: matterResult.data.featured || false,
            published: matterResult.data.published !== false,
            content: matterResult.content,
        }

        return post.published ? post : null
    } catch (error) {
        console.error(`Error reading post ${slug}:`, error)
        return null
    }
}

export function getFeaturedPosts(): BlogPostMetadata[] {
    return getAllPosts().filter((post) => post.featured)
}

export function getPostsByTag(tag: string): BlogPostMetadata[] {
    return getAllPosts().filter((post) =>
        post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
    )
}

export function getAllTags(): string[] {
    const posts = getAllPosts()
    const tags = posts.flatMap((post) => post.tags)
    return Array.from(new Set(tags)).sort()
}

function calculateReadTime(content: string): string {
    const wordsPerMinute = 200
    const words = content.trim().split(/\s+/).length
    const minutes = Math.ceil(words / wordsPerMinute)
    return `${minutes} min read`
}

export function getRecentPosts(limit: number = 5): BlogPostMetadata[] {
    return getAllPosts().slice(0, limit)
}
