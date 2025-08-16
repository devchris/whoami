'use client'

import { useState, useEffect } from 'react'
import { Palette } from 'lucide-react'

const ThemeSwitcher = () => {
    const [currentTheme, setCurrentTheme] = useState<'red' | 'blue'>('blue')

    // Initialize theme from DOM on mount
    useEffect(() => {
        const htmlElement = document.documentElement
        const initialTheme = htmlElement.getAttribute('data-theme') as 'red' | 'blue'
        if (initialTheme) {
            setCurrentTheme(initialTheme)
        }
    }, [])

    const switchTheme = () => {
        const newTheme = currentTheme === 'red' ? 'blue' : 'red'
        setCurrentTheme(newTheme)

        // Update CSS custom properties
        const root = document.documentElement

        if (newTheme === 'blue') {
            // Blue theme
            root.style.setProperty('--theme-primary-400', '#22d3ee')
            root.style.setProperty('--theme-primary-500', '#06b6d4')
            root.style.setProperty('--theme-primary-600', '#0891b2')
            root.style.setProperty('--theme-glow', 'rgba(6, 182, 212, 0.4)')
            root.style.setProperty('--theme-glow-hover', 'rgba(6, 182, 212, 0.6)')
            root.style.setProperty('--theme-border', 'rgba(6, 182, 212, 0.4)')
            root.style.setProperty('--theme-border-hover', 'rgba(6, 182, 212, 0.6)')
            root.style.setProperty('--theme-background', 'rgba(6, 182, 212, 0.1)')
            root.style.setProperty('--theme-scrollbar', 'rgba(6, 182, 212, 0.5)')
            root.style.setProperty('--theme-scrollbar-hover', 'rgba(6, 182, 212, 0.7)')
            root.style.setProperty('--theme-gradient', 'linear-gradient(45deg, #22d3ee, #06b6d4, #3b82f6)')
        } else {
            // Red theme
            root.style.setProperty('--theme-primary-400', '#f87171')
            root.style.setProperty('--theme-primary-500', '#ef4444')
            root.style.setProperty('--theme-primary-600', '#dc2626')
            root.style.setProperty('--theme-glow', 'rgba(239, 68, 68, 0.4)')
            root.style.setProperty('--theme-glow-hover', 'rgba(239, 68, 68, 0.6)')
            root.style.setProperty('--theme-border', 'rgba(239, 68, 68, 0.4)')
            root.style.setProperty('--theme-border-hover', 'rgba(239, 68, 68, 0.6)')
            root.style.setProperty('--theme-background', 'rgba(239, 68, 68, 0.1)')
            root.style.setProperty('--theme-scrollbar', 'rgba(239, 68, 68, 0.5)')
            root.style.setProperty('--theme-scrollbar-hover', 'rgba(239, 68, 68, 0.7)')
            root.style.setProperty('--theme-gradient', 'linear-gradient(45deg, #ef4444, #dc2626, #b91c1c)')
        }

        // Update Tailwind classes by toggling a data attribute
        root.setAttribute('data-theme', newTheme)
    }

    return (
        <button
            onClick={switchTheme}
            className="p-2 rounded-lg text-gray-300 hover:text-red-400 hover:bg-gray-800/50 transition-colors"
            title={`Switch to ${currentTheme === 'red' ? 'Blue' : 'Red'} theme`}
            aria-label="Toggle theme"
        >
            <Palette className="h-5 w-5" />
        </button>
    )
}

export default ThemeSwitcher
