# Client Logos Upload Instructions

This folder contains client/partner logos displayed on the website with a grayscale hover effect.

## Required Client Logo Files

Please upload the following 3 client logos to this directory:

### 1. Policía de Puerto Rico Logo
- **Filename**: `policia-pr.png`
- **Dimensions**: 180×139 pixels (recommended aspect ratio)
- **Format**: PNG (transparent background preferred)
- **Usage**: Home page client section, Security page CTA

### 2. CADES Logo
- **Filename**: `cades.png`
- **Dimensions**: 180×94 pixels (recommended aspect ratio)
- **Format**: PNG (transparent background preferred)
- **Usage**: Home page client section, Security page CTA

### 3. Infosys Logo
- **Filename**: `infosys.png`
- **Dimensions**: 180×184 pixels (recommended aspect ratio)
- **Format**: PNG (transparent background preferred)
- **Usage**: Home page client section, Security page CTA

## Design Specifications

### Grayscale Hover Effect
- **Default State**:
  - Grayscale filter applied (100% desaturated)
  - 70% opacity
  - Subdued appearance
- **Hover State**:
  - Full color (grayscale removed)
  - 100% opacity
  - Slight scale up (1.05x)
- **Transition**: Smooth 500ms animation

### Layout Specifications

#### Full Section (Home Page)
- **Layout**: 3 columns on desktop, 1 column on mobile
- **Logo Height**: 128px (h-32) maximum
- **Width**: Auto-scales to maintain aspect ratio
- **Spacing**: 48px gap between logos
- **Alignment**: Centered
- **Background**: Slate gray (#1e293b)

#### Mini Version (Security Page CTA)
- **Layout**: Horizontal flex layout with wrapping
- **Logo Height**: 64px (h-16) maximum
- **Width**: Auto-scales to maintain aspect ratio
- **Spacing**: 32px gap between logos
- **Alignment**: Centered
- **Background**: Transparent (overlays gradient CTA)

## Logo Preparation Guidelines

### Color Requirements
- Logos should look good in both grayscale and full color
- Avoid logos that lose meaning when desaturated
- Test logos at 70% opacity to ensure visibility

### Background Requirements
- **Preferred**: PNG with transparent background
- **Alternative**: White background (will blend with page)
- **Avoid**: Dark backgrounds (conflicts with dark page background)

### Size Requirements
- **Minimum Resolution**: 360px width (2x for retina)
- **Aspect Ratio**: Maintain original logo proportions
- **File Size**: Keep under 100KB per logo (optimize if needed)

### Quality Guidelines
- High resolution for crisp display
- Clean edges (no JPEG artifacts)
- Professional appearance
- Properly cropped with minimal whitespace

## Current Implementation

### Full Section Component
```typescript
<ClientLogos />
```

Located on:
- Home page (`/app/page.tsx`)
- Before final CTA section

Features:
- Full width section with title and description
- Animated entrance (fade + slide up)
- Staggered animation for each logo (100ms delay)
- Interactive hover effects
- Responsive grid layout

### Mini Version Component
```typescript
<ClientLogos variant="mini" />
```

Located on:
- Security services page (`/app/servicios/seguridad/page.tsx`)
- Above CTA buttons in final section

Features:
- Compact inline display
- Flexible wrapping layout
- Same grayscale hover effect
- Smaller logo size (64px vs 128px)

## Component Details

### Props
- `variant`: `'full'` (default) or `'mini'`

### Client Data Structure
```typescript
{
  name: 'Client Name',
  logo: '/images/logos/filename.png',
  width: 180,    // Original aspect width
  height: 139,   // Original aspect height
}
```

## File Structure

```
/public/images/logos/
├── README.md                          (main logo instructions)
├── UPLOAD_INSTRUCTIONS.txt            (main logo quick guide)
├── CLIENT_LOGOS_INSTRUCTIONS.md       (this file)
├── itss-logo.png                      (company logo)
├── itss-favicon.png                   (company favicon)
├── policia-pr.png                     (TO BE UPLOADED - client logo)
├── cades.png                          (TO BE UPLOADED - client logo)
└── infosys.png                        (TO BE UPLOADED - client logo)
```

## Testing After Upload

After uploading client logos:

1. **Home Page**:
   - Scroll to "Clientes que confían en nosotros" section
   - Verify all 3 logos appear in grayscale
   - Hover over each logo to see color transition
   - Check mobile layout (single column)

2. **Security Page**:
   - Scroll to final orange CTA section
   - Verify mini logos appear above buttons
   - Verify grayscale hover effect works
   - Check responsive wrapping on mobile

3. **Visual Checks**:
   - Logos are clearly visible in grayscale
   - Color transition is smooth (500ms)
   - Scale animation is subtle (1.05x)
   - Aspect ratios maintained correctly
   - No pixelation or blurriness

## Optimization Tips

### For PNG Files:
- Use tools like TinyPNG or ImageOptim
- Remove unnecessary metadata
- Keep transparency if available
- Target < 50KB per logo

### For Logo Visibility:
- Ensure logos have sufficient contrast
- Test on both light and dark backgrounds
- Verify grayscale version is recognizable
- Check at 70% opacity

## Troubleshooting

**Logo doesn't appear**:
- Verify filename matches exactly (case-sensitive)
- Check file is in `/public/images/logos/` directory
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check browser console for 404 errors

**Logo looks bad in grayscale**:
- Use a version with better contrast
- Add a subtle outline or background
- Consider adjusting opacity settings

**Logo is pixelated**:
- Upload higher resolution version (2x minimum)
- Ensure PNG format (not low-quality JPEG)
- Check original file quality

**Hover effect not working**:
- Ensure JavaScript is enabled
- Check for browser console errors
- Verify framer-motion is loaded

## Adding More Client Logos

To add additional client logos:

1. Add logo file to `/public/images/logos/`
2. Edit `/components/shared/ClientLogos.tsx`
3. Add new entry to `clients` array:
```typescript
{
  name: 'Client Name',
  logo: '/images/logos/new-client.png',
  width: 180,
  height: 100,
}
```
4. Rebuild and test

## Design Rationale

### Why Grayscale?
- Creates visual consistency across different brand colors
- Focuses attention on company name/branding
- Professional, cohesive appearance
- Makes full-color hover more impactful

### Why 70% Opacity?
- Visible but not distracting
- Creates hierarchy (content first, logos secondary)
- Encourages interaction to reveal full color
- Maintains clean, professional look

### Why 500ms Transition?
- Long enough to be noticeable and smooth
- Short enough to feel responsive
- Matches modern web interaction standards
- Provides premium, polished feel
