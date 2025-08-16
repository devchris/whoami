# Deployment Guide for DevChris.net

This guide walks you through deploying your personal security research website to production.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)

Vercel provides the best experience for Next.js applications with automatic deployments and great performance.

#### Steps:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial website setup"
   git remote add origin https://github.com/yourusername/devchris-net.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure settings
   - Click "Deploy"

3. **Configure Custom Domain**:
   - In Vercel dashboard, go to your project
   - Navigate to "Settings" → "Domains"
   - Add "devchris.net" and "www.devchris.net"
   - Follow DNS configuration instructions

#### Domain DNS Configuration:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61

Type: A
Name: @
Value: 76.223.126.88
```

### Option 2: Netlify

Alternative deployment platform with similar features.

#### Steps:

1. **Connect Repository**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**:
   ```
   Build command: npm run build
   Publish directory: .next
   Node version: 18.x
   ```

3. **Domain Configuration**:
   - In Netlify dashboard, go to "Domain settings"
   - Add custom domain "devchris.net"
   - Configure DNS records as instructed

### Option 3: Static Export (Any Host)

For hosting on static file servers or CDNs.

#### Steps:

1. **Configure for Static Export**:
   Update `next.config.js`:
   ```javascript
   module.exports = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   ```

2. **Build Static Files**:
   ```bash
   npm run build
   ```

3. **Deploy `out/` folder** to your hosting provider.

## 🔧 Environment Configuration

### Environment Variables

Create production environment variables:

```env
# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_UMAMI_ID=your-umami-id

# Contact Form (Optional)
EMAILJS_SERVICE_ID=your-service-id
EMAILJS_TEMPLATE_ID=your-template-id
EMAILJS_PUBLIC_KEY=your-public-key

# Security
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://devchris.net
```

### Security Headers

The `vercel.json` file includes security headers:
- Content Security Policy
- XSS Protection
- Frame Options
- Content Type Options

## 📊 Performance Optimization

### Image Optimization

1. **Optimize Images**:
   ```bash
   # Install image optimization tools
   npm install -g imagemin-cli imagemin-webp
   
   # Optimize images in public folder
   imagemin public/images/* --out-dir=public/images/optimized --plugin=webp
   ```

2. **Use Next.js Image Component**:
   ```jsx
   import Image from 'next/image'
   
   <Image
     src="/images/project-screenshot.jpg"
     alt="Project Screenshot"
     width={800}
     height={600}
     placeholder="blur"
   />
   ```

### Performance Monitoring

Add performance monitoring with Vercel Analytics:
1. Install Vercel Analytics: `npm install @vercel/analytics`
2. Add to layout.tsx:
   ```jsx
   import { Analytics } from '@vercel/analytics/react'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     )
   }
   ```

## 🔍 SEO Optimization

### Google Search Console

1. **Verify Ownership**:
   - Add `google-site-verification` meta tag to layout.tsx
   - Or upload verification file to public folder

2. **Submit Sitemap**:
   - Create sitemap.xml in public folder
   - Submit to Google Search Console

### Schema.org Structured Data

Add JSON-LD structured data for better SEO:

```jsx
// In layout.tsx or individual pages
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Chris",
  "jobTitle": "Senior Software Engineer II",
  "worksFor": {
    "@type": "Organization",
    "name": "CrowdStrike"
  },
  "url": "https://devchris.net",
  "sameAs": [
    "https://linkedin.com/in/devchris",
    "https://github.com/devchris"
  ]
}
```

## 🔒 Security Considerations

### Content Security Policy

Add CSP headers for enhanced security:

```javascript
// In next.config.js
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self';
    `.replace(/\s{2,}/g, ' ').trim()
  }
]
```

### Rate Limiting

Implement rate limiting for contact forms and API endpoints:

```javascript
// lib/rateLimit.js
export function rateLimit(limit = 5, windowMs = 15 * 60 * 1000) {
  // Rate limiting implementation
}
```

## 📈 Analytics Setup

### Google Analytics 4

1. **Create GA4 Property**
2. **Add Tracking Code**:
   ```jsx
   // components/Analytics.tsx
   import Script from 'next/script'
   
   export default function Analytics() {
     return (
       <>
         <Script
           src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
           strategy="afterInteractive"
         />
         <Script id="google-analytics" strategy="afterInteractive">
           {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${GA_ID}');
           `}
         </Script>
       </>
     )
   }
   ```

### Umami Analytics (Privacy-Focused Alternative)

Self-hosted analytics solution:
1. Deploy Umami to your server
2. Add tracking script to your site
3. Monitor visitor analytics with privacy compliance

## 🚀 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
      - run: npm run type-check
```

### Automated Testing

Add automated tests:

```bash
# Install testing dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

# Run tests in CI/CD
npm test
```

## 🔧 Maintenance

### Regular Updates

1. **Dependencies**:
   ```bash
   npm update
   npm audit fix
   ```

2. **Security Patches**:
   ```bash
   npm audit
   npx npm-check-updates -u
   ```

3. **Performance Monitoring**:
   - Monitor Core Web Vitals
   - Check Lighthouse scores
   - Monitor uptime and response times

### Backup Strategy

1. **Code**: Stored in GitHub
2. **Content**: Blog posts in markdown files
3. **Configuration**: Environment variables documented

## 📞 Support

If you encounter deployment issues:

1. Check Vercel/Netlify deployment logs
2. Verify DNS propagation: `nslookup devchris.net`
3. Test locally: `npm run build && npm start`
4. Check browser console for errors

---

**Your website is now ready for production! 🎉**

Visit https://devchris.net to see your live security research website.
