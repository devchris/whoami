#!/bin/bash

# DevChris.net Coolify Deployment Script
# This script helps deploy your website to Coolify

echo "🚀 DevChris.net Coolify Deployment"
echo "=================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Error: Docker is not running. Please start Docker and try again."
    exit 1
fi

echo "📋 Pre-deployment checklist:"
echo "✅ Docker is running"
echo "✅ Project files found"

# Test build locally
echo "🔨 Testing local build..."
if npm run build; then
    echo "✅ Build successful"
else
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi

# Test Docker build
echo "🐳 Testing Docker build..."
if docker build -t devchris-net-test .; then
    echo "✅ Docker build successful"
    docker rmi devchris-net-test > /dev/null 2>&1
else
    echo "❌ Docker build failed. Please check Dockerfile."
    exit 1
fi

echo ""
echo "🎉 Pre-deployment tests passed!"
echo ""
echo "📝 Next steps for Coolify deployment:"
echo "1. Push your code to Git repository"
echo "2. In Coolify dashboard:"
echo "   - Create new application"
echo "   - Connect your Git repository"
echo "   - Set build pack to 'Docker'"
echo "   - Configure domain: devchris.net"
echo "   - Deploy!"
echo ""
echo "📚 For detailed instructions, see: COOLIFY-DEPLOYMENT.md"
echo ""
echo "🌐 Your website will be live at: https://devchris.net"

# Cleanup
rm -rf .next
