# Event Management Website - SPEC.md

## 1. Project Overview

**Project Name:** Luxe Events - Premium Event Management Website
**Project Type:** Single Page Application (SPA) with Backend API
**Core Functionality:** Showcase event management services, display portfolio, capture client enquiries
**Target Users:** Couples planning weddings, corporate clients, individuals planning parties/events

---

## 2. UI/UX Specification

### 2.1 Layout Structure

**Page Sections (in order):**
1. Navigation Bar (sticky)
2. Hero Section
3. Services Section
4. Portfolio Section
5. Packages/Pricing Section
6. Process Section
7. Testimonials Section
8. About Section
9. Contact/Booking Section
10. Footer
11. Floating Action Buttons (WhatsApp, Call)

**Responsive Breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### 2.2 Visual Design

**Color Palette:**
- Primary Dark: `#2D1B4E` (Deep Purple)
- Primary Gold: `#D4AF37` (Metallic Gold)
- White: `#FFFFFF`
- Off-White: `#F8F5FF` (Light lavender tint)
- Text Dark: `#1A1A1A`
- Text Gray: `#6B7280`
- Accent Cream: `#FFF8E7`

**Typography:**
- Headings: `Playfair Display` (Serif - elegant, premium feel)
- Body: `Inter` or `DM Sans` (Sans-serif - clean, readable)
- Font Sizes:
  - H1: 4rem (64px) desktop, 2.5rem mobile
  - H2: 3rem (48px) desktop, 2rem mobile
  - H3: 1.5rem (24px)
  - Body: 1rem (16px)
  - Small: 0.875rem (14px)

**Spacing System:**
- Section padding: 6rem (96px) vertical desktop, 4rem mobile
- Container max-width: 1280px
- Card gap: 2rem (32px)
- Element spacing: 1rem (16px)

**Visual Effects:**
- Box shadows: `0 25px 50px -12px rgba(45, 27, 78, 0.25)`
- Border radius: 1rem (16px) for cards, 0.5rem (8px) for buttons
- Glassmorphism for navbar: `backdrop-blur-md bg-white/90`
- Gradient overlays on images: `linear-gradient(to bottom, rgba(45,27,78,0.3), rgba(45,27,78,0.7))`

### 2.3 Components

**Navigation Bar:**
- Height: 80px
- Background: Glassmorphism (white 90% opacity with blur)
- Logo on left
- Menu links: Home, Services, Portfolio, Packages, Process, Testimonials, About, Contact
- CTA Button: "Book Now" (gold background)
- Mobile: Hamburger menu with slide-in drawer

**Hero Section:**
- Full viewport height (100vh)
- Background: High-quality event image with dark overlay
- Centered content with animations
- Primary CTA: "Book Your Event" (gold button)
- Secondary CTA: "View Portfolio" (outline button)
- Scroll indicator at bottom

**Services Cards:**
- Grid: 4 columns desktop, 2 tablet, 1 mobile
- Card size: Equal heights
- Image on top (40% height)
- Content: Title, description
- Hover: Scale up 1.05, shadow increase, gold border accent

**Portfolio Grid:**
- Filter tabs: All, Wedding, Corporate, Birthday
- Masonry-style grid: 3 columns desktop, 2 tablet, 1 mobile
- Image cards with overlay on hover showing category
- Click opens lightbox modal
- Lightbox: Full image, navigation arrows, close button, image counter

**Package Cards:**
- 3 columns desktop, 1 mobile (stacked)
- Basic: $1,999
- Standard: $3,999
- Premium: $7,999
- Each card: Title, price, features list, CTA button
- Premium package highlighted with gold border

**Process Steps:**
- Horizontal timeline on desktop, vertical on mobile
- 4 steps with icons, numbers, titles, descriptions
- Connecting line between steps
- Numbered circles in gold

**Testimonials:**
- Carousel/slider
- Client photo, name, event type, review text, star rating
- Navigation dots
- Auto-play with pause on hover

**Contact Form:**
- Two-column layout: Form on left, contact info on right
- Fields: Name*, Phone*, Email*, Event Type*, Date, Message
- Validation: Required fields marked
- Submit button with loading state
- Success/error toast messages

**Footer:**
- 4 column layout: Logo+about, Quick Links, Services, Contact
- Social media icons
- Copyright text
- Dark purple background

**Floating Buttons:**
- WhatsApp: Fixed bottom-right, green
- Call: Fixed bottom-right above WhatsApp
- Pulse animation on WhatsApp

### 2.4 Animations

**Scroll Animations:**
- Fade-in-up on scroll into view
- Stagger children with 0.1s delay
- Using Intersection Observer

**Hover Animations:**
- Buttons: Scale 1.05, background color transition 0.3s
- Cards: Scale 1.02, shadow increase
- Links: Gold underline slide-in

**Page Load:**
- Hero content: Stagger fade-in (0.2s delay between elements)
- Navbar: Fade down

**Transitions:**
- Default: 0.3s ease
- Fast: 0.15s ease
- Slow: 0.5s ease

---

## 3. Functionality Specification

### 3.1 Core Features

**Navigation:**
- Smooth scroll to sections on click
- Active section highlighting
- Mobile menu toggle with animation

**Portfolio Filtering:**
- Client-side filtering by category
- Smooth transition when filtering
- "All" shows everything

**Lightbox:**
- Open on image click
- Navigate with arrows or keys
- Close on X, backdrop click, or Escape
- Prevent body scroll when open

**Form Handling:**
- Client-side validation
- Submit to backend API
- Loading state during submission
- Success/error feedback
- Clear form after success

**Floating Buttons:**
- WhatsApp: Opens wa.me link
- Call: Opens tel: link

### 3.2 Backend API

**Endpoints:**
- `POST /api/enquiry` - Create new enquiry
- `GET /api/enquiries` - Get all enquiries (admin)
- `POST /api/events` - Add portfolio event (admin)
- `GET /api/events` - Get all portfolio events
- `DELETE /api/events/:id` - Delete event (admin)

**Enquiry Data:**
```json
{
  "name": "string",
  "phone": "string",
  "email": "string",
  "eventType": "string",
  "eventDate": "date",
  "message": "string",
  "createdAt": "datetime"
}
```

**Portfolio Event Data:**
```json
{
  "title": "string",
  "category": "wedding|corporate|birthday",
  "imageUrl": "string",
  "description": "string",
  "createdAt": "datetime"
}
```

---

## 4. Acceptance Criteria

### Visual Checkpoints:
- [ ] Navigation is glassmorphic and sticky
- [ ] Hero has dark overlay on background image
- [ ] Service cards have hover animations
- [ ] Portfolio filters work correctly
- [ ] Lightbox opens and navigates properly
- [ ] Package cards are visually distinct
- [ ] Testimonials carousel auto-plays
- [ ] Form validates required fields
- [ ] Footer has 4 columns
- [ ] Floating buttons are visible and functional

### Functional Checkpoints:
- [ ] All sections scroll smoothly
- [ ] Mobile menu works
- [ ] Portfolio filtering works
- [ ] Lightbox navigation works
- [ ] Form submission works (or shows mock success)
- [ ] API endpoints respond correctly

### Performance:
- [ ] Page loads in under 3 seconds
- [ ] Animations are smooth (60fps)
- [ ] No console errors
- [ ] Responsive on all breakpoints

---

## 5. Sample Content

### Services:
1. **Wedding Planning** - Full-service wedding coordination from engagement to reception
2. **Corporate Events** - Professional conferences, product launches, team building
3. **Birthday Parties** - Memorable celebrations for all ages
4. **Private Events** - Anniversaries, graduations, intimate gatherings

### Packages:
1. **Basic - $1,999** - Day-of coordination, vendor management, timeline creation
2. **Standard - $3,999** - Partial planning, venue scouting, guest management
3. **Premium - $7,999** - Full planning, design, unlimited vendor meetings

### Process:
1. **Consultation** - We discuss your vision and requirements
2. **Planning** - We create detailed timeline and vendor selection
3. **Execution** - We coordinate all day-of activities
4. **Delivery** - You enjoy your perfect event

### Testimonials:
1. "Absolutely magical! They made our wedding dream come true." - Sarah & Michael
2. "Professional, organized, and creative. Our corporate event was a huge success!" - Tech Corp
3. "Best birthday ever! The kids are still talking about it." - Johnson Family

### About:
- Founded in 2015
- 500+ events hosted
- Award-winning team
- 98% client satisfaction