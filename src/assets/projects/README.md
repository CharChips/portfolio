# Project Photos Directory

This directory contains screenshots and images for the projects displayed on the portfolio website.

## How to Add Project Photos

1. **Add your image files** to this directory
2. **Update the project data** in `src/pages/projects.tsx` to include the photo paths
3. **Use the correct path format**: `/src/assets/projects/your-image.jpg`

## Image Requirements

- **Format**: JPG, PNG, or WebP recommended
- **Size**: Optimize for web (max 1200px width, under 500KB)
- **Aspect Ratio**: 16:9 or 4:3 works best for consistency
- **Quality**: High quality but optimized for web

## Example Usage

```typescript
photos: [
  {
    src: '/src/assets/projects/my-project-dashboard.jpg',
    alt: 'Project dashboard screenshot',
    caption: 'Main dashboard with key features'
  }
]
```

## Current Project Photos

- **Lumina**: Main dashboard, lighting scenes
- **SmartAgriAI**: Dashboard, sensor data
- **Portfolio**: Homepage design
- **TaskFlow**: Kanban board, analytics
- **Weatherly**: Dashboard, forecast view
- **JavaAnalyzer**: Analysis report

## Notes

- Images are displayed with fallback placeholders if they can't be loaded
- Captions are optional but recommended for better user experience
- The component automatically handles image loading states and errors
