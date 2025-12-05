# Victor Castañeda - Portfolio

A modern, responsive portfolio website built with React and Vite, featuring an animated asteroid theme in dark blue. This portfolio showcases my projects, skills, and professional experience.

## 🚀 Features

- **Animated Asteroid Background**: Dynamic canvas-based particle system
- **Dark Blue Space Theme**: Immersive cosmic design with glassmorphism effects
- **Responsive Design**: Fully responsive across all devices
- **GitHub Integration**: Automatically showcases projects from GitHub repositories
- **Downloadable CV**: Direct PDF download functionality
- **Smooth Animations**: Fade-in effects and smooth scrolling
- **Project Filtering**: Filter projects by technology stack
- **Contact Form**: Interactive contact section

## 🛠️ Technologies Used

- **React 18.3**: Modern React with hooks
- **Vite 5.4**: Fast build tool and dev server
- **React Icons**: Comprehensive icon library
- **CSS3**: Custom animations and glassmorphism effects
- **HTML5 Canvas**: For asteroid background animation

## 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Vidanilo10/portfolio.git
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 📂 Project Structure

```
portfolio/
├── public/
│   └── victor_castaneda-4-1.pdf    # Your CV
├── src/
│   ├── components/
│   │   ├── AsteroidBackground.jsx   # Animated background
│   │   ├── AsteroidBackground.css
│   │   ├── Navbar.jsx               # Navigation bar
│   │   ├── Navbar.css
│   │   ├── Hero.jsx                 # Landing section
│   │   ├── Hero.css
│   │   ├── About.jsx                # About section
│   │   ├── About.css
│   │   ├── Projects.jsx             # Projects showcase
│   │   ├── Projects.css
│   │   ├── Contact.jsx              # Contact form
│   │   └── Contact.css
│   ├── App.jsx                      # Main app component
│   ├── App.css                      # Global styles
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Base styles
├── index.html
├── vite.config.js
├── package.json
├── AWS_DEPLOYMENT_GUIDE.md          # AWS S3 deployment guide
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Navbar.jsx**: Update LinkedIn URL and contact information
2. **Hero.jsx**: Modify introduction text and skills
3. **About.jsx**: Update bio and technical skills
4. **Projects.jsx**: Projects are pulled from your GitHub repositories
5. **Contact.jsx**: Update email and location

### Modify Theme Colors

Edit the CSS variables in `index.css` and component CSS files:
- Primary blue: `#4a9eff`
- Dark blue background: `#0a1128`
- Accent blue: `#80bdff`

### Asteroid Animation Settings

In `AsteroidBackground.jsx`, adjust:
- Number of asteroids: Change loop count (default: 100)
- Asteroid size: Modify `size` property
- Movement speed: Adjust `speedX` and `speedY`

## 🌐 Deployment

### Deploy to AWS S3

Follow the comprehensive guide in `AWS_DEPLOYMENT_GUIDE.md` for step-by-step instructions on deploying to AWS S3 with optional CloudFront setup.

**Quick deployment:**

```bash
# Build the project
npm run build

# Copy CV to dist folder
copy victor_castaneda-4-1.pdf dist\

# Deploy to S3 (replace with your bucket name)
aws s3 sync dist/ s3://your-bucket-name/ --delete
```

### Other Deployment Options

- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: `npm install -g netlify-cli && netlify deploy`
- **GitHub Pages**: Use `gh-pages` package

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px

## 🎯 Performance

- Fast initial load with Vite
- Code splitting and lazy loading
- Optimized images and assets
- Minimal bundle size

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📄 CV Integration

Place your CV PDF (`victor_castaneda-4-1.pdf`) in the `public` folder. It will be:
1. Available for download via the Hero section button
2. Accessible from the Contact section
3. Automatically included in the production build

## 🌟 Featured Projects

The portfolio showcases these projects from your GitHub:

1. **AWS CDK E-commerce** - Infrastructure as Code with AWS CDK
2. **Django React Application** - Full-stack web development
3. **AWS HTTP API** - Serverless architecture
4. **Airline Backend System** - Complex backend development
5. **Stori Flow** - Workflow automation
6. **MO Technical Challenge** - Problem-solving showcase
7. **ORM Project** - Database abstraction patterns

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📝 License

This project is open source and available under the MIT License.

## 📧 Contact

- **GitHub**: [@Vidanilo10](https://github.com/Vidanilo10)
- **Email**: your.email@example.com
- **LinkedIn**: [Your Profile](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing fast build tool
- Icons by React Icons
- Inspired by modern space-themed designs

---

**Built with ❤️ by Victor Castañeda**
