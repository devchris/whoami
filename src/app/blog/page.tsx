import Link from 'next/link'
import { Calendar, Clock, Tag, Search } from 'lucide-react'
import { getAllPosts, getAllTags } from '../../../lib/blog'

export const metadata = {
    title: 'Blog - DevChris.net',
    description: 'Insights on cybersecurity, AI, and software engineering from a CrowdStrike senior engineer.',
}

export default function BlogPage() {
    const posts = getAllPosts()
    const tags = getAllTags()

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                            Security Research & Insights
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Exploring the latest in cybersecurity, artificial intelligence, and software engineering.
                            Sharing knowledge from the frontlines of enterprise security.
                        </p>
                    </div>

                    {/* Search and Filter Section */}
                    <div className="mb-12">
                        <div className="cyber-border rounded-xl p-6 mb-8">
                            <div className="flex flex-col md:flex-row gap-4 items-center">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search articles..."
                                        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                    />
                                </div>
                                <select className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 min-w-[160px]">
                                    <option value="">All Categories</option>
                                    {tags.map((tag) => (
                                        <option key={tag} value={tag}>{tag}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3">
                            <span className="text-sm text-gray-400 font-medium">Popular tags:</span>
                            {tags.slice(0, 8).map((tag) => (
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
                    </div>

                    {/* Blog Posts */}
                    {posts.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="cyber-border rounded-xl p-12 max-w-2xl mx-auto">
                                <div className="text-6xl mb-6">📝</div>
                                <h3 className="text-2xl font-bold text-cyan-400 mb-4">No Posts Yet</h3>
                                <p className="text-gray-300 mb-6">
                                    Blog posts will appear here once you start adding markdown files to the posts directory.
                                </p>
                                <div className="bg-gray-800 rounded-lg p-4 text-left terminal-font text-sm text-gray-400">
                                    <div className="text-cyan-400 mb-2">$ ls posts/</div>
                                    <div>{`// Add your .md files here`}</div>
                                    <div>example-post.md</div>
                                    <div>another-post.md</div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <article
                                    key={post.slug}
                                    className="cyber-border rounded-xl p-6 hover:cyber-glow transition-all duration-300 group"
                                >
                                    {post.featured && (
                                        <div className="flex items-center mb-4">
                                            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
                                                Featured
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex items-center text-sm text-gray-400 mb-3">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        <span>{new Date(post.date).toLocaleDateString()}</span>
                                        <span className="mx-2">•</span>
                                        <Clock className="h-4 w-4 mr-1" />
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                                        {post.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs terminal-font"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {post.tags.length > 3 && (
                                            <span className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded text-xs">
                                                +{post.tags.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                                    >
                                        Read Article →
                                    </Link>
                                </article>
                            ))}
                        </div>
                    )}

                    {/* Newsletter Signup */}
                    <div className="mt-20">
                        <div className="cyber-border rounded-xl p-8 text-center max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold mb-4 gradient-text">
                                Stay Updated
                            </h3>
                            <p className="text-gray-300 mb-6">
                                Get notified when I publish new insights on cybersecurity and AI.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="your.email@example.com"
                                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                />
                                <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-900 rounded-lg font-semibold transition-all duration-200 cyber-glow">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-3">
                                No spam, unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
