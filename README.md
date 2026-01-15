# Waves Logix Landing Page

Modern landing page for Waves Logix - a professional Forex trading and account management agency.

## Features

- 🎨 Modern, light design with purple accents and 3D liquid glass effects
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 📋 Contact form with validation
- 🎯 Multiple CTA buttons linking to Telegram
- 📜 Certificate section with lightbox modal
- 🚀 Optimized for performance

## Tech Stack

- Next.js 16.1.1
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- React Hook Form (form validation)
- Zod (schema validation)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_TELEGRAM_URL=https://t.me/your-telegram-channel
```

4. Add certificate image to `public/certificate.jpg` (optional - placeholder will be shown if not provided)

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx         # Main page with all sections
│   └── globals.css      # Global styles and animations
└── components/
    ├── Header.tsx       # Navigation header
    ├── Hero.tsx         # Hero section
    ├── Services.tsx     # Services section
    ├── Certificate.tsx  # Certificate section
    ├── Partners.tsx     # Partners section
    ├── Testimonials.tsx # Testimonials section
    ├── ContactForm.tsx  # Contact form
    ├── Footer.tsx       # Footer
    ├── CTAButton.tsx    # Reusable CTA button
    └── Logo.tsx         # Logo component

public/
├── logo.svg            # Company logo
└── certificate.jpg     # Certificate image (add your own)
```

## Configuration

### Environment Variables

- `NEXT_PUBLIC_TELEGRAM_URL` - Your Telegram channel URL (required for CTA buttons)

### Customization

- Update service descriptions in `src/components/Services.tsx`
- Add partner logos to `src/components/Partners.tsx`
- Add testimonials in `src/components/Testimonials.tsx`
- Customize colors in `src/app/globals.css`

## Build for Production

```bash
npm run build
npm start
```

## Sections

1. **Header** - Navigation with logo and Telegram CTA
2. **Hero** - Main banner with company introduction
3. **Services** - Detailed service descriptions
4. **Certificate** - Company incorporation certificate
5. **Partners** - Partner logos grid
6. **Testimonials** - Client testimonials
7. **Contact Form** - Contact form with validation
8. **Footer** - Footer with links and company info

## License

© 2025 Waves Logix Ltd. All rights reserved.
