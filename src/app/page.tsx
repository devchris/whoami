import Link from 'next/link'
import { ArrowRight, Shield, Code, Brain, Terminal, ExternalLink } from 'lucide-react'

export default function Home() {
  const featuredProjects = [
    {
      title: "Threat Detection Engine",
      description: "Advanced machine learning-based threat detection system for enterprise security.",
      tech: ["Python", "TensorFlow", "AWS", "Docker"],
      status: "Production",
      link: "/projects/threat-detection"
    },
    {
      title: "AI Security Analyzer",
      description: "Automated vulnerability scanner powered by large language models.",
      tech: ["TypeScript", "OpenAI API", "React", "Node.js"],
      status: "Beta",
      link: "/projects/ai-security"
    },
    {
      title: "Incident Response Toolkit",
      description: "Comprehensive toolkit for cybersecurity incident response and forensics.",
      tech: ["Go", "PostgreSQL", "Redis", "Kubernetes"],
      status: "Development",
      link: "/projects/incident-response"
    }
  ]

  const recentPosts = [
    {
      title: "Advanced Persistent Threats in the AI Era",
      excerpt: "Exploring how artificial intelligence is reshaping the cybersecurity landscape and threat modeling approaches.",
      date: "2024-01-15",
      readTime: "8 min read",
      slug: "apt-ai-era"
    },
    {
      title: "Building Secure AI Systems",
      excerpt: "Best practices for implementing security-first AI applications in enterprise environments.",
      date: "2024-01-10",
      readTime: "12 min read",
      slug: "secure-ai-systems"
    },
    {
      title: "Zero Trust Architecture Deep Dive",
      excerpt: "A comprehensive guide to implementing zero trust security principles in modern cloud infrastructure.",
      date: "2024-01-05",
      readTime: "15 min read",
      slug: "zero-trust-deep-dive"
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
              Senior Software Engineer II @ CrowdStrike • Founder @ planubo.com
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text glitch" data-text="DevChris">DevChris</span>
              <br />
              <span className="text-white">Security Researcher</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Crafting secure software solutions and exploring the intersection of
              <span className="font-semibold" style={{ color: 'var(--theme-primary-400)' }}> artificial intelligence</span> and
              <span className="font-semibold" style={{ color: 'var(--theme-primary-400)' }}> cybersecurity</span>
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
          ~/security/research
        </div>
        <div className="absolute bottom-20 left-1/4 terminal-font text-sm pointer-events-none" style={{ color: 'var(--theme-primary-400)', opacity: 0.3 }}>
          [INFO] System initialized
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
                <Shield className="h-12 w-12 text-red-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4 text-red-400">Cybersecurity</h3>
                <p className="text-gray-300 mb-4">
                  Advanced threat detection, incident response, and security architecture design.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Threat Hunting & Analysis</li>
                  <li>• Vulnerability Assessment</li>
                  <li>• Security Architecture</li>
                  <li>• Incident Response</li>
                </ul>
              </div>

              <div className="cyber-border rounded-xl p-8 hover:cyber-glow transition-all duration-300 group">
                <Brain className="h-12 w-12 text-red-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4 text-red-400">AI & Machine Learning</h3>
                <p className="text-gray-300 mb-4">
                  Developing AI-powered security solutions and exploring ML applications in cybersecurity.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• ML-based Threat Detection</li>
                  <li>• NLP for Security Analysis</li>
                  <li>• AI Safety & Ethics</li>
                  <li>• Large Language Models</li>
                </ul>
              </div>

              <div className="cyber-border rounded-xl p-8 hover:cyber-glow transition-all duration-300 group">
                <Code className="h-12 w-12 text-red-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4 text-red-400">Software Engineering</h3>
                <p className="text-gray-300 mb-4">
                  Building scalable, secure software systems with modern technologies and best practices.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Cloud Architecture (AWS/Azure)</li>
                  <li>• Microservices & APIs</li>
                  <li>• DevSecOps & CI/CD</li>
                  <li>• Full-Stack Development</li>
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
                className="flex items-center text-red-400 hover:text-red-300 transition-colors group"
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
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-red-400 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-red-400 group-hover:text-red-300 transition-colors">
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
                    className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
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
                className="flex items-center text-red-400 hover:text-red-300 transition-colors group"
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

                  <h3 className="text-xl font-bold mb-3 text-red-400 group-hover:text-red-300 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
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