import Link from 'next/link'
import { ArrowRight, Shield, Code, Brain, Terminal, ExternalLink } from 'lucide-react'

export default function Home() {
  const featuredProjects = [
    {
      title: "planubo Platform",
      description: "Complete planning and project management platform built solo - frontend, backend, infrastructure, and DevOps.",
      tech: ["React", "Next.js", "Node.js", "AWS", "TypeScript"],
      status: "Production",
      link: "/projects/planubo"
    },
    {
      title: "AI Agent Framework",
      description: "Experimental multi-agent system leveraging LangChain, RAG, and intelligent knowledge bases.",
      tech: ["Python", "LangChain", "RAG", "OpenAI", "Vector DBs"],
      status: "Beta",
      link: "/projects/ai-agents"
    },
    {
      title: "MCP Integration System",
      description: "Model Context Protocol implementation for seamless AI agent communication and coordination.",
      tech: ["TypeScript", "MCP", "WebSockets", "AI APIs"],
      status: "Development",
      link: "/projects/mcp-system"
    }
  ]

  const recentPosts = [
    {
      title: "Building planubo: Solo Founder's Full-Stack Journey",
      excerpt: "From initial concept to production platform - the complete technical story of building planubo solo.",
      date: "2024-01-15",
      readTime: "12 min read",
      slug: "building-planubo-solo"
    },
    {
      title: "Deep Dive into Multi-Agent Systems (MAS)",
      excerpt: "Exploring the architecture and implementation of intelligent multi-agent systems with practical examples.",
      date: "2024-01-10",
      readTime: "10 min read",
      slug: "multi-agent-systems"
    },
    {
      title: "RAG + Knowledge Bases: The Future of AI",
      excerpt: "How Retrieval-Augmented Generation and intelligent knowledge bases are revolutionizing AI applications.",
      date: "2024-01-05",
      readTime: "8 min read",
      slug: "rag-knowledge-bases"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden matrix-bg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ backgroundColor: 'var(--theme-background)', borderColor: 'var(--theme-border)', color: 'var(--theme-primary-400)', border: '1px solid' }}>
              <Shield className="h-4 w-4 mr-2" />
              Senior Engineer II - Frontend @ CrowdStrike • Founder @ planubo.com
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text glitch" data-text="DevChris">DevChris</span>
              <br />
              <span className="text-white">Full-Stack Engineer</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Frontend engineer at CrowdStrike by day, solo founder by night. Built planubo entirely solo and now exploring the frontier of
              <span className="font-semibold" style={{ color: 'var(--theme-primary-400)' }}> AI agents</span> and
              <span className="font-semibold" style={{ color: 'var(--theme-primary-400)' }}> intelligent systems</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/projects"
                className="group flex items-center px-8 py-4 text-white rounded-lg font-semibold transition-all duration-200 cyber-glow hover:cyber-glow theme-button-primary"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/blog"
                className="group flex items-center px-8 py-4 cyber-border rounded-lg font-semibold transition-all duration-200 theme-button-secondary"
              >
                Read Blog
                <Terminal className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 terminal-font text-sm pointer-events-none" style={{ color: 'var(--theme-primary-400)', opacity: 0.3 }}>
          $ whoami
        </div>
        <div className="absolute top-40 right-10 terminal-font text-sm pointer-events-none" style={{ color: 'var(--theme-primary-400)', opacity: 0.3 }}>
          ~/planubo/ai-agents
        </div>
        <div className="absolute bottom-20 left-1/4 terminal-font text-sm pointer-events-none" style={{ color: 'var(--theme-primary-400)', opacity: 0.3 }}>
          [INFO] Agent system online
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
              Expertise Areas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-border rounded-xl p-8 hover:cyber-glow transition-all duration-300 group">
                <Code className="h-12 w-12 mb-6 group-hover:scale-110 transition-transform" style={{ color: 'var(--theme-primary-400)' }} />
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--theme-primary-400)' }}>Frontend Engineering</h3>
                <p className="text-gray-300 mb-4">
                  Senior frontend engineer at CrowdStrike building cybersecurity interfaces. Built planubo entirely solo as side project.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• React, Next.js, TypeScript at scale</li>
                  <li>• Enterprise UI/UX for security tools</li>
                  <li>• Full-stack solo projects (planubo)</li>
                  <li>• Performance & accessibility expert</li>
                </ul>
              </div>

              <div className="cyber-border rounded-xl p-8 hover:cyber-glow transition-all duration-300 group">
                <Brain className="h-12 w-12 mb-6 group-hover:scale-110 transition-transform" style={{ color: 'var(--theme-primary-400)' }} />
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--theme-primary-400)' }}>AI & Intelligent Systems</h3>
                <p className="text-gray-300 mb-4">
                  Deep-diving into AI agents, multi-agent systems, and next-generation intelligent applications.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Multi-Agent Systems (MAS)</li>
                  <li>• RAG & Knowledge Bases</li>
                  <li>• LangChain & AI Frameworks</li>
                  <li>• Model Context Protocols (MCP)</li>
                </ul>
              </div>

              <div className="cyber-border rounded-xl p-8 hover:cyber-glow transition-all duration-300 group">
                <Terminal className="h-12 w-12 mb-6 group-hover:scale-110 transition-transform" style={{ color: 'var(--theme-primary-400)' }} />
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--theme-primary-400)' }}>Product & Leadership</h3>
                <p className="text-gray-300 mb-4">
                  Founding and scaling planubo as a solo founder - from concept to production-ready platform.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Product Strategy & Vision</li>
                  <li>• Technical Architecture</li>
                  <li>• Performance Optimization</li>
                  <li>• Solo Founder Experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Featured Projects
              </h2>
              <Link
                href="/projects"
                className="flex items-center transition-colors group theme-hover"
                style={{ color: 'var(--theme-primary-400)' }}
              >
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="cyber-border rounded-xl p-6 hover:cyber-glow transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Production'
                      ? 'bg-green-500/20 text-green-400'
                      : project.status === 'Beta'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-blue-500/20 text-blue-400'
                      }`}>
                      {project.status}
                    </span>
                    <ExternalLink className="h-4 w-4 text-gray-400 transition-colors theme-hover" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 transition-colors theme-hover" style={{ color: 'var(--theme-primary-400)' }}>
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs terminal-font"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.link}
                    className="text-sm font-medium transition-colors theme-hover"
                    style={{ color: 'var(--theme-primary-400)' }}
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Latest Insights
              </h2>
              <Link
                href="/blog"
                className="flex items-center transition-colors group theme-hover"
                style={{ color: 'var(--theme-primary-400)' }}
              >
                View All Posts
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <article
                  key={index}
                  className="cyber-border rounded-xl p-6 hover:cyber-glow transition-all duration-300 group"
                >
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 transition-colors theme-hover" style={{ color: 'var(--theme-primary-400)' }}>
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

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
          </div>
        </div>
      </section>
    </div>
  )
}