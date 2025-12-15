# 🎨 Portfolio Visual Guide

## Color Palette

### Primary Colors
- **Deep Space Blue**: `#0a1128` - Main background
- **Cosmic Blue**: `#001f54` - Gradient accent
- **Nebula Blue**: `#034078` - Section backgrounds
- **Bright Asteroid**: `#4a9eff` - Primary highlights
- **Light Comet**: `#80bdff` - Hover states
- **Star White**: `#ffffff` - Main text
- **Nebula Gray**: `#b0c4de` - Secondary text

### Glass Effect
- Background: `rgba(26, 40, 71, 0.6)`
- Border: `rgba(74, 158, 255, 0.2)`
- Backdrop blur: 10px

## Component Layouts

### 1. Navbar (Fixed Top)
```
┌─────────────────────────────────────────────────────┐
│ Victor Castañeda    Home About Projects Contact  ⓖⓛⓔ │
└─────────────────────────────────────────────────────┘
- Height: Auto, Padding: 1rem
- Sticky on scroll with blur effect
- Social icons: GitHub, LinkedIn, Email
```

### 2. Hero Section (Full Height)
```
┌──────────────────────┬──────────────────────┐
│  Hi, I'm             │  ┌─────────────────┐ │
│  Victor Castañeda 🚀 │  │ const developer │ │
│  Software Engineer   │  │ = {             │ │
│                      │  │   name: "..."   │ │
│  [View Work] [CV]    │  │   skills: [...]  │ │
│                      │  │ }               │ │
└──────────────────────┴──┴─────────────────┘─┘
- Grid: 2 columns (1 on mobile)
- Floating code card with animation
- Animated rocket icon
```

### 3. About Section
```
┌─────────────────────────────────────────────┐
│              About Me                        │
│  ┌─────────────────────────────────────┐   │
│  │ Bio text with paragraphs...         │   │
│  └─────────────────────────────────────┘   │
│                                              │
│         Technical Skills                     │
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐      │
│  │ 🐍│ │JS │ │TS │ │⚛️ │ │🌱│ │🍃│      │
│  └───┘ └───┘ └───┘ └───┘ └───┘ └───┘      │
│  ┌───┐ ┌───┐ ┌───┐                         │
│  │☁️ │ │🐳│ │💾│                         │
│  └───┘ └───┘ └───┘                         │
└─────────────────────────────────────────────┘
- Glass card for bio
- 3x3 grid for skills (responsive)
- Hover effects on skill cards
```

### 4. Projects Section
```
┌─────────────────────────────────────────────┐
│            My Projects                       │
│  [All] [Python] [JavaScript] [TypeScript]   │
│                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│  │ AWS CDK  │ │ Django   │ │ AWS HTTP │    │
│  │ 🔧  [G]  │ │ React 🐍 │ │ API  JS  │    │
│  │ ────────│ │ ─────────│ │ ─────────│    │
│  │ Infra..  │ │ Full..   │ │ Server.. │    │
│  │ [tags]   │ │ [tags]   │ │ [tags]   │    │
│  └──────────┘ └──────────┘ └──────────┘    │
└─────────────────────────────────────────────┘
- Filter buttons at top
- 3-column grid (1 on mobile)
- GitHub link on each card
```

### 5. Contact Section
```
┌─────────────────────┬─────────────────────┐
│ Let's Connect        │ Send Me a Message   │
│ ─────────────        │ ─────────────       │
│ Intro text...        │ [Name]              │
│                      │ [Email]             │
│ 📧 Email             │ [Message]           │
│ 📍 Location          │ [Send Message]      │
│                      │                     │
│ [G] [L] [E]          │                     │
│ [Download CV]        │                     │
└─────────────────────┴─────────────────────┘
- 2-column layout (1 on mobile)
- Contact info on left
- Form on right
```

## Animations

### On Page Load
1. **Navbar**: Slides down from top
2. **Hero Text**: Fade in up (0.2s delay)
3. **Hero Card**: Fade in up (0.4s delay)
4. **Section Content**: Fade in up on scroll

### Continuous Animations
1. **Asteroids**: Floating particles across screen
2. **Rocket Icon**: Float up/down (3s cycle)
3. **Code Card**: Float with rotation (4s cycle)

### Hover Effects
1. **Buttons**: Translate up, glow shadow
2. **Links**: Color change to bright blue
3. **Skill Cards**: Scale up, translate up
4. **Project Cards**: Translate up, border glow
5. **Social Icons**: Scale, translate up

## Responsive Breakpoints

### Desktop (> 968px)
- Hero: 2 columns
- About: Full width cards
- Projects: 3 columns
- Contact: 2 columns
- All features visible

### Tablet (768px - 968px)
- Hero: 2 columns
- Projects: 2 columns
- Contact: 2 columns
- Adjusted padding

### Mobile (< 768px)
- Hero: 1 column (stacked)
- About: Single column
- Projects: 1 column
- Contact: 1 column (stacked)
- Social icons in navbar hidden
- Reduced font sizes

## Font Sizes

### Desktop
- Hero Title: 3.5rem (56px)
- Hero Subtitle: 2rem (32px)
- Section Title: 3rem (48px)
- Body Text: 1.1-1.2rem (17-19px)
- Skill Cards: 3rem icons

### Mobile
- Hero Title: 2.5rem (40px)
- Hero Subtitle: 1.5rem (24px)
- Section Title: 2rem (32px)
- Body Text: 1rem (16px)
- Skill Cards: 2.5rem icons

## Icons Used

### Navigation
- 🔗 GitHub: `FaGithub`
- 💼 LinkedIn: `FaLinkedin`
- ✉️ Email: `FaEnvelope`

### Technologies
- 🐍 Python: `FaPython`
- 📜 JavaScript: `FaJs`
- 📘 TypeScript: `SiTypescript`
- ⚛️ React: `FaReact`
- 🌱 Django: `SiDjango`
- 🍃 Spring: `SiSpring`
- ☁️ AWS: `FaAws`
- 🐳 Docker: `FaDocker`
- 💾 Database: `FaDatabase`

### Actions
- 🚀 Rocket: `FaRocket`
- 📥 Download: `FaDownload`
- 🔗 External Link: `FaExternalLinkAlt`
- 📍 Location: `FaMapMarkerAlt`

## Visual Effects

### Glassmorphism Cards
- Semi-transparent background
- Backdrop blur filter
- Light border with glow
- Subtle shadow

### Gradient Text
- Hero name uses gradient text fill
- Smooth transition between colors
- Webkit text fill for compatibility

### Button Effects
- Primary: Blue gradient with glow
- Secondary: Glass with blue border
- Both have lift effect on hover

### Section Backgrounds
- Alternating opacity overlays
- Subtle gradient transitions
- Maintains dark blue theme

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Sufficient color contrast
- Responsive text sizing

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Lazy loading for sections
- Optimized asteroid count (100)
- CSS transforms for animations
- RequestAnimationFrame for canvas
- Minimal re-renders
- Code splitting ready

---

This guide helps visualize the complete design before seeing it live!
