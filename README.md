# DevChris.net - Personal Security Research Website

A professional website for Chris, Senior Software Engineer II at CrowdStrike, showcasing cybersecurity projects, AI research, and technical blog posts.

## 🚀 Features

- **Professional Security Theme**: Dark, cyber-inspired design with cyan accents
- **Markdown Blog System**: File-based blog posts with frontmatter support
- **Project Showcase**: Detailed project pages with GitHub integration
- **Responsive Design**: Optimized for desktop and mobile devices
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance Focused**: Built with Next.js 14 and optimized for speed

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom cyber theme
- **Markdown**: gray-matter + next-mdx-remote for blog posts
- **Icons**: Lucide React
- **Typography**: Inter + JetBrains Mono
- **Deployment**: Vercel (recommended) or Netlify

## 📁 Project Structure

```
devchris-net/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable React components
│   └── lib/                 # Utility functions
├── posts/                   # Markdown blog posts
├── types/                   # TypeScript type definitions
├── public/                  # Static assets
└── README.md
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/devchris/devchris-net.git
cd devchris-net
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Adding Blog Posts

Create new blog posts by adding Markdown files to the `posts/` directory:

```markdown
---
title: "Your Post Title"
description: "Brief description of your post"
date: "2024-01-15"
author: "Chris"
tags: ["Cybersecurity", "AI", "Security"]
readTime: "8 min read"
featured: true
published: true
---

# Your Post Content

Write your blog post content here using Markdown syntax.
```

### Frontmatter Fields

- `title`: Post title (required)
- `description`: Brief description for SEO and previews (required)
- `date`: Publication date in YYYY-MM-DD format (required)
- `author`: Author name (default: "Chris")
- `tags`: Array of tags for categorization
- `readTime`: Estimated reading time (auto-calculated if not provided)
- `featured`: Whether to feature on homepage (default: false)
- `published`: Whether the post is published (default: true)

## 🎨 Customization

### Theme Colors

The website uses a cybersecurity-inspired color scheme defined in `globals.css`:

- Primary: Cyan (`#06b6d4`)
- Background: Dark gray (`#111827`)
- Text: Light gray (`#f3f4f6`)
- Accents: Blue gradients

### Fonts

- **Body Text**: Inter (clean, professional)
- **Code/Terminal**: JetBrains Mono (monospace)

### Components

Key components are located in `src/components/`:

- `Navbar.tsx`: Navigation with responsive design
- `Footer.tsx`: Footer with social links and contact info
- Blog components for post rendering and listing

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure your custom domain (devchris.net)
4. Deploy automatically on every push

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out` (if using static export)
4. Configure your custom domain

### Domain Configuration

To use your custom domain (devchris.net):

1. **DNS Setup**: Point your domain to your hosting provider
   - For Vercel: Add CNAME record pointing to `cname.vercel-dns.com`
   - For Netlify: Add CNAME record pointing to your Netlify domain

2. **SSL Certificate**: Both Vercel and Netlify provide automatic SSL

3. **Environment Variables**: Set any required environment variables in your hosting dashboard

## 🔧 Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
# NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

## 📊 Analytics & SEO

The website includes:

- Structured metadata for SEO
- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD structured data (ready to add)

To add analytics:

1. Add your analytics ID to environment variables
2. Update the layout to include analytics script
3. Configure tracking for page views and events

## 🤝 Contributing

This is a personal website, but feedback and suggestions are welcome:

1. Open an issue for bugs or feature requests
2. Submit pull requests for improvements
3. Share feedback on design and user experience

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: hello@devchris.net
- **LinkedIn**: [linkedin.com/in/devchris](https://linkedin.com/in/devchris)
- **GitHub**: [github.com/devchris](https://github.com/devchris)

---

Built with ❤️ using Next.js, Tailwind CSS, and a passion for cybersecurity.