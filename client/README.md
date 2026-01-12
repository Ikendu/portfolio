# David Aniede - Portfolio

> A modern, responsive portfolio website showcasing my full-stack web development skills with a focus on React.

## Features

-  Modern, clean design with dark theme
-  Fully responsive (mobile, tablet, desktop)
-  Fast performance with Vite
-  Tailwind CSS for styling
-  React best practices
-  Email integration with EmailJS
-  Smooth animations and transitions
-  SEO friendly

## Tech Stack

**Frontend:**
- React 18.2
- Tailwind CSS
- Vite
- React Bootstrap Icons
- React Multi-Carousel
- EmailJS

**Styling:**
- Tailwind CSS (utility-first CSS framework)
- Responsive design patterns

## Project Structure

\\\
src/
 components/
    About.jsx          # About me section
    Banner.jsx         # Hero section
    Contact.jsx        # Contact form
    Footer.jsx         # Footer with links
    Navbar.jsx         # Navigation bar
    Project.jsx        # Projects showcase
    Skills.jsx         # Skills display
    Testimonials.jsx   # Client testimonials
    CardContents.jsx   # Project card component
    projectAll.js      # Project data
    ...
 assets/
    icons/             # SVG icons
    img/               # Images
    font/              # Custom fonts
 App.jsx                # Main app component
 main.jsx               # Entry point
 App.css                # Global styles
 index.css              # Base styles
\\\

## Installation

1. Clone the repository:
\\\ash
git clone <repository-url>
cd portfolio
\\\

2. Install dependencies:
\\\ash
npm install
\\\

3. Start the development server:
\\\ash
npm run dev
\\\

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

\\\ash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
\\\

## Sections

### 1. **Navigation Bar**
- Sticky navigation with active state indicators
- Mobile hamburger menu
- Quick links to all sections
- Social media icons

### 2. **Hero Section (Banner)**
- Animated typing effect showcasing different roles
- Call-to-action button
- Contact information (email, phone, GitHub)

### 3. **About Me**
- Professional bio
- Key highlights and achievements
- Experience statistics

### 4. **Skills**
- Organized by frontend and backend stacks
- Proficiency levels with visual indicators
- Programming languages list
- Technology carousel

### 5. **Projects**
- Categorized projects (Featured, Team, Learning)
- Project cards with images and descriptions
- Easy filtering between categories

### 6. **Testimonials**
- Client and colleague feedback
- Star ratings
- Professional details

### 7. **Contact**
- Contact form with validation
- EmailJS integration for form submission
- Success/error feedback messages

### 8. **Footer**
- Quick navigation links
- Social media links
- Copyright information

## Customization

### Colors
Update the Tailwind theme colors in your components:
- Primary: \cyan-400\, \cyan-500\, \cyan-600\
- Background: \slate-800\, \slate-900\, \slate-950\

### Personal Information
Edit the following files to update your information:
- [Banner.jsx](src/components/Banner.jsx) - Contact info and intro
- [About.jsx](src/components/About.jsx) - Bio and highlights
- [data.jsx](src/data.jsx) - Skills and technologies
- [Footer.jsx](src/components/Footer.jsx) - Social links

### Projects
Update [projectAll.js](src/components/projectAll.js) with your projects

### Email Configuration
Update the EmailJS credentials in [Contact.jsx](src/components/Contact.jsx):
\\\javascript
.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formDetails, {
  publicKey: 'YOUR_PUBLIC_KEY',
})
\\\

## Deployment

### Deploy to Vercel
\\\ash
npm install -g vercel
vercel
\\\

### Deploy to Netlify
\\\ash
npm run build
# Drag and drop the 'dist' folder to Netlify
\\\

### Deploy to GitHub Pages
\\\ash
# Add to vite.config.js:
export default {
  base: '/repository-name/',
  // ...
}
\\\

## Performance Optimization

- Lazy loading for images
- Code splitting with React
- Minified CSS and JavaScript
- Optimized assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

- Email: ndubest56@gmail.com
- Phone: +234 806 163 2276
- LinkedIn: [aniede](https://linkedin.com/in/aniede)
- GitHub: [Ikendu](http://github.com/ikendu)

---

Made with  by David Aniede
