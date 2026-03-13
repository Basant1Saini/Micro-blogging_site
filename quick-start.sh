#!/bin/bash

echo "🚀 Micro-blogging Site - Quick Start Script"
echo "==========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18 or higher."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Check if MongoDB is running (optional check)
echo "📦 Installing Backend Dependencies..."
cd backend
npm install
if [ $? -eq 0 ]; then
    echo "✅ Backend dependencies installed successfully!"
else
    echo "❌ Failed to install backend dependencies"
    exit 1
fi
echo ""

echo "📦 Installing Frontend Dependencies..."
cd ../frontend
npm install
if [ $? -eq 0 ]; then
    echo "✅ Frontend dependencies installed successfully!"
else
    echo "❌ Failed to install frontend dependencies"
    exit 1
fi
echo ""

echo "✅ Installation Complete!"
echo ""
echo "📝 Next Steps:"
echo "1. Configure backend/.env with your credentials"
echo "2. Start MongoDB (if using local instance)"
echo "3. Run 'cd backend && npm run dev' in one terminal"
echo "4. Run 'cd frontend && npm run dev' in another terminal"
echo "5. Open http://localhost:5173 in your browser"
echo ""
echo "📚 For detailed instructions, see SETUP.md"
echo ""
echo "Happy Coding! 🎉"
