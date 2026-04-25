#!/bin/bash

# ── PixelAdvant Hostinger Deployment Script ────────────────────────────────
# This script automates the deployment process to Hostinger server

set -e  # Exit on error

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
REMOTE_HOST="${REMOTE_HOST:-your_username@your_domain.com}"
REMOTE_PATH="${REMOTE_PATH:-~/public_html}"
BACKEND_PATH="${REMOTE_PATH}/api"

echo -e "${YELLOW}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${YELLOW}║     PixelAdvant - Hostinger Deployment Script           ║${NC}"
echo -e "${YELLOW}╚══════════════════════════════════════════════════════════╝${NC}"

# Step 1: Check prerequisites
echo -e "\n${YELLOW}[1/6]${NC} Checking prerequisites..."
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git is not installed${NC}"
    exit 1
fi
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Prerequisites verified${NC}"

# Step 2: Commit changes
echo -e "\n${YELLOW}[2/6]${NC} Committing changes..."
read -p "Enter commit message (or press Enter for 'Deploy to Hostinger'): " COMMIT_MSG
COMMIT_MSG="${COMMIT_MSG:-Deploy to Hostinger}"
git add .
git commit -m "$COMMIT_MSG" || true
echo -e "${GREEN}✓ Changes committed${NC}"

# Step 3: Build the project
echo -e "\n${YELLOW}[3/6]${NC} Building project..."
npm install
npm run build
if [ -d "dist" ]; then
    echo -e "${GREEN}✓ Frontend build successful (dist/ folder created)${NC}"
else
    echo -e "${RED}❌ Frontend build failed${NC}"
    exit 1
fi

# Step 4: Build backend
echo -e "\n${YELLOW}[4/6]${NC} Preparing backend..."
cd backend
npm install
cd ..
echo -e "${GREEN}✓ Backend dependencies installed${NC}"

# Step 5: Push to Git
echo -e "\n${YELLOW}[5/6]${NC} Pushing to repository..."
git push origin main
echo -e "${GREEN}✓ Code pushed to repository${NC}"

# Step 6: Deploy to Hostinger via SSH
echo -e "\n${YELLOW}[6/6]${NC} Deploying to Hostinger..."
echo "Remote: $REMOTE_HOST:$REMOTE_PATH"

# Create the script that will run on the server
DEPLOY_CMD=$(cat <<'EOF'
# Deployment commands to run on server
cd ~/public_html

# Pull latest code
git pull origin main || (rm -rf .git && git clone <your-repo-url> .)

# Update frontend
cp -r dist/* ./
rm -rf dist node_modules

# Update backend
cd api
npm install
pm2 restart pixeladvant-api || pm2 start server.js --name "pixeladvant-api"
cd ..

# Verify
pm2 logs pixeladvant-api --lines 10
EOF
)

# Show instructions for manual deployment if SSH fails
echo -e "\n${YELLOW}Automated SSH deployment:${NC}"
echo "Executing on: $REMOTE_HOST"

if ssh "$REMOTE_HOST" bash -c "cd ~/public_html && git pull origin main && cd api && npm install && pm2 restart pixeladvant-api" 2>/dev/null; then
    echo -e "${GREEN}✓ Deployment successful${NC}"
else
    echo -e "${YELLOW}⚠ SSH deployment requires manual execution${NC}"
    echo -e "\n${YELLOW}Manual deployment steps:${NC}"
    echo "1. SSH into your server: ssh $REMOTE_HOST"
    echo "2. Run these commands:"
    echo "   cd ~/public_html"
    echo "   git pull origin main"
    echo "   cd api"
    echo "   npm install"
    echo "   pm2 restart pixeladvant-api"
fi

echo -e "\n${GREEN}╔══════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║              Deployment Complete! 🎉                    ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════════════════════════╝${NC}"
echo -e "\n${YELLOW}Next steps:${NC}"
echo "1. Verify your domain is accessible: https://yourdomain.com"
echo "2. Test API endpoints: https://yourdomain.com/api/health"
echo "3. Check logs: ssh $REMOTE_HOST 'pm2 logs pixeladvant-api'"
echo ""
