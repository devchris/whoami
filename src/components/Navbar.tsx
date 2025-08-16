'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Shield, Menu, X, Terminal, Code, User, BookOpen } from 'lucide-react'
import ThemeSwitcher from './ThemeSwitcher'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '/', label: 'Home', icon: Terminal },
        { href: '/about', label: 'About', icon: User },
        { href: '/projects', label: 'Projects', icon: Code },
        { href: '/blog', label: 'Blog', icon: BookOpen },
    ]

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/'
        return pathname.startsWith(href)
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-gray-900/95 backdrop-blur-md border-b cyber-glow'
            : 'bg-transparent'
            }`} style={scrolled ? { borderBottomColor: 'var(--theme-border)' } : {}}>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="relative">
                            <Shield className="h-8 w-8 transition-transform group-hover:scale-110" style={{ color: 'var(--theme-primary-400)' }} />
                            <div className="absolute inset-0 rounded-full blur-lg transition-colors" style={{ backgroundColor: 'var(--theme-background)', opacity: 0.7 }}></div>
                        </div>
                        <span className="text-xl font-bold gradient-text terminal-font">
                            DevChris.net
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map(({ href, label, icon: Icon }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 group nav-link ${isActive(href)
                                    ? 'cyber-border'
                                    : 'text-gray-300 hover:bg-gray-800/50'
                                    }`}
                                style={isActive(href) ? {
                                    color: 'var(--theme-primary-400)',
                                    backgroundColor: 'var(--theme-background)'
                                } : {}}
                            >
                                <Icon className="h-4 w-4" />
                                <span className="font-medium">{label}</span>
                            </Link>
                        ))}

                        {/* Theme Switcher */}
                        <ThemeSwitcher />
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800/50 transition-colors theme-hover"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b cyber-glow" style={{ borderBottomColor: 'var(--theme-border)' }}>
                        <div className="px-4 py-4 space-y-2">
                            {navLinks.map(({ href, label, icon: Icon }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive(href)
                                        ? 'cyber-border'
                                        : 'text-gray-300 hover:bg-gray-800/50'
                                        }`}
                                    style={isActive(href) ? {
                                        color: 'var(--theme-primary-400)',
                                        backgroundColor: 'var(--theme-background)'
                                    } : {}}
                                >
                                    <Icon className="h-5 w-5" />
                                    <span className="font-medium">{label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
