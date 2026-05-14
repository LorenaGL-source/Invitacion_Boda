# Wedding Invitation - Ana & Carlos

This is a beautiful, interactive wedding invitation website built with React, TypeScript, Vite, and Tailwind CSS.

## Project Overview

- **Project Type**: React + TypeScript Wedding Invitation Web Application
- **Entry Point**: `src/main.tsx` (React application entry)
- **Build System**: Vite 7.3.2 (Fast development and build)
- **Styling System**: Tailwind CSS 3.4.19 (Atomic CSS framework)

## Features Implemented

### 1. Hero Section
- Beautiful full-screen hero with background image
- Animated text reveals
- Names and wedding date display

### 2. Countdown Timer
- Real-time countdown to wedding date (August 15, 2026)
- Days, hours, minutes, and seconds display
- Elegant card design

### 3. Our Story (Interactive Timeline)
- Chronological timeline of the couple's relationship
- Click to expand events
- Beautiful images for each milestone

### 4. Event Details
- Ceremony, Reception, and Party information
- Venue details (Hacienda San Miguel, Valle de Bravo)
- Important information about the event

### 5. Interactive Map
- Embedded Google Maps
- Multiple route options (car, Uber, parking)
- Direct link to open in Google Maps
- Emergency contact information

### 6. RSVP Form
- Guest attendance confirmation
- Number of guests selection
- Dietary restrictions checkboxes
- Optional message for the couple

### 7. Photo Gallery
- Masonry grid layout
- Lightbox for viewing full-size images
- Year badges on photos
- Smooth hover animations

### 8. Dress Code
- Suggestions for both her and him
- Color palette display
- Tips for the event

### 9. Add to Calendar
- Google Calendar integration
- ICS file download for Apple/Outlook
- Event details pre-filled

### 10. Guest Messages
- Leave wishes and congratulations
- View all messages
- Real-time updates

### 11. Collaborative Playlist
- Suggest songs for the wedding
- Vote for favorite songs
- Top songs leaderboard

## Design System

### Colors
- Primary: #8B7355 (Warm brown)
- Secondary: #C9A96E (Gold)
- Cream: #FDF8F3 (Background)
- Dark: #2C2C2C (Text)

### Typography
- Headings: Cormorant Garamond (Serif)
- Body: Montserrat (Sans-serif)

### Animations
- Fade in up animations
- Float animations
- Hover effects
- Smooth transitions

## Running the Project

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev

# Build for production
pnpm run build
```

## File Structure

```
src/
├── App.tsx              # Main application component
├── main.tsx            # React entry point
├── index.css           # Global styles
├── components/
│   ├── Hero.tsx        # Hero section
│   ├── Countdown.tsx  # Countdown timer
│   ├── OurStory.tsx    # Timeline component
│   ├── EventDetails.tsx # Event information
│   ├── InteractiveMap.tsx # Map component
│   ├── RSVPForm.tsx   # RSVP form
│   ├── PhotoGallery.tsx # Photo gallery
│   ├── DressCode.tsx  # Dress code suggestions
│   ├── AddToCalendar.tsx # Calendar integration
│   ├── GuestMessages.tsx # Guest messages
│   └── Playlist.tsx  # Collaborative playlist
```

## Wedding Details

- **Date**: August 15, 2026
- **Time**: 17:00 hours (Ceremony)
- **Location**: Hacienda San Miguel, Valle de Bravo, Estado de México
- **Theme**: Elegant, romantic, with pastel colors

---

Made with ❤️ for Ana & Carlos's special day
