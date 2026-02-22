# Image Migration Guide for PixelAdvant GCC Website

## Overview
This document outlines all image updates needed to match the Global Capability Center and Talent Acquisition recruiting website theme.

---

## 1. HERO SECTION IMAGES
**Location:** `/public/img/hero/`

### Current → New Mapping
- `hero-12.jpg` → `gcc-hero-main.jpg` (Main GCC office/innovation center image)
- `hero-7.jpg` → `talent-acquisition-hero.jpg` (AI-led recruitment/talent marketplace image)

**Recommended Content:**
- Hero 1: Modern office space or innovation center in India/US
- Hero 2: Team collaboration, diverse talent pool, recruitment dashboard

---

## 2. ABOUT SECTION IMAGES
**Location:** `/public/img/about/`

### Current → New Mapping
- `01.jpg` → `gcc-expertise.jpg` (Team collaboration or office environment)
- `02.jpg` → `leadership-team.jpg` (Diverse team members working)
- `03.png` → `gcc-operations.png` (Process flow or operations image)
- `04.jpg` → `business-handshake.jpg` (Partnership/business context)
- `06.png` → `company-values.png` (Values visualization)

**Recommended Content:**
- Showcase diverse teams, modern offices, talent interactions
- Professional environments in India and US offices

---

## 3. SERVICE/SOLUTION IMAGES
**Location:** `/public/img/service/`

### Key Updates
- `service-bg-2.jpg` → `gcc-service-bg.jpg` (Professional background for services section)
- `details-1.jpg` → `consulting-service.jpg` (Consulting & Advisory service image)
- `details-2.jpg` → `talent-acquisition-service.jpg` (Smart Talent Acquisition image)
- `details-3.jpg` → `talent-supply-service.jpg` (AI-Led Talent Supply image)

**Service Icons:** Keep existing icon paths but consider:
- `s-icon-1.svg` → Consulting icon
- `s-icon-2.svg` → Talent icon
- `s-icon-3.svg` → AI/Analytics icon
- `s-icon-4.svg` → Management icon
- `s-icon-10.svg` → Workspace icon
- `s-icon-11.svg` → Support icon

---

## 4. PROJECT/MODEL IMAGES
**Location:** `/public/img/project/`

### Mapping for GCC Models
- `01.jpg` → `model-captive.jpg` (Captive Model - subsidiary setup)
- `02.jpg` → `model-shared-services.jpg` (Shared Services Model)
- `03.jpg` → `model-bot.jpg` (Build Operate Transfer Model)
- `04.jpg` → `managed-teams.jpg` (Managed Teams solution)
- `05.jpg` → `workspace-solution.jpg` (Workspace Solutions)

### Additional Project Images
- `06.jpg` → `gcc-case-study-1.jpg`
- `07.jpg` → `gcc-case-study-2.jpg`
- `08.jpg` → `gcc-case-study-3.jpg`
- etc.

**Recommended Content:**
- Model diagrams or process flows
- Client office spaces or team environments
- Before/after recruitment dashboards

---

## 5. TEAM MEMBER IMAGES
**Location:** `/public/img/team/`

### Updates Needed
- `hover-1.png` → Replace with actual team member photos
- Add images for leadership team members
- Suggested: Professional headshots on neutral background

**File Pattern:**
- `team-member-1.jpg` (CEO/Founder)
- `team-member-2.jpg` (COO)
- `team-member-3.jpg` (CTO)
- etc.

---

## 6. BLOG/NEWS IMAGES
**Location:** `/public/img/news/`

### Current Blog Post Images to Replace
- `post-1.jpg` → `article-gcc-trends.jpg` (GCC Industry Trends)
- `post-2.jpg` → `article-talent-market.jpg` (Talent Market Insights)
- `post-3.jpg` → `article-recruitment-ai.jpg` (AI in Recruitment)
- `01.jpg` → `blog-gcc-future.jpg` (Future of GCC)
- `02.jpg` → `blog-talent-acquisition.jpg` (Talent Strategy)
- `03.jpg` → `blog-managed-services.jpg` (Managed Services)
- etc.

**Recommended Content:**
- Professional/corporate imagery
- Data analytics dashboards
- Team collaboration shots
- Global office environments

---

## 7. BRAND/PARTNER LOGOS
**Location:** `/public/img/brand/`

### Update
- `brand.png` → Keep generic or update with actual partner logos
- Suggested file: `partners-logo.png` (consolidated partner image)

---

## 8. ACHIEVEMENT ICONS
**Location:** `/public/img/achievement-icon/`

### Mapping
- `01.svg` → `icon-expertise.svg` (400+ Years Experience)
- `02.svg` → `icon-global.svg` (Global Reach)
- `03.svg` → `icon-innovation.svg` (Innovation)
- `04.svg` → `icon-support.svg` (24/7 Support)

---

## 9. SHAPE/DECORATIVE ELEMENTS
**Location:** `/public/img/`

### Keep As-Is (Design elements)
- Circle shapes, arrows, lines (general design)
- Background patterns
- SVG icons for UI elements

---

## 10. FAQ & MISC IMAGES
**Location:** `/public/img/faq/`, `/public/img/choose/`

### Updates
- `faq.png` → `faq-gcc-solutions.png` (FAQ with GCC context)
- `faq-2.png` → `faq-talent-process.png`
- `choose/01.png` → `why-pixeladvant.png` (Why choose section)

---

## IMAGE SPECIFICATIONS

### Image Guidelines
1. **Hero Images:** 1920x800px (wide format)
2. **Service/Project Images:** 600x400px (landscape)
3. **Team Images:** 300x300px (square)
4. **Blog Images:** 800x400px
5. **Icons:** 64x64px (SVG preferred)

### Color Palette
- Professional blues and grays
- Corporate/recruitment theme
- Modern UI elements
- High contrast for readability

---

## PRIORITY IMPLEMENTATION

### Phase 1 (Critical)
- Hero images (hero-12.jpg, hero-7.jpg)
- Service detail images (details-1.jpg, details-2.jpg, details-3.jpg)
- About section images (01.jpg, 02.jpg, 03.jpg)

### Phase 2 (High)
- Project/Model images (01-05.jpg)
- Service background (service-bg-2.jpg)
- Achievement icons (01-04.svg)

### Phase 3 (Medium)
- Team member photos
- Blog post images
- Additional project images (06+.jpg)

---

## UPDATED IMAGE PATH REFERENCES IN CODE

See the code changes below for how image paths have been updated to match these new filenames.

---

## NOTES FOR IMAGE PROCUREMENT

1. **Stock Photo Options:** Unsplash, Pexels, Pixabay (corporate/recruitment category)
2. **Design Considerations:** 
   - Diverse team representation
   - Modern, professional aesthetic
   - GCC/recruitment industry context
3. **Logo/Branding:** Use PixelAdvant official logo and brand colors
4. **Team Photos:** Use professional headshots or office team pictures
