# 🚀 Space Intro Portfolio

> Embark on a cosmic journey through my UX/UI design universe with stunning 3D parallax effects

**🌐 Live Portfolio:**
- **Netlify:** [https://space-intro.netlify.app/](https://space-intro.netlify.app/)
- **GitHub Pages:** [https://vikas9793.github.io/space-intro/](https://vikas9793.github.io/space-intro/)

A cinematic space-themed portfolio website built with Next.js 15, featuring immersive scroll animations and 3D parallax effects.

## ✨ Features

- 🌌 **Cinematic Space Journey**: Scroll through black holes, nebulas, galaxies, and solar systems
- 🎨 **3D Parallax Effects**: Stunning depth and motion with Framer Motion
- ⚡ **Next.js 15**: Built with the latest App Router and React Server Components
- 🎭 **Responsive Design**: Optimized for all devices
- 🚀 **Performance Optimized**: Static generation for lightning-fast load times

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.5
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Icons**: Lucide React


## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/VIKAS9793/space-intro.git
cd space-intro

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```



## 📦 Deployment

### 🔷 GitHub Pages (Automated)

The project is configured for automatic deployment to GitHub Pages:

1. Go to your repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` branch - the site will automatically build and deploy
4. Your site will be available at: `https://VIKAS9793.github.io/space-intro/`

The GitHub Actions workflow (`.github/workflows/github-pages.yml`) handles the build and deployment automatically.

### 🟢 Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/VIKAS9793/space-intro)

**Manual Deployment:**

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod --dir=out
   ```

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `.next`

### 🐳 Docker

```bash
# Build Docker image
docker build -t space-intro .

# Run container
docker run -p 3000:3000 space-intro
```

### 📤 Static Export

For static hosting (GitHub Pages, AWS S3, etc.):

1. Add to `next.config.js`:
   ```js
   output: 'export'
   ```

2. Build and export:
   ```bash
   npm run build
   ```

3. Deploy the `out/` directory to your hosting provider.

## 📂 Project Structure

```
space-intro/
├── app/
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main page with space animation
├── lib/               # Utility functions
├── public/            # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml # CI/CD workflow
└── next.config.js     # Next.js configuration
```

## 🎨 Customization

### Colors

Update Tailwind colors in `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      // Your custom colors
    }
  }
}
```

### Content

Edit `app/page.tsx` to customize:
- Hero text
- Project sections
- Contact information

## 📧 Contact

**VIKAS SAHANI**

- Email: [vikassahani17@gmail.com](mailto:vikassahani17@gmail.com)
- GitHub: [@VIKAS9793](https://github.com/VIKAS9793)
- LinkedIn: [vikas-sahani-727420358](https://www.linkedin.com/in/vikas-sahani-727420358)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Space images from [Unsplash](https://unsplash.com)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Built with [Next.js](https://nextjs.org)

---

Made with 💙 by [VIKAS SAHANI](https://github.com/VIKAS9793) | © 2025
