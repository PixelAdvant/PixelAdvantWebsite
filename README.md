# PixelAdvant Website

## 🌍 About This Project

Welcome to the **PixelAdvant** website - the Global Capability Centre (GCC) digital presence for one of India's leading recruitment agencies. This modern, responsive website showcases our recruitment services, expertise, and industry-leading solutions to clients and candidates worldwide.

### Company Overview

PixelAdvant operates as a Global Capability Centre, providing end-to-end recruitment solutions including:
- **Executive Search & Placements** - Finding top-tier talent for leadership positions
- **Staffing Solutions** - Temporary and permanent workforce management
- **Talent Acquisition** - Strategic hiring for organizational growth
- **HR Consulting** - Expert guidance on talent management strategies
- **Employer Branding** - Building strong employer brand presence

With a presence across India and serving global clients, we pride ourselves on connecting exceptional talent with leading organizations.

---

## 🚀 Features

- **Modern Responsive Design** - Mobile-first approach with seamless desktop experience
- **Service Showcases** - Detailed information about our recruitment services
- **Team Section** - Meet our experienced professionals
- **Project Portfolio** - Case studies and success stories
- **FAQ Section** - Answers to common client questions
- **Blog/News** - Industry insights and company updates
- **Contact Integration** - Easy ways to reach out and inquire
- **SEO Optimized** - Built for search engine visibility

---

## 📋 Prerequisites

Before running this project locally, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

### Verify Installation

```bash
node --version
npm --version
git --version
```

---

## 💻 Local Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/PixelAdvant/PixelAdvantWebsite.git
cd PixelAdvantWebsite
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Configure Environment (if needed)

Create a `.env.local` file in the root directory for any environment-specific configurations:

```bash
VITE_API_URL=http://localhost:3000
# Add other environment variables as needed
```

---

## 🏃 Running the Development Server

Start the local development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will typically run on `http://localhost:5173`

### What You'll See
- Live preview of the website
- Hot reload on file changes
- Development console for debugging

---

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code for style issues
npm run lint

# Format code (if configured)
npm run format
```

---

## 🏗️ Project Structure

```
PixelAdvantWebsite/
├── src/
│   ├── components/        # Reusable React components
│   ├── pages/            # Page components for routing
│   ├── layout/           # Layout components
│   ├── db/               # Static data files
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and libraries
│   ├── assets/           # CSS, images, and fonts
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Application entry point
├── public/               # Static assets
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

---

## 🛠️ Tech Stack

- **Frontend Framework** - React with TypeScript
- **Build Tool** - Vite (fast build and dev server)
- **Styling** - SCSS, CSS Animations
- **Routing** - React Router
- **UI Components** - Custom components + Swiper for carousels
- **Code Quality** - ESLint configuration included

---

## 📦 Building for Production

Create an optimized production build:

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Before Deploy

```bash
npm run preview
```

---

## 🚀 Deployment

The project includes a `vercel.json` configuration for seamless deployment to Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite and build settings
3. Your site will be live at `https://your-domain.vercel.app`

For other hosting platforms (Netlify, AWS, Azure, etc.), ensure the build output points to the `dist/` folder.

---

## 📝 Environment Variables

If you need to configure external APIs or services, create a `.env.local` file:

```env
VITE_API_URL=your_api_endpoint
VITE_PUBLIC_KEY=your_public_key
```

Note: Variables must start with `VITE_` to be exposed to the client side in Vite.

---

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use:
```bash
npm run dev -- --port 3000
```

### Node Modules Issues
Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Clear Vite cache:
```bash
rm -rf dist .vite
npm run build
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Commit changes: `git commit -m "Add your feature"`
3. Push to branch: `git push origin feature/your-feature-name`
4. Open a Pull Request

---

## 📞 Contact & Support

For inquiries about our recruitment services:
- **Website**: [PixelAdvant](https://pixeladvant.com)
- **Email**: contact@pixeladvant.com
- **LinkedIn**: [PixelAdvant](https://linkedin.com/company/pixeladvant)

---

## 📄 License

This project is proprietary to PixelAdvant. All rights reserved.

---

## 🙏 Acknowledgments

Built with modern web technologies to deliver an exceptional user experience. Special thanks to the development team and design partners who made this website possible.

---

**Last Updated**: February 2026
**Repository**: https://github.com/PixelAdvant/PixelAdvantWebsite