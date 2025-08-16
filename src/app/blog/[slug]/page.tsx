import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, Tag, Share2 } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllPosts } from '../../../../lib/blog'
import type { BlogPost } from '../../../../types/blog'
import { Metadata } from 'next'

interface Props {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params
    const post = getPostBySlug(resolvedParams.slug)

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    return {
        title: `${post.title} - DevChris.net`,
        description: post.description,
        keywords: post.tags,
        authors: [{ name: post.author }],
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
        },
    }
}

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

const mdxComponents = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="text-3xl font-bold text-cyan-400 mb-6" {...props} />,
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8" {...props} />,
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="text-xl font-bold text-cyan-400 mb-3 mt-6" {...props} />,
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="text-gray-300 mb-4 leading-relaxed" {...props} />,
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="text-gray-300 mb-4 space-y-2 list-disc ml-6" {...props} />,
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => <ol className="text-gray-300 mb-4 space-y-2 list-decimal ml-6" {...props} />,
    li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="leading-relaxed" {...props} />,
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote className="border-l-4 border-cyan-500 bg-gray-800/50 p-4 my-6 italic text-gray-300" {...props} />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => (
        <code className="bg-gray-800 text-cyan-400 px-2 py-1 rounded text-sm terminal-font" {...props} />
    ),
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
        <pre className="bg-gray-800 border border-gray-700 rounded-lg p-4 my-6 overflow-x-auto text-sm terminal-font" {...props} />
    ),
    a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
        <a className="text-cyan-400 hover:text-cyan-300 underline transition-colors" {...props} />
    ),
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        <img className="rounded-lg my-6 max-w-full h-auto" alt="" {...props} />
    ),
    table: (props: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="overflow-x-auto my-6">
            <table className="min-w-full cyber-border rounded-lg" {...props} />
        </div>
    ),
    th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th className="px-4 py-2 bg-gray-800 text-cyan-400 font-semibold text-left" {...props} />
    ),
    td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td className="px-4 py-2 border-t border-gray-700 text-gray-300" {...props} />
    ),
}

export default async function BlogPost({ params }: Props) {
    const resolvedParams = await params
    const post = getPostBySlug(resolvedParams.slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

                    {/* Article Header */}
                    <header className="mb-12">
                        {post.featured && (
                            <div className="flex items-center mb-4">
                                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                                    Featured Article
                                </span>
                            </div>
                        )}

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text leading-tight">
                            {post.title}
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            {post.description}
                        </p>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
                            <div className="flex items-center">
                                <User className="h-4 w-4 mr-2" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2" />
                                <span>{new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {post.tags.map((tag) => (
                                <Link
                                    key={tag}
                                    href={`/blog/tag/${tag.toLowerCase()}`}
                                    className="flex items-center px-3 py-1 rounded-full bg-gray-800 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 text-sm transition-all duration-200 border border-gray-700 hover:border-cyan-500/50"
                                >
                                    <Tag className="h-3 w-3 mr-1" />
                                    {tag}
                                </Link>
                            ))}
                        </div>

                        {/* Share Button */}
                        <div className="flex items-center justify-between pt-6 border-t border-gray-800">
                            <div className="text-sm text-gray-500">
                                Share this article
                            </div>
                            <button className="flex items-center px-4 py-2 cyber-border hover:cyber-glow text-cyan-400 hover:text-cyan-300 rounded-lg transition-all duration-200">
                                <Share2 className="h-4 w-4 mr-2" />
                                Share
                            </button>
                        </div>
                    </header>

                    {/* Article Content */}
                    <article className="prose prose-lg prose-invert max-w-none">
                        <div className="cyber-border rounded-xl p-8 bg-gray-800/30">
                            <MDXRemote source={post.content} components={mdxComponents} />
                        </div>
                    </article>

                    {/* Article Footer */}
                    <footer className="mt-16 pt-8 border-t border-gray-800">
                        <div className="cyber-border rounded-xl p-8">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center text-gray-900 font-bold text-xl">
                                    {post.author.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-cyan-400">About {post.author}</h3>
                                    <p className="text-gray-300">
                                        Senior Software Engineer II at CrowdStrike, specializing in cybersecurity and AI.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/about"
                                    className="flex-1 px-4 py-3 cyber-border hover:cyber-glow text-center text-cyan-400 hover:text-cyan-300 rounded-lg transition-all duration-200"
                                >
                                    Learn More About Me
                                </Link>
                                <Link
                                    href="/blog"
                                    className="flex-1 px-4 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-900 text-center rounded-lg font-semibold transition-all duration-200"
                                >
                                    Read More Articles
                                </Link>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}
