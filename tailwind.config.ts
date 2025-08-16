import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                gray: {
                    800: '#1f2937',
                    900: '#111827',
                },
                cyan: {
                    400: '#22d3ee',
                    500: '#06b6d4',
                },
                blue: {
                    400: '#60a5fa',
                },
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'jetbrains': ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}

export default config