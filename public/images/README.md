# Images Folder Structure

This folder contains all images for the Escorts In Bangalore website.

## Folder Organization:

### `/public/images/`
Main images directory - all images here are publicly accessible via `/images/` URL

### `/public/images/gallery/`
Gallery section images:
- Name files: `gallery-1.jpg`, `gallery-2.jpg`, etc.
- Recommended size: 800x800px (square format)
- Supported formats: .jpg, .jpeg, .png, .webp

### `/public/images/hero/`
Hero section background and banner images:
- Name files: `hero-bg.jpg`, `hero-banner.jpg`, etc.
- Recommended size: 1920x1080px (landscape format)
- High quality images for main banners

### `/public/images/services/`
Service section icons and images:
- Name files: `service-1.jpg`, `service-premium.jpg`, etc.
- Recommended size: 400x400px (square format)
- Icons and service-related imagery

## Usage in Code:

```tsx
import Image from 'next/image'

// Example usage:
<Image 
  src="/images/gallery/gallery-1.jpg" 
  alt="Gallery Image 1"
  width={800}
  height={800}
/>
```

## Image Optimization Tips:

1. Use Next.js Image component for automatic optimization
2. Compress images before uploading (use tools like TinyPNG)
3. Use WebP format when possible for better compression
4. Keep file sizes under 1MB for faster loading
5. Use descriptive filenames (e.g., `elegant-companion-1.jpg`)

## Recommended Image Sizes:

- **Gallery Images**: 800x800px (1:1 ratio)
- **Hero Images**: 1920x1080px (16:9 ratio)
- **Service Icons**: 400x400px (1:1 ratio)
- **Profile Images**: 600x800px (3:4 ratio)

Place your images in the appropriate folders and they'll be accessible via the `/images/` URL path.