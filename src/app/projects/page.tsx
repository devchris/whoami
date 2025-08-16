import Link from 'next/link'
import { Github, ExternalLink, Star, GitFork, Calendar } from 'lucide-react'

export const metadata = {
    title: 'Projects - DevChris.net',
    description: 'Explore security tools, AI research projects, and open-source contributions by Chris.',
}

export default function ProjectsPage() {
    const featuredProjects = [
        {
            title: "Threat Detection Engine",
            description: "Advanced machine learning-based threat detection system for enterprise security. Processes billions of events daily with sub-second response times.",
            longDescription: "A comprehensive threat detection platform that combines traditional signature-based detection with advanced machine learning algorithms. The system can identify zero-day exploits, advanced persistent threats, and insider threats through behavioral analysis.",
            tech: ["Python", "TensorFlow", "AWS", "Docker", "Kubernetes", "PostgreSQL"],
            status: "Production",
            type: "Enterprise Security",
            github: "https://github.com/devchris/threat-detection-engine",
            demo: "https://demo.threatdetection.dev",
            stats: { stars: 245, forks: 89, watchers: 34 },
            features: [
                "Real-time event processing at scale",
                "ML-based anomaly detection",
                "Automated threat response",
                "Enterprise dashboard and reporting"
            ],
            impact: "Reduced security incident response time by 85% across enterprise deployments"
        },
        {
            title: "AI Security Analyzer",
            description: "Automated vulnerability scanner powered by large language models. Identifies security vulnerabilities in code and infrastructure configurations.",
            longDescription: "An innovative security analysis tool that leverages the power of large language models to understand code semantics and identify complex security vulnerabilities that traditional static analysis tools might miss.",
            tech: ["TypeScript", "OpenAI API", "React", "Node.js", "Docker", "MongoDB"],
            status: "Beta",
            type: "AI Security",
            github: "https://github.com/devchris/ai-security-analyzer",
            demo: "https://ai-security.devchris.net",
            stats: { stars: 156, forks: 43, watchers: 22 },
            features: [
                "LLM-powered code analysis",
                "Infrastructure as Code scanning",
                "Custom rule engine",
                "Integration with CI/CD pipelines"
            ],
            impact: "Discovered 40% more vulnerabilities compared to traditional SAST tools"
        },
        {
            title: "Incident Response Toolkit",
            description: "Comprehensive toolkit for cybersecurity incident response and forensics. Streamlines investigation workflows and evidence collection.",
            longDescription: "A complete incident response platform designed for security teams to efficiently handle cybersecurity incidents from detection through remediation. Includes forensic analysis tools, evidence management, and automated playbooks.",
            tech: ["Go", "PostgreSQL", "Redis", "Kubernetes", "Grafana", "Elasticsearch"],
            status: "Development",
            type: "Security Operations",
            github: "https://github.com/devchris/incident-response-toolkit",
            stats: { stars: 89, forks: 28, watchers: 15 },
            features: [
                "Automated evidence collection",
                "Timeline reconstruction",
                "Threat intelligence integration",
                "Collaborative investigation workspace"
            ],
            impact: "Currently being tested by 3 Fortune 500 security teams"
        }
    ]

    const otherProjects = [
        {
            title: "SecureCloud Scanner",
            description: "Cloud security posture assessment tool for AWS, Azure, and GCP environments.",
            tech: ["Python", "Boto3", "Terraform", "YAML"],
            type: "Cloud Security",
            github: "https://github.com/devchris/securecloud-scanner",
            stars: 67
        },
        {
            title: "Crypto Vulnerability Research",
            description: "Research into cryptographic implementation vulnerabilities in popular libraries.",
            tech: ["C", "Python", "Assembly", "Jupyter"],
            type: "Research",
            github: "https://github.com/devchris/crypto-vuln-research",
            stars: 134
        },
        {
            title: "Network Protocol Analyzer",
            description: "Deep packet inspection tool for identifying suspicious network communications.",
            tech: ["Rust", "Wireshark", "Pcap", "TLS"],
            type: "Network Security",
            github: "https://github.com/devchris/network-protocol-analyzer",
            stars: 91
        },
        {
            title: "Container Security Hardening",
            description: "Automated security hardening profiles for Docker and Kubernetes deployments.",
            tech: ["Go", "Docker", "Kubernetes", "YAML"],
            type: "DevSecOps",
            github: "https://github.com/devchris/container-security-hardening",
            stars: 178
        },
        {
            title: "AI Model Security Testing",
            description: "Framework for testing adversarial robustness of machine learning models.",
            tech: ["Python", "PyTorch", "NumPy", "Jupyter"],
            type: "AI Security",
            github: "https://github.com/devchris/ai-model-security-testing",
            stars: 203
        },
        {
            title: "Zero Trust Proxy",
            description: "Identity-aware proxy implementing zero trust network access principles.",
            tech: ["Go", "JWT", "TLS", "Redis"],
            type: "Zero Trust",
            github: "https://github.com/devchris/zero-trust-proxy",
            stars: 122
        }
    ]

    const researchPapers = [
        {
            title: "Adversarial Attacks on ML-based Intrusion Detection Systems",
            conference: "USENIX Security 2024",
            status: "Published",
            link: "/papers/adversarial-attacks-ids.pdf"
        },
        {
            title: "Zero Trust Architecture in Cloud-Native Environments",
            conference: "IEEE Security & Privacy 2024",
            status: "Under Review",
            link: "#"
        },
        {
            title: "Large Language Models for Automated Security Code Review",
            conference: "ACM CCS 2024",
            status: "Accepted",
            link: "/papers/llm-security-code-review.pdf"
        }
    ]

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                            Security Projects & Research
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Open-source security tools, AI research projects, and enterprise solutions
                            designed to advance the state of cybersecurity.
                        </p>
                    </div>

                    {/* Featured Projects */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-red-400 mb-12">Featured Projects</h2>
                        <div className="space-y-12">
                            {featuredProjects.map((project, index) => (
                                <div key={index} className="cyber-border rounded-xl p-8 hover:cyber-glow transition-all duration-300">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                        {/* Project Info */}
                                        <div className="lg:col-span-2">
                                            <div className="flex flex-wrap items-center gap-4 mb-4">
                                                <h3 className="text-2xl font-bold text-red-400">{project.title}</h3>
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Production'
                                                    ? 'bg-green-500/20 text-green-400'
                                                    : project.status === 'Beta'
                                                        ? 'bg-yellow-500/20 text-yellow-400'
                                                        : 'bg-blue-500/20 text-blue-400'
                                                    }`}>
                                                    {project.status}
                                                </span>
                                                <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                                                    {project.type}
                                                </span>
                                            </div>

                                            <p className="text-gray-300 mb-4 leading-relaxed">
                                                {project.description}
                                            </p>

                                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                                {project.longDescription}
                                            </p>

                                            {/* Features */}
                                            <div className="mb-6">
                                                <h4 className="text-sm font-semibold text-red-400 mb-3">Key Features:</h4>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-300">
                                                    {project.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="flex items-start">
                                                            <span className="text-cyan-400 mr-2">•</span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Impact */}
                                            <div className="mb-6">
                                                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                                                    <h4 className="text-sm font-semibold text-red-400 mb-2">Impact:</h4>
                                                    <p className="text-gray-300 text-sm">{project.impact}</p>
                                                </div>
                                            </div>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tech.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs terminal-font"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Project Stats & Links */}
                                        <div className="space-y-6">
                                            {/* GitHub Stats */}
                                            {project.stats && (
                                                <div className="cyber-border rounded-lg p-4">
                                                    <h4 className="text-sm font-semibold text-red-400 mb-3">GitHub Stats</h4>
                                                    <div className="space-y-2">
                                                        <div className="flex items-center justify-between text-sm">
                                                            <span className="flex items-center text-gray-300">
                                                                <Star className="h-4 w-4 mr-2" />
                                                                Stars
                                                            </span>
                                                            <span className="text-red-400 font-medium">{project.stats.stars}</span>
                                                        </div>
                                                        <div className="flex items-center justify-between text-sm">
                                                            <span className="flex items-center text-gray-300">
                                                                <GitFork className="h-4 w-4 mr-2" />
                                                                Forks
                                                            </span>
                                                            <span className="text-red-400 font-medium">{project.stats.forks}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Action Buttons */}
                                            <div className="space-y-3">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full flex items-center justify-center px-4 py-3 cyber-border hover:cyber-glow text-red-400 hover:text-red-300 rounded-lg transition-all duration-200"
                                                >
                                                    <Github className="h-4 w-4 mr-2" />
                                                    View Source
                                                </a>
                                                {project.demo && (
                                                    <a
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-full flex items-center justify-center px-4 py-3 bg-red-500 hover:bg-red-400 text-white rounded-lg font-semibold transition-all duration-200"
                                                    >
                                                        <ExternalLink className="h-4 w-4 mr-2" />
                                                        Live Demo
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Other Projects */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-cyan-400 mb-12">Other Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {otherProjects.map((project, index) => (
                                <div key={index} className="cyber-border rounded-xl p-6 hover:cyber-glow transition-all duration-300 group">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                                            {project.type}
                                        </span>
                                        <div className="flex items-center text-gray-400 text-sm">
                                            <Star className="h-4 w-4 mr-1" />
                                            {project.stars}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors mb-3">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs terminal-font"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                                    >
                                        <Github className="h-4 w-4 mr-2" />
                                        View on GitHub
                                    </a>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Research Publications */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-cyan-400 mb-12">Research Publications</h2>
                        <div className="space-y-4">
                            {researchPapers.map((paper, index) => (
                                <div key={index} className="cyber-border rounded-lg p-6">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-cyan-400 mb-2">{paper.title}</h3>
                                            <div className="flex items-center text-sm text-gray-400">
                                                <Calendar className="h-4 w-4 mr-2" />
                                                <span>{paper.conference}</span>
                                                <span className="mx-2">•</span>
                                                <span className={`px-2 py-1 rounded-full text-xs ${paper.status === 'Published'
                                                    ? 'bg-green-500/20 text-green-400'
                                                    : paper.status === 'Accepted'
                                                        ? 'bg-blue-500/20 text-blue-400'
                                                        : 'bg-yellow-500/20 text-yellow-400'
                                                    }`}>
                                                    {paper.status}
                                                </span>
                                            </div>
                                        </div>
                                        {paper.link !== '#' && (
                                            <a
                                                href={paper.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 cyber-border hover:cyber-glow text-cyan-400 hover:text-cyan-300 rounded-lg transition-all duration-200"
                                            >
                                                <ExternalLink className="h-4 w-4 mr-2" />
                                                Read Paper
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section>
                        <div className="cyber-border rounded-xl p-8 text-center">
                            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Interested in Collaboration?</h2>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                I&apos;m always looking for opportunities to collaborate on security research,
                                open-source projects, and innovative solutions to cybersecurity challenges.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="mailto:hello@devchris.net"
                                    className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-900 rounded-lg font-semibold transition-all duration-200 cyber-glow"
                                >
                                    Get In Touch
                                </a>
                                <a
                                    href="https://github.com/devchris"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 cyber-border hover:cyber-glow text-cyan-400 hover:text-cyan-300 rounded-lg transition-all duration-200 flex items-center justify-center"
                                >
                                    <Github className="h-4 w-4 mr-2" />
                                    Follow on GitHub
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
