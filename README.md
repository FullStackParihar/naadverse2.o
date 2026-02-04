# NaadVerse - React Application

A beautiful, modern React application for NaadVerse - The Sound of Stillness. A sonic journey blending classical & folk textures with modern electronic pulse, featuring meditation, healing, and spiritual awakening through sound.

## Features

- 🎵 **Sound Healing** - Experience therapeutic vibrations and healing frequencies
- 🧘 **Meditation & Mindfulness** - Guided meditation programs and practices
- 🎶 **Music Player** - Integrated audio player with curated soundscapes
- 🎨 **Art Gallery** - Visual expressions of sound and consciousness
- 📅 **Events** - Upcoming workshops, sound baths, and gatherings
- 📸 **Gallery** - Moments from sessions and community events
- 📧 **Contact Form** - Easy booking and inquiry system

## Tech Stack

- **React 18** - Modern React with hooks
- **AOS (Animate On Scroll)** - Smooth scroll animations
- **Font Awesome** - Icon library
- **Google Fonts** - Custom typography
- **CSS3** - Modern styling with gradients, animations, and effects

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
nadvars2.0/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Meditation.js
│   │   ├── Healing.js
│   │   ├── Music.js
│   │   ├── Art.js
│   │   ├── Events.js
│   │   ├── Gallery.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Component Overview

### Navbar
- Responsive navigation with mobile menu
- Smooth scroll to sections
- Hide/show on scroll behavior
- Dropdown menu for experiences

### Hero
- Video background with overlay
- Sound toggle functionality
- Animated floating elements
- Call-to-action buttons

### About
- Animated statistics counter
- Image gallery with thumbnails
- Feature highlights
- Founder quote

### Meditation
- Meditation program cards
- Duration and difficulty levels
- Feature boxes for benefits

### Healing
- Healing method descriptions
- Benefits lists
- Testimonial slider

### Music
- Integrated audio player
- Progress bar and controls
- Music categories
- Streaming platform links

### Art
- Gallery grid layout
- Hover effects
- Art descriptions

### Events
- Upcoming event cards
- Date badges
- Event details and registration

### Gallery
- Image grid with overlays
- Zoom-in animations
- Caption overlays

### Contact
- Contact form with validation
- Contact information
- Social media links
- Business hours

### Footer
- Site navigation
- Social links
- Copyright information

## Customization

### Colors
Edit the CSS variables in `src/App.css`:
```css
:root {
  --color-primary: #0E0F11;
  --color-secondary: #FFD580;
  --color-accent: #6FFFE9;
  /* ... more variables */
}
```

### Content
Update component content directly in the respective files in `src/components/`

### Images
Replace image URLs in components with your own images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- Lazy loading for images
- Code splitting with React
- Optimized animations with AOS
- Minified production build

## Deployment

### Build for production:
```bash
npm run build
```

The optimized build will be in the `build/` folder, ready to deploy to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any static hosting service

## Contributing

Feel free to submit issues and enhancement requests!

## License

© 2024 NaadVerse. All rights reserved.

## Contact

- **Website:** [naadverse.com](https://naadverse.com)
- **Email:** hello@naadverse.com
- **Phone:** +91 98765 43210

---

Created with ❤️ by DJ Nishant Singh
