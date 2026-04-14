#!/bin/bash

# Setup và khởi động DTC Viewer

echo "🚀 DTC Documentation Viewer - Setup Guide"
echo "=========================================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js không được cài đặt!"
    exit 1
fi

echo "✅ Node.js: $(node -v)"
echo "✅ npm: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Cài đặt dependencies..."
npm install --legacy-peer-deps

echo ""
echo "✅ Setup hoàn tất!"
echo ""
echo "🎯 Để khởi động ứng dụng:"
echo ""
echo "  npm run dev"
echo ""
echo "Ứng dụng sẽ chạy trên:"
echo "  - Frontend: http://localhost:8080"
echo "  - API Server: http://localhost:3001"
echo ""
echo "📚 Để tìm hiểu thêm, xem: DTC_VIEWER_README.md"
