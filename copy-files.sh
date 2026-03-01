#!/bin/bash

# MERN Review System - Frontend File Copy Script
# This script copies all frontend files from the original repository

echo "🚀 Starting file copy process..."

# Check if original repo exists
if [ ! -d "../mern-review-system" ]; then
    echo "📥 Cloning original repository..."
    git clone https://github.com/Aryankaushik541/mern-review-system.git ../mern-review-system-temp
    ORIGINAL_DIR="../mern-review-system-temp"
    CLEANUP=true
else
    ORIGINAL_DIR="../mern-review-system"
    CLEANUP=false
fi

# Copy pages directory
echo "📁 Copying pages directory..."
if [ -d "$ORIGINAL_DIR/client/src/pages" ]; then
    cp -r "$ORIGINAL_DIR/client/src/pages" ./src/
    echo "✅ Pages copied successfully!"
else
    echo "❌ Error: Pages directory not found in original repo"
    exit 1
fi

# Cleanup if we cloned temporarily
if [ "$CLEANUP" = true ]; then
    echo "🧹 Cleaning up temporary files..."
    rm -rf ../mern-review-system-temp
fi

echo "✨ File copy complete!"
echo ""
echo "Next steps:"
echo "1. Run: npm install"
echo "2. Configure .env file"
echo "3. Run: npm start"
