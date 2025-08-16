import { Shield, Code, Brain, Award, ExternalLink, Download } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
    title: 'About - DevChris.net',
    description: 'Learn about Chris, Senior Software Engineer II at CrowdStrike, specializing in cybersecurity and AI.',
}

export default function AboutPage() {
    const experience = [
        {
            company: "CrowdStrike",
            role: "Senior Software Engineer II",
            period: "2022 - Present",
            description: "Leading development of next-generation threat detection systems and AI-powered security solutions.",
            achievements: [
                "Architected ML-based threat detection engine processing 1B+ events daily",
                "Led security research initiatives on AI/ML attack vectors",
                "Mentored junior engineers and established secure coding practices"
            ]
        },
        {
            company: "Previous Security Firm",
            role: "Security Software Engineer",
            period: "2020 - 2022",
            description: "Developed security tools and conducted penetration testing for enterprise clients.",
            achievements: [
                "Built automated vulnerability assessment platforms",
                "Conducted security audits for Fortune 500 companies",
                "Specialized in cloud security and DevSecOps practices"
            ]
        }
    ]

    const skills = {
        "Security": ["Threat Detection", "Incident Response", "Penetration Testing", "Security Architecture", "Zero Trust"],
        "AI/ML": ["TensorFlow", "PyTorch", "NLP", "Computer Vision", "MLOps", "LLMs"],
        "Programming": ["Python", "TypeScript", "Go", "Rust", "C++", "Java"],
        "Cloud & DevOps": ["AWS", "Azure", "Kubernetes", "Docker", "Terraform", "CI/CD"],
        "Databases": ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch", "InfluxDB"]
    }

    const certifications = [
        "CISSP - Certified Information Systems Security Professional",
        "AWS Certified Security - Specialty",
        "Certified Ethical Hacker (CEH)",
        "GSEC - GIAC Security Essentials"
    ]

    const projects = [
        {
            name: "ThreatHunter AI",
            description: "Machine learning platform for automated threat hunting and analysis",
            tech: ["Python", "TensorFlow", "Elasticsearch", "React"],
            status: "Open Source"
        },
        {
            name: "SecureCloud Toolkit",
            description: "Comprehensive security assessment tools for cloud infrastructure",
            tech: ["Go", "AWS SDK", "Terraform", "Docker"],
            status: "Active Development"
        },
        {
            name: "AI Safety Research",
            description: "Research into adversarial attacks and defenses for AI systems",
            tech: ["Python", "PyTorch", "CUDA", "Jupyter"],
            status: "Research"
        }
    ]

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center text-gray-900 text-4xl font-bold">
                            C
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                            About Chris
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Senior Software Engineer II at CrowdStrike and Founder of planubo.com with a passion for cybersecurity,
                            artificial intelligence, and building secure software that protects organizations
                            from evolving threats.
                        </p>
                    </div>

                    {/* Professional Summary */}
                    <section className="mb-16">
                        <div className="cyber-border rounded-xl p-8">
                            <h2 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                                <Shield className="h-6 w-6 mr-3" />
                                Professional Summary
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        With over 6 years of experience in cybersecurity and software engineering,
                                        I specialize in developing AI-powered security solutions that protect
                                        enterprise environments from sophisticated threats. As the founder of planubo.com,
                                        I also bring entrepreneurial vision to building innovative software products.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed">
                                        At CrowdStrike, I work on cutting-edge threat detection systems that process
                                        billions of security events daily, leveraging machine learning to identify
                                        and respond to Advanced Persistent Threats (APTs) in real-time.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center text-red-400">
                                        <Code className="h-5 w-5 mr-3" />
                                        <span>6+ Years Software Engineering</span>
                                    </div>
                                    <div className="flex items-center text-red-400">
                                        <Shield className="h-5 w-5 mr-3" />
                                        <span>4+ Years Cybersecurity</span>
                                    </div>
                                    <div className="flex items-center text-red-400">
                                        <Brain className="h-5 w-5 mr-3" />
                                        <span>3+ Years AI/ML Security</span>
                                    </div>
                                    <div className="flex items-center text-red-400">
                                        <Award className="h-5 w-5 mr-3" />
                                        <span>Multiple Security Certifications</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-red-400 mb-8">Professional Experience</h2>
                        <div className="space-y-8">
                            {experience.map((job, index) => (
                                <div key={index} className="cyber-border rounded-xl p-6">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-red-400">{job.role}</h3>
                                            <p className="text-lg text-gray-300">{job.company}</p>
                                        </div>
                                        <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full mt-2 md:mt-0">
                                            {job.period}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 mb-4">{job.description}</p>
                                    <ul className="space-y-2">
                                        {job.achievements.map((achievement, achIndex) => (
                                            <li key={achIndex} className="text-gray-300 flex items-start">
                                                <span className="text-red-400 mr-2">•</span>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Skills */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-red-400 mb-8">Technical Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Object.entries(skills).map(([category, skillList]) => (
                                <div key={category} className="cyber-border rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-red-400 mb-4">{category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillList.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Certifications */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-red-400 mb-8">Certifications</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {certifications.map((cert, index) => (
                                <div key={index} className="cyber-border rounded-lg p-4 flex items-center">
                                    <Award className="h-5 w-5 text-red-400 mr-3" />
                                    <span className="text-gray-300">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Selected Projects */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-red-400 mb-8">Selected Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project, index) => (
                                <div key={index} className="cyber-border rounded-xl p-6 hover:cyber-glow transition-all duration-300">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg font-bold text-red-400">{project.name}</h3>
                                        <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                                            {project.status}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs terminal-font"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Link
                                href="/projects"
                                className="inline-flex items-center px-6 py-3 cyber-border hover:cyber-glow text-red-400 hover:text-red-300 rounded-lg transition-all duration-200"
                            >
                                View All Projects
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="mb-16">
                        <div className="cyber-border rounded-xl p-8 text-center">
                            <h2 className="text-2xl font-bold text-red-400 mb-6">Let&apos;s Connect</h2>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                I&apos;m always interested in discussing cybersecurity, AI research, and potential
                                collaboration opportunities. Feel free to reach out!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="mailto:hello@devchris.net"
                                    className="px-6 py-3 bg-red-500 hover:bg-red-400 text-white rounded-lg font-semibold transition-all duration-200 cyber-glow"
                                >
                                    Get In Touch
                                </a>
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    className="px-6 py-3 cyber-border hover:cyber-glow text-red-400 hover:text-red-300 rounded-lg transition-all duration-200 flex items-center justify-center"
                                >
                                    <Download className="h-4 w-4 mr-2" />
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
