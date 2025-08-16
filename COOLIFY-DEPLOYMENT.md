# Coolify Deployment Guide for DevChris.net

This guide walks you through deploying your personal security research website using Coolify on your own server.

## 🚀 Prerequisites

- Coolify installed and running on your server
- Domain name pointing to your server (devchris.net)
- Git repository hosted on GitHub/GitLab/Gitea

## 📋 Deployment Steps

### 1. Prepare Your Repository

Ensure your repository contains all the necessary files:
- `Dockerfile` - Container configuration
- `docker-compose.yml` - Service definition
- `.dockerignore` - Optimized build context
- All source code and dependencies

### 2. Configure Coolify Application

#### Create New Application

1. **Login to Coolify Dashboard**:
   - Open your Coolify instance in a web browser
   - Navigate to Applications → Add New Application

2. **Application Settings**:
   ```
   Name: devchris-net
   Description: Personal Security Research Website
   Repository: https://github.com/yourusername/devchris-net.git
   Branch: main
   ```

3. **Build Settings**:
   ```
   Build Pack: Docker
   Dockerfile: ./Dockerfile
   Docker Compose: ./docker-compose.yml
   Port: 3000
   ```

#### Environment Variables

Configure the following environment variables in Coolify:

```env
# Application
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0

# Optional: Analytics (if you want to add later)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: Contact form integration
# EMAILJS_SERVICE_ID=your-service-id
# EMAILJS_TEMPLATE_ID=your-template-id
# EMAILJS_PUBLIC_KEY=your-public-key
```

### 3. Domain Configuration

#### Set Up Custom Domain

1. **Add Domain in Coolify**:
   - Go to your application settings
   - Navigate to Domains section
   - Add `devchris.net` and `www.devchris.net`

2. **DNS Configuration**:
   Point your domain to your server:
   ```
   Type: A
   Name: @
   Value: YOUR_SERVER_IP
   TTL: 300

   Type: A
   Name: www
   Value: YOUR_SERVER_IP
   TTL: 300
   ```

3. **SSL Certificate**:
   Coolify automatically handles SSL certificates via Let's Encrypt.
   Ensure the certificate is generated and auto-renewal is enabled.

### 4. Reverse Proxy Configuration

Coolify uses Traefik as a reverse proxy. The labels in `docker-compose.yml` handle this automatically:

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.devchris-net.rule=Host(`devchris.net`) || Host(`www.devchris.net`)"
  - "traefik.http.routers.devchris-net.tls=true"
  - "traefik.http.routers.devchris-net.tls.certresolver=letsencrypt"
```

### 5. Deploy the Application

1. **Manual Deployment**:
   - In Coolify dashboard, go to your application
   - Click "Deploy" to trigger a manual deployment
   - Monitor the build logs for any issues

2. **Automatic Deployments**:
   - Enable webhook integration for automatic deployments
   - Configure your Git repository to trigger deployments on push to main

### 6. Content Management

#### Adding Blog Posts

1. **Direct File Access**:
   ```bash
   # SSH into your server
   ssh user@your-server.com
   
   # Navigate to the posts directory
   cd /path/to/coolify/data/devchris-net/posts
   
   # Add new markdown files
   nano new-post.md
   ```

2. **Git-Based Workflow** (Recommended):
   ```bash
   # On your local machine
   cd devchris-net
   
   # Add new blog post
   echo "---
   title: \"New Security Insight\"
   description: \"Latest research findings\"
   date: \"$(date +%Y-%m-%d)\"
   author: \"Chris\"
   tags: [\"Security\", \"Research\"]
   published: true
   ---
   
   # Your content here
   " > posts/new-security-insight.md
   
   # Commit and push
   git add posts/new-security-insight.md
   git commit -m "Add new blog post: New Security Insight"
   git push origin main
   ```

   The application will automatically redeploy with the new content.

#### Updating Project Information

Modify the project data in `src/app/projects/page.tsx` and push changes to trigger a redeploy.

## 🔧 Advanced Configuration

### Performance Optimization

1. **Enable Gzip Compression**:
   Add to your `docker-compose.yml`:
   ```yaml
   labels:
     - "traefik.http.middlewares.gzip.compress=true"
     - "traefik.http.routers.devchris-net.middlewares=gzip"
   ```

2. **Cache Headers**:
   Configure caching for static assets:
   ```yaml
   labels:
     - "traefik.http.middlewares.cache-headers.headers.customresponseheaders.Cache-Control=public, max-age=31536000"
   ```

### Security Hardening

1. **Security Headers**:
   The application includes security headers by default, but you can add more at the reverse proxy level:
   ```yaml
   labels:
     - "traefik.http.middlewares.security-headers.headers.customresponseheaders.X-Content-Type-Options=nosniff"
     - "traefik.http.middlewares.security-headers.headers.customresponseheaders.X-Frame-Options=DENY"
     - "traefik.http.middlewares.security-headers.headers.customresponseheaders.X-XSS-Protection=1; mode=block"
   ```

2. **Rate Limiting**:
   ```yaml
   labels:
     - "traefik.http.middlewares.rate-limit.ratelimit.burst=100"
     - "traefik.http.middlewares.rate-limit.ratelimit.average=50"
   ```

### Monitoring and Logs

1. **Application Logs**:
   ```bash
   # View application logs
   docker logs devchris-net -f
   
   # View Coolify logs
   cd /path/to/coolify && docker-compose logs -f
   ```

2. **Health Checks**:
   Add health check to `docker-compose.yml`:
   ```yaml
   healthcheck:
     test: ["CMD", "curl", "-f", "http://localhost:3000"]
     interval: 30s
     timeout: 10s
     retries: 3
     start_period: 40s
   ```

### Backup Strategy

1. **Content Backup**:
   ```bash
   # Backup blog posts and configuration
   tar -czf devchris-net-backup-$(date +%Y%m%d).tar.gz \
     posts/ \
     src/app/projects/page.tsx \
     src/app/about/page.tsx
   ```

2. **Database Backup** (if you add a database later):
   ```bash
   # Example for PostgreSQL
   docker exec postgres pg_dump -U user dbname > backup.sql
   ```

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**:
   ```bash
   # Check build logs in Coolify
   # Common issues: missing dependencies, TypeScript errors
   npm run build  # Test locally first
   ```

2. **SSL Certificate Issues**:
   ```bash
   # Force SSL certificate renewal
   docker exec coolify-traefik traefik validate --config-file=traefik.yml
   ```

3. **Domain Not Resolving**:
   ```bash
   # Check DNS propagation
   nslookup devchris.net
   dig devchris.net
   ```

4. **Application Not Starting**:
   ```bash
   # Check container logs
   docker logs devchris-net
   
   # Check if port is available
   netstat -tulpn | grep :3000
   ```

### Debug Mode

Enable debug logging by adding environment variable:
```env
DEBUG=1
NEXT_DEBUG=1
```

## 🔄 Updates and Maintenance

### Regular Updates

1. **Security Updates**:
   ```bash
   # Update dependencies monthly
   npm audit
   npm update
   ```

2. **System Updates**:
   ```bash
   # Update your server
   sudo apt update && sudo apt upgrade
   
   # Update Coolify
   cd /path/to/coolify && docker-compose pull && docker-compose up -d
   ```

### Scaling (Future)

If you need to scale later:

1. **Horizontal Scaling**:
   ```yaml
   # In docker-compose.yml
   deploy:
     replicas: 3
     update_config:
       parallelism: 1
       delay: 10s
   ```

2. **Load Balancing**:
   Coolify/Traefik automatically load balances multiple replicas.

## 📊 Monitoring

### Application Metrics

Add monitoring with Prometheus/Grafana:

1. **Metrics Endpoint**:
   ```javascript
   // Add to your Next.js app
   export async function GET() {
     return new Response('# HELP http_requests_total Total HTTP requests\n# TYPE http_requests_total counter\nhttp_requests_total 42\n')
   }
   ```

2. **Coolify Integration**:
   Coolify can integrate with monitoring stacks for alerts and metrics.

---

## 🎉 Your Website is Live!

After following this guide, your personal security research website should be accessible at:
- **Primary**: https://devchris.net
- **Fallback**: https://www.devchris.net (redirects to primary)

The website includes:
- ✅ Professional security researcher theme
- ✅ Markdown-based blog system
- ✅ Project showcase
- ✅ Responsive design
- ✅ SEO optimization
- ✅ SSL encryption
- ✅ Automatic deployments

Start sharing your security insights and showcasing your projects!

For any deployment issues or questions, check the Coolify documentation or reach out for support.
