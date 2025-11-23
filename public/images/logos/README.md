# Logo Setup Instructions

This folder contains the ITSS logo files used throughout the website.

## Required Files

Please upload the following logo files to this directory:

### 1. Main Logo
- **Filename**: `itss-logo.png`
- **Dimensions**: 1280×161 pixels (or similar aspect ratio)
- **File Size**: ~69KB
- **Usage**:
  - Header navigation (32px height on desktop, 28px on mobile)
  - Footer company section (36px height)
- **Format**: PNG (transparent background preferred)

### 2. Favicon
- **Filename**: `itss-favicon.png`
- **Dimensions**: 510×512 pixels (square aspect ratio)
- **File Size**: ~108KB
- **Usage**: Browser tab icon
- **Format**: PNG or ICO

## Upload Instructions

1. Navigate to: `/public/images/logos/`
2. Upload both files:
   - `itss-logo.png` - Main horizontal logo
   - `itss-favicon.png` - Square favicon/icon version

## Logo Visibility Notes

The logo will be displayed on dark backgrounds in:
- Header: Dark charcoal background (#1a1a1a)
- Footer: Dark charcoal background (#1a1a1a)

**Important**: Ensure your logo has:
- Light/white text or elements for visibility on dark backgrounds
- OR sufficient contrast to be readable
- High resolution for crisp display on retina screens
- **PNG format with transparent background recommended**

## Current Implementation

### Header Logo
```typescript
<Image
  src="/images/logos/itss-logo.png"
  alt="IT Services & Security - Puerto Rico"
  width={160}
  height={20}
  className="h-7 md:h-8 w-auto"
  priority
/>
```
- Mobile: 28px height (h-7)
- Desktop: 32px height (h-8)
- Width: Auto-scales to maintain aspect ratio
- Priority loading for above-the-fold content

### Footer Logo
```typescript
<Image
  src="/images/logos/itss-logo.png"
  alt="IT Services & Security - Puerto Rico"
  width={180}
  height={23}
  className="h-9 w-auto"
/>
```
- Height: 36px (h-9)
- Width: Auto-scales to maintain aspect ratio

## Fallback

If logos are not uploaded, the build will show a placeholder or the application may fail to load images. Please ensure both files are uploaded before deploying.

## File Structure

```
/public/images/logos/
├── README.md          (this file)
├── itss-logo.png      (TO BE UPLOADED - horizontal logo)
└── itss-favicon.png   (TO BE UPLOADED - square icon)
```

## Testing After Upload

After uploading the logos:

1. Check header logo appears correctly at top of all pages
2. Check footer logo appears at bottom of all pages
3. Verify logo is visible on dark backgrounds
4. Test on mobile devices (should be slightly smaller)
5. Check browser tab shows favicon

## Why PNG Format?

PNG format is preferred because:
- Supports transparency (looks better on dark backgrounds)
- Lossless compression (maintains quality)
- Better for logos with text and sharp edges
- Widely supported across all browsers
- No compression artifacts like JPEG

## Need Help?

If the logo doesn't appear correctly:
- Verify file names match exactly: `itss-logo.png` and `itss-favicon.png`
- Check files are in `/public/images/logos/` directory
- Ensure logo has sufficient contrast for dark backgrounds
- Try clearing browser cache (Ctrl+F5 or Cmd+Shift+R)
