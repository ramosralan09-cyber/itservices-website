# Networks Page Image Upload Guide

## ✅ Implementation Complete

The Networks & Connectivity page (`/servicios/redes`) is now fully configured to display professional service images. All code changes have been implemented and verified.

## 📁 Folder Structure Created

```
/public/images/services/redes/
```

This folder is ready to receive your images.

## 🖼️ Required Images (5 Total)

Upload these 5 images to `/public/images/services/redes/`:

### 1. diseno-infraestructura.jpg
**Service**: Diseño e instalación de infraestructura de Red
**Alt Text**: Diseño e instalación de infraestructura de red empresarial - ITSS Puerto Rico
**Recommended Size**: 1063×600px (16:9 ratio)
**Suggested Content**: Server room, network rack, structured cabling installation

### 2. fibra-optica.jpg
**Service**: Fibra óptica: instalación y reparación
**Alt Text**: Instalación y reparación de fibra óptica certificada - ITSS
**Recommended Size**: 1063×600px (16:9 ratio)
**Suggested Content**: Fiber optic cables, splicing work, OTDR equipment

### 3. equipos-tecnologicos.jpg
**Service**: Instalación y configuración de equipos tecnológicos
**Alt Text**: Instalación y configuración de equipos de red - Access Points y Switches
**Recommended Size**: 900×600px (3:2 ratio)
**Suggested Content**: Access points, network switches, equipment configuration

### 4. reestructuracion-cableado.jpg
**Service**: Reestructuración de cableado e infraestructura
**Alt Text**: Reestructuración de cableado estructurado e infraestructura de red
**Recommended Size**: 800×603px (4:3 ratio)
**Suggested Content**: Organized network rack, cable management, labeled cabling

### 5. patch-cords.jpg
**Service**: Patch cords hechos y verificados por nosotros
**Alt Text**: Patch cords certificados fabricados por ITSS Puerto Rico
**Recommended Size**: 1063×600px (16:9 ratio)
**Suggested Content**: Custom patch cables, cable testing equipment, organized connections

## 📋 Image Guidelines

### Format
- **Type**: JPG (recommended) or PNG
- **Quality**: High resolution, at least 800px width
- **Aspect Ratio**: 16:9 landscape format preferred
- **File Size**: 50-200KB (web-optimized)

### Content
- Professional photos of actual services/equipment
- Good lighting and clear focus
- Relevant to the service described
- High-quality, production-ready images

## 🚀 Technical Features Implemented

### Next.js Image Optimization
- ✅ Automatic lazy loading for performance
- ✅ Responsive sizing (mobile, tablet, desktop)
- ✅ Quality optimization (85% quality setting)
- ✅ Proper srcset generation for all devices

### Responsive Design
- **Mobile**: `h-48` (192px height)
- **Tablet**: `h-56` (224px height)
- **Desktop**: `h-64` (256px height)

### Visual Effects
- ✅ Smooth zoom on hover (scale 1.1x)
- ✅ Gradient overlay for text readability
- ✅ Professional ease-out transitions

### SEO & Accessibility
- ✅ Descriptive alt text for each image
- ✅ Semantic HTML structure
- ✅ Optimized for search engines

## 📂 Upload Instructions

### Option 1: Direct Upload
1. Navigate to `/public/images/services/redes/`
2. Upload all 5 JPG files with the exact names listed above
3. Refresh your browser to see the images

### Option 2: Using Command Line
```bash
# From your project root
cd public/images/services/redes/
# Copy your images here with the correct names
```

## ✓ What's Already Done

1. ✅ Folder structure created
2. ✅ Service data updated with image paths
3. ✅ Image alt text configured for SEO
4. ✅ ServiceCard component enhanced with responsive sizing
5. ✅ Next.js Image optimization implemented
6. ✅ Build verified successfully (28/28 pages)

## ⏭️ Next Steps

1. **Upload the 5 images** to `/public/images/services/redes/`
2. **Verify display** by visiting `/servicios/redes` in your browser
3. **Test responsive design** on mobile, tablet, and desktop
4. **Check hover effects** by hovering over each service card

## 🔍 How to Verify

After uploading images:

1. Visit: `http://localhost:3000/servicios/redes` (or your deployed URL)
2. Check that all 5 service cards display professional images
3. Test hover effect (image should zoom smoothly)
4. Test on mobile device (images should be responsive)
5. Verify alt text in browser inspector

## 📞 Support

All service cards maintain the correct contact information:
- **Phone**: (939) 284-2551
- **WhatsApp**: https://wa.me/19392842551

---

**Status**: ✅ Ready for image uploads
**Build**: ✅ Successful (28/28 pages)
**Code**: ✅ Complete and verified
