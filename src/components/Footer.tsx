import Link from 'next/link'
import { Github, Linkedin, Mail, Shield, Terminal } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        {
            href: 'https://github.com/devchris',
            icon: Github,
            label: 'GitHub',
        },
        {
            href: 'https://linkedin.com/in/devchris',
            icon: Linkedin,
            label: 'LinkedIn',
        },
        {
            href: 'mailto:hello@devchris.net',
            icon: Mail,
            label: 'Email',
        },
    ]

    const quickLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/blog', label: 'Blog' },
    ]

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-4 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Shield className="h-6 w-6" style={{ color: 'var(--theme-primary-400)' }} />
                            <span className="text-lg font-bold gradient-text terminal-font">
                                DevChris.net
                            </span>
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            Senior Engineer II - Frontend at CrowdStrike and Founder of planubo.com. Built the entire platform solo as a side project. 
                            Currently exploring AI agents and intelligent systems.
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Terminal className="h-4 w-4" />
                            <span className="terminal-font">~/planubo/ai-agents/blog</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold" style={{ color: 'var(--theme-primary-400)' }}>Quick Links</h3>
                        <div className="space-y-2">
                            {quickLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="block text-gray-400 transition-colors duration-200 theme-hover"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold" style={{ color: 'var(--theme-primary-400)' }}>Connect</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map(({ href, icon: Icon, label }) => (
                                <a
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 text-gray-400 hover:bg-gray-700 transition-all duration-200 cyber-border hover:cyber-glow theme-hover"
                                    aria-label={label}
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                        <div className="text-sm text-gray-500">
                            <p>Available for consulting and collaboration</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-sm text-gray-500">
                            © {currentYear} DevChris.net. All rights reserved.
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                            <Link href="/privacy" className="transition-colors theme-hover">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="transition-colors theme-hover">
                                Terms of Service
                            </Link>
                            <span className="terminal-font">Built with ❤️</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
