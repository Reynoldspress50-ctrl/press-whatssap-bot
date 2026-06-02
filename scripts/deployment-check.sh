#!/bin/bash

# WhatsApp Bot Quick Deployment Checklist
# Run this script to verify all deployment requirements

echo ""
echo "====================================="
echo "  🚀 WhatsApp Bot Deployment Check  "
echo "====================================="
echo ""

# Counter for checks
PASSED=0
FAILED=0

# Check 1: Node.js installed
echo "[1/10] Checking Node.js installation..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo "✅ Node.js installed: $NODE_VERSION"
    ((PASSED++))
else
    echo "❌ Node.js NOT installed"
    echo "   Install from: https://nodejs.org/"
    ((FAILED++))
fi

# Check 2: npm installed
echo ""
echo "[2/10] Checking npm installation..."
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    echo "✅ npm installed: $NPM_VERSION"
    ((PASSED++))
else
    echo "❌ npm NOT installed"
    ((FAILED++))
fi

# Check 3: Git installed
echo ""
echo "[3/10] Checking Git installation..."
if command -v git &> /dev/null; then
    GIT_VERSION=$(git --version)
    echo "✅ Git installed: $GIT_VERSION"
    ((PASSED++))
else
    echo "❌ Git NOT installed"
    ((FAILED++))
fi

# Check 4: package.json exists
echo ""
echo "[4/10] Checking package.json..."
if [ -f "package.json" ]; then
    echo "✅ package.json found"
    ((PASSED++))
else
    echo "❌ package.json NOT found"
    ((FAILED++))
fi

# Check 5: node_modules installed
echo ""
echo "[5/10] Checking node_modules..."
if [ -d "node_modules" ]; then
    echo "✅ Dependencies installed"
    ((PASSED++))
else
    echo "⚠️  node_modules NOT found"
    echo "   Run: npm install"
    ((FAILED++))
fi

# Check 6: .env file exists
echo ""
echo "[6/10] Checking .env file..."
if [ -f ".env" ]; then
    echo "✅ .env file found"
    ((PASSED++))
else
    echo "⚠️  .env file NOT found"
    echo "   Run: cp .env.example .env (if available)"
    ((FAILED++))
fi

# Check 7: index.js exists
echo ""
echo "[7/10] Checking index.js..."
if [ -f "index.js" ]; then
    echo "✅ index.js found"
    ((PASSED++))
else
    echo "❌ index.js NOT found"
    ((FAILED++))
fi

# Check 8: logs directory
echo ""
echo "[8/10] Checking logs directory..."
if [ -d "logs" ]; then
    echo "✅ logs directory exists"
    ((PASSED++))
else
    echo "⚠️  logs directory NOT found"
    echo "   Creating logs directory..."
    mkdir -p logs
    echo "✅ logs directory created"
    ((PASSED++))
fi

# Check 9: README.md
echo ""
echo "[9/10] Checking README.md..."
if [ -f "README.md" ]; then
    echo "✅ README.md found"
    ((PASSED++))
else
    echo "⚠️  README.md NOT found"
    ((FAILED++))
fi

# Check 10: PM2 installed (optional)
echo ""
echo "[10/10] Checking PM2 installation..."
if command -v pm2 &> /dev/null; then
    PM2_VERSION=$(pm2 --version)
    echo "✅ PM2 installed: $PM2_VERSION"
    ((PASSED++))
else
    echo "⚠️  PM2 NOT installed (optional but recommended)"
    echo "   Install with: sudo npm install -g pm2"
fi

# Summary
echo ""
echo "====================================="
echo "  📊 Deployment Checklist Summary"
echo "====================================="
echo "✅ Passed: $PASSED"
echo "❌ Failed: $FAILED"
echo ""

if [ $FAILED -eq 0 ]; then
    echo "🎉 All checks passed! Ready to deploy!"
    echo ""
    echo "Next steps:"
    echo "1. npm start          - Run the bot"
    echo "2. Scan QR code       - Link WhatsApp"
    echo "3. pm2 start index.js - Run with PM2 (production)"
    exit 0
else
    echo "⚠️  Please fix the issues above before deploying."
    exit 1
fi
