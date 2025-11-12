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

## Recent Changes (November 12, 2025)
- ✅ Complete Eleventy setup with Nunjucks templating
- ✅ Downloaded all original images including logo (Gravesend.png)
- ✅ Created 38 pages total: homepage, 6 service pages, 3 core pages (about, contact, privacy), 28 location pages
- ✅ Implemented responsive CSS with brand colors (#e74c3c red/orange theme)
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
- Service Area: Gravesend, Kent and surrounding areas

## User Preferences
- Brand colors: Red/orange (#e74c3c primary, #c0392b darker)
- Logo: Gravesend.png from original site
- Focus on local SEO and Gas Safe credentials
