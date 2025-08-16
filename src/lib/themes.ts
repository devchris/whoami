// Theme system for DevChris.net
// Switch between different color schemes

export const themes = {
    // Original blue/cyan theme
    blue: {
        name: 'Blue Cyber',
        primary: {
            400: '#22d3ee', // cyan-400
            500: '#06b6d4', // cyan-500
            600: '#0891b2', // cyan-600
        },
        accent: {
            400: '#22d3ee',
            500: '#06b6d4',
        },
        glow: 'rgba(6, 182, 212, 0.4)',
        glowHover: 'rgba(6, 182, 212, 0.6)',
        border: 'rgba(6, 182, 212, 0.4)',
        borderHover: 'rgba(6, 182, 212, 0.6)',
        background: 'rgba(6, 182, 212, 0.1)',
        scrollbar: 'rgba(6, 182, 212, 0.5)',
        scrollbarHover: 'rgba(6, 182, 212, 0.7)',
        gradient: 'linear-gradient(45deg, #22d3ee, #06b6d4, #3b82f6)',
    },

    // New red/dangerous theme (currently active)
    red: {
        name: 'Red Danger',
        primary: {
            400: '#f87171', // red-400
            500: '#ef4444', // red-500
            600: '#dc2626', // red-600
        },
        accent: {
            400: '#f87171',
            500: '#ef4444',
        },
        glow: 'rgba(239, 68, 68, 0.4)',
        glowHover: 'rgba(239, 68, 68, 0.6)',
        border: 'rgba(239, 68, 68, 0.4)',
        borderHover: 'rgba(239, 68, 68, 0.6)',
        background: 'rgba(239, 68, 68, 0.1)',
        scrollbar: 'rgba(239, 68, 68, 0.5)',
        scrollbarHover: 'rgba(239, 68, 68, 0.7)',
        gradient: 'linear-gradient(45deg, #ef4444, #dc2626, #b91c1c)',
    }
} as const

export type ThemeName = keyof typeof themes
export type Theme = typeof themes[ThemeName]

// Current active theme - change this to switch themes
// export const currentTheme: ThemeName = 'blue'  // Original blue theme
export const currentTheme: ThemeName = 'red'     // Current red theme

export const getTheme = (): Theme => themes[currentTheme]

// CSS custom properties for the current theme
export const getThemeCSS = (): string => {
    const theme = getTheme()
    return `
    :root {
      --theme-primary-400: ${theme.primary[400]};
      --theme-primary-500: ${theme.primary[500]};
      --theme-primary-600: ${theme.primary[600]};
      --theme-accent-400: ${theme.accent[400]};
      --theme-accent-500: ${theme.accent[500]};
      --theme-glow: ${theme.glow};
      --theme-glow-hover: ${theme.glowHover};
      --theme-border: ${theme.border};
      --theme-border-hover: ${theme.borderHover};
      --theme-background: ${theme.background};
      --theme-scrollbar: ${theme.scrollbar};
      --theme-scrollbar-hover: ${theme.scrollbarHover};
      --theme-gradient: ${theme.gradient};
    }
  `
}

// Tailwind class mappings for themes
export const getThemeClasses = () => {
    const theme = currentTheme

    if (theme === 'blue') {
        return {
            primary: 'text-cyan-400',
            primaryHover: 'hover:text-cyan-300',
            primaryBg: 'bg-cyan-500',
            primaryBgHover: 'hover:bg-cyan-400',
            primaryBorder: 'border-cyan-500/20',
            primaryBgSubtle: 'bg-cyan-500/10',
            accent: 'text-cyan-400',
            accentHover: 'hover:text-cyan-400',
            floating: 'text-cyan-500/30',
        }
    } else {
        return {
            primary: 'text-red-400',
            primaryHover: 'hover:text-red-300',
            primaryBg: 'bg-red-500',
            primaryBgHover: 'hover:bg-red-400',
            primaryBorder: 'border-red-500/20',
            primaryBgSubtle: 'bg-red-500/10',
            accent: 'text-red-400',
            accentHover: 'hover:text-red-400',
            floating: 'text-red-500/30',
        }
    }
}
