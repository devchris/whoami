import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { getAllPosts, getAllTags, getPostsByTag } from '../../../../lib/blog'

export async function generateStaticParams() {
  const tags = getAllTags()
  
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag),
  }))
}

interface TagPageProps {
  params: {
    tag: string
  }
}

export default function TagPage({ params }: TagPageProps) {
  const decodedTag = decodeURIComponent(params.tag)
  
  // Filter posts by tag
  const tagPosts = getPostsByTag(decodedTag)

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/blog"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <Tag className="h-6 w-6" style={{ color: 'var(--theme-primary-400)' }} />
              <h1 className="text-3xl md:text-4xl font-bold gradient-text">
                Posts tagged "{decodedTag}"
              </h1>
            </div>
            
            <p className="text-gray-400">
              {tagPosts.length} {tagPosts.length === 1 ? 'post' : 'posts'} found
            </p>
          </div>

          {/* Posts */}
          {tagPosts.length > 0 ? (
            <div className="space-y-8">
              {tagPosts.map((post, index) => (
                <article
                  key={index}
                  className="cyber-border rounded-xl p-8 hover:cyber-glow transition-all duration-300 group"
                >
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-3">•</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-2xl font-bold mb-4 transition-colors theme-hover">
                    <Link 
                      href={`/blog/${post.slug}`}
                      style={{ color: 'var(--theme-primary-400)' }}
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Link
                        key={tagIndex}
                        href={`/blog/tag/${encodeURIComponent(tag)}`}
                        className={`px-3 py-1 bg-gray-700/50 rounded-full text-xs transition-colors terminal-font ${
                          tag.toLowerCase() === decodedTag.toLowerCase()
                            ? 'text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                        style={{
                          backgroundColor: tag.toLowerCase() === decodedTag.toLowerCase() 
                            ? 'var(--theme-background)' 
                            : undefined,
                          color: tag.toLowerCase() === decodedTag.toLowerCase() 
                            ? 'var(--theme-primary-400)' 
                            : undefined
                        }}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium transition-colors theme-hover"
                    style={{ color: 'var(--theme-primary-400)' }}
                  >
                    Read More →
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Tag className="h-16 w-16 mx-auto mb-4 text-gray-600" />
              <h2 className="text-xl font-bold text-gray-400 mb-2">No posts found</h2>
              <p className="text-gray-500 mb-8">
                There are no posts tagged with "{decodedTag}" yet.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 cyber-border rounded-lg font-semibold transition-all duration-200 theme-button-secondary"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Posts
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}