# Hixa Heating - Eleventy Static Site

## Overview
This is a complete rebuild of hixaheating.com using the Eleventy (11ty) static site generator. The site preserves all original content, images, logo, and branding from the original WordPress site while providing a modern, fast, and SEO-optimized static website.

## Project Structure
```
├── src/
│   ├── _layouts/          # Layout templates (base.njk)
│   ├── _includes/         # Partials (header.njk, footer.njk)
│   ├── css/               # Stylesheets
│   ├── images/            # All site images including logo
│   ├── locations/         # 28 location-specific SEO pages
│   ├── index.njk          # Homepage
│   └── [service-pages]/   # Service pages (boiler-service-repairs, prices, etc.)
├── _site/                 # Generated output (gitignored)
├── .eleventy.js           # Eleventy configuration
└── package.json           # Dependencies
```

## Recent Changes
### November 13, 2025 - Color Scheme Update
- ✅ Complete color scheme conversion from red (#d62c1a) to peachy orange (#F7955E) and dark blue (#2D4E68/#243E53)
- ✅ Achieved WCAG AA accessibility compliance across all 39 pages
- ✅ All text contrast ratios meet or exceed 4.5:1 (normal text) or 3:1 (large text 18pt+)
- ✅ Fixed mobile navigation bugs (invisible CTA text, off-center header phone button)
- ✅ Implemented CSS custom properties for maintainable color management
- ✅ Updated all interactive states (hovers, focus) for accessibility

### November 12, 2025 - Initial Build
- ✅ Complete Eleventy setup with Nunjucks templating
- ✅ Downloaded all original images including logo (Gravesend.png)
- ✅ Created 39 pages total: homepage, 6 service pages, 3 core pages (about, contact, privacy), 28 location pages, sitemap
- ✅ Implemented responsive CSS with initial red/orange theme
- ✅ Added LocalBusiness structured data (JSON-LD) for SEO
- ✅ Configured proper internal linking silos between location and service pages
- ✅ Set up workflow to run on port 5000

## Key Features
- **SEO Optimized**: Homepage targets "New Boiler Installation Gravesend"
- **28 Location Pages**: Gravesend, Milton, Northfleet, Dartford, and 24 other Kent areas
- **Service Pages**: Detailed pages for all boiler services and brands (Worcester Bosch, Vaillant)
- **Structured Data**: LocalBusiness schema with OpenGraph tags on every page
- **Internal Linking**: Proper SEO silos linking locations to main site and service pages
- **Responsive Design**: Mobile-first design with brand colors
- **WCAG AA Compliant**: All text meets accessibility contrast requirements (≥4.5:1 normal, ≥3:1 large)

## Technology Stack
- **Eleventy 2.0.1**: Static site generator
- **Nunjucks**: Templating engine
- **Node.js 20**: Runtime environment
- **CSS**: Custom responsive styles

## Development Commands
- `npm start` - Start dev server on port 5000 (configured in workflow)
- `npm run build` - Build static site to _site/ directory

## Contact Information
- Phone: 01474 554887
- Email: info@hixaheating.com
- Service Area: Gravesend, Kent and surrounding areas

## Current Color Palette
- **Peachy Orange**: #F7955E (primary backgrounds, borders, accents)
- **Dark Blue**: #2D4E68 (primary text on light backgrounds, structural elements)
- **Very Dark Blue**: #243E53 (text on colored backgrounds, link hovers, gradients)
- **Light Peach**: #FFF0E6 (highlight box backgrounds)
- **Mid Blue**: #365a79 (footer borders)
- All colors WCAG AA compliant with proper text contrast

## User Preferences
- Logo: Gravesend.png from original site
- Focus on local SEO and Gas Safe credentials
- Modern, professional design with strong accessibility
