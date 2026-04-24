# Anbu Events - Premium Event Management Website

A modern, high-converting Event Management website built with React, Tailwind CSS, and Express.js.

## Features

- **Hero Section** - Image slider with elegant animations
- **Services** - Wedding, Corporate, Birthday, Private events
- **Portfolio** - Gallery with category filters and lightbox
- **Packages** - Basic, Standard, Premium pricing tiers
- **Process** - 4-step timeline (Consultation → Planning → Execution → Delivery)
- **Testimonials** - Auto-playing carousel with client reviews
- **Contact Form** - Validation, API submission
- **Floating Buttons** - WhatsApp and Call now buttons

## Tech Stack

- **Frontend**: React 18, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js
- **Icons**: React Icons (Feather)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server (frontend only)
npm run dev

# Run with backend API
npm run start

# Build for production
npm run build
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/enquiry | Submit new enquiry |
| GET | /api/enquiries | Get all enquiries (admin) |
| POST | /api/events | Add portfolio event (admin) |
| GET | /api/events | Get all portfolio events |
| DELETE | /api/events/:id | Delete event (admin) |

## Design

- **Colors**: Dark Purple (#2D1B4E), Gold (#D4AF37), White
- **Fonts**: Playfair Display (headings), Inter (body)
- **Animations**: Smooth scroll, hover effects, parallax

## License

MIT