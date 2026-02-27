# Vatech Clone

A modern React-based website clone project built with React 18 and configured for Netlify deployment.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Components](#components)
- [Netlify Deployment](#netlify-deployment)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

This is a React-based website clone project featuring multiple sections including hero sections, services, case studies, testimonials, team section, blog, and more. The project is fully configured for deployment on Netlify.

## ✨ Features

- 🎨 Modern and responsive UI design
- ⚡ Built with React 18
- 🚀 Optimized for production
- 📱 Mobile-friendly responsive layout
- 🌐 Ready for Netlify deployment
- 🎭 Multiple interactive sections:
  - Hero sections
  - Navigation bar
  - About section
  - Services
  - Case studies
  - Team section
  - Testimonials
  - Video section
  - Blog section
  - Contact form
  - Footer

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git**

### Check your versions:

```bash
node --version
npm --version
git --version
```

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Hamzadevolperweb/vatech-clone.git
```

### 2. Navigate to the project directory

```bash
cd vatech-clone
```

### 3. Install dependencies

```bash
npm install
```

This will install all the required dependencies including:
- React 18.2.0
- React DOM 18.2.0
- React Scripts 5.0.1

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

```bash
npm start
```

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

```bash
npm run build
```

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```bash
npm test
```

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

```bash
npm run eject
```

## 📁 Project Structure

```
vatech-clone/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── AboutSection.jsx    # About section component
│   ├── AboutSection.css    # About section styles
│   ├── App.js              # Main App component
│   ├── App.css             # App styles
│   ├── BlogS.jsx           # Blog section component
│   ├── BlogS.css           # Blog section styles
│   ├── CaseStudy.jsx       # Case study component
│   ├── CaseStudy.css       # Case study styles
│   ├── Contect.jsx         # Contact component
│   ├── Contect.css         # Contact styles
│   ├── Footer.jsx          # Footer component
│   ├── Footer.css          # Footer styles
│   ├── Hero.jsx            # Hero section component
│   ├── Hero.css            # Hero section styles
│   ├── Hero2.jsx           # Second hero component
│   ├── index.js            # React entry point
│   ├── index.css           # Global styles
│   ├── Marquee.jsx         # Marquee component
│   ├── Marquee.css         # Marquee styles
│   ├── Navbar.jsx          # Navigation bar component
│   ├── Navbar.css          # Navigation bar styles
│   ├── Services.jsx        # Services component
│   ├── Services.css        # Services styles
│   ├── TeamSection.jsx     # Team section component
│   ├── TeamSection.css     # Team section styles
│   ├── Testimonial.jsx     # Testimonials component
│   ├── Testimonial.css     # Testimonials styles
│   ├── VedioS.jsx          # Video section component
│   └── VedioS.css          # Video section styles
├── .gitignore              # Git ignore rules
├── netlify.toml            # Netlify configuration
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## 🧩 Components

The project consists of the following main components:

- **Navbar** - Navigation bar with menu items
- **Hero** - Main hero section
- **Hero2** - Secondary hero section
- **Marquee** - Scrolling marquee component
- **AboutSection** - About us section
- **Services** - Services showcase
- **CaseStudy** - Case studies section
- **TeamSection** - Team members section
- **Testimonial** - Customer testimonials
- **VedioS** - Video section
- **BlogS** - Blog posts section
- **Contect** - Contact form section
- **Footer** - Footer with links and copyright

## 🌐 Netlify Deployment

This project is pre-configured for easy deployment on Netlify.

### Configuration

The `netlify.toml` file contains:
- **Build Command**: `npm run build`
- **Publish Directory**: `build`
- **Node Version**: 18
- **SPA Redirects**: Configured for client-side routing

### Deployment Methods

#### Option 1: Deploy via Netlify UI (Recommended)

1. Go to [Netlify](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub account and select this repository
4. Netlify will automatically detect the settings from `netlify.toml`
5. Click **"Deploy site"**
6. Your site will be live in a few minutes!

#### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Initialize the site:
   ```bash
   netlify init
   ```

4. Deploy to production:
   ```bash
   netlify deploy --prod
   ```

#### Option 3: Deploy via Git Push

1. Connect your repository to Netlify
2. Every push to the main branch will trigger an automatic deployment
3. Netlify will build and deploy your site automatically

### Environment Variables

If you need to set environment variables:

1. Go to **Site settings** → **Environment variables** in Netlify dashboard
2. Add your variables (e.g., API keys, secrets)
3. They will be available during build and runtime

### Build Settings

- **Base directory**: (leave empty)
- **Build command**: `npm run build`
- **Publish directory**: `build`
- **Node version**: 18

## 🛠️ Technologies Used

- **React** 18.2.0 - JavaScript library for building user interfaces
- **React DOM** 18.2.0 - React renderer for web
- **React Scripts** 5.0.1 - Configuration and scripts for Create React App
- **CSS3** - Styling and animations
- **Netlify** - Hosting and deployment platform

## 🔧 Development

### Making Changes

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes

3. Test locally:
   ```bash
   npm start
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Commit your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

6. Push to GitHub:
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Style

- Use functional components with hooks
- Follow React best practices
- Keep components modular and reusable
- Use meaningful variable and function names

## 📝 Troubleshooting

### Common Issues

**Issue**: `npm install` fails
- **Solution**: Make sure you have Node.js 18+ installed. Try deleting `node_modules` and `package-lock.json`, then run `npm install` again.

**Issue**: Build fails on Netlify
- **Solution**: Check that your `netlify.toml` is correct and Node version matches (18).

**Issue**: Styles not loading
- **Solution**: Make sure all CSS files are imported in their respective components.

**Issue**: Components not rendering
- **Solution**: Check that all imports are correct and components are exported properly.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Hamzadevolperweb**

- GitHub: [@Hamzadevolperweb](https://github.com/Hamzadevolperweb)

## 🙏 Acknowledgments

- React team for the amazing framework
- Netlify for seamless deployment
- All contributors and supporters

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the [Netlify Deployment Guide](NETLIFY_DEPLOYMENT.md)

---

**Happy Coding! 🚀**
