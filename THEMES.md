# Theme System Documentation

## Overview

DevChris.net now includes a comprehensive theme system that allows switching between different color schemes to create different moods and aesthetics.

## Available Themes

### 🔴 Red Theme (Dangerous/Aggressive)
- **Primary Colors**: Red (#ef4444, #f87171, #dc2626)
- **Mood**: Dangerous, aggressive, high-alert cybersecurity vibe
- **Use Case**: Perfect for threat detection, security alerts, penetration testing content

### 🔵 Blue Theme (Original/Professional) 
- **Primary Colors**: Cyan/Blue (#06b6d4, #22d3ee, #3b82f6)
- **Mood**: Professional, trustworthy, classic cybersecurity aesthetic
- **Use Case**: Corporate presentations, professional portfolio, general cybersecurity content

## How to Switch Themes

### Method 1: Theme Switcher Button (Recommended)
- Click the palette icon (🎨) in the navigation bar
- Themes switch instantly with smooth transitions
- Changes persist during the session

### Method 2: Manual Configuration
Edit `/src/app/globals.css` and uncomment/comment the theme you want:

```css
/* Blue theme (currently active) */
--theme-primary-400: #22d3ee;
--theme-primary-500: #06b6d4;
--theme-primary-600: #0891b2;
--theme-glow: rgba(6, 182, 212, 0.4);
--theme-glow-hover: rgba(6, 182, 212, 0.6);
--theme-border: rgba(6, 182, 212, 0.4);
--theme-border-hover: rgba(6, 182, 212, 0.6);
--theme-background: rgba(6, 182, 212, 0.1);
--theme-scrollbar: rgba(6, 182, 212, 0.5);
--theme-scrollbar-hover: rgba(6, 182, 212, 0.7);
--theme-gradient: linear-gradient(45deg, #22d3ee, #06b6d4, #3b82f6);

/* Red theme (commented out - uncomment to activate)
--theme-primary-400: #f87171;
--theme-primary-500: #ef4444;
--theme-primary-600: #dc2626;
--theme-glow: rgba(239, 68, 68, 0.4);
--theme-glow-hover: rgba(239, 68, 68, 0.6);
--theme-border: rgba(239, 68, 68, 0.4);
--theme-border-hover: rgba(239, 68, 68, 0.6);
--theme-background: rgba(239, 68, 68, 0.1);
--theme-scrollbar: rgba(239, 68, 68, 0.5);
--theme-scrollbar-hover: rgba(239, 68, 68, 0.7);
--theme-gradient: linear-gradient(45deg, #ef4444, #dc2626, #b91c1c);
*/
```

Also update the `data-theme` attribute in `/src/app/layout.tsx`:
```tsx
<html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} data-theme="blue">
```

## Technical Implementation

### CSS Custom Properties
All theme colors are defined as CSS custom properties (`--theme-*`) that can be easily switched.

### Component System
- `ThemeSwitcher.tsx`: Interactive theme toggle button
- Integrated into `Navbar.tsx` for easy access
- Uses `data-theme` attribute for Tailwind class overrides

### Affected Elements
- **Gradient text**: Logo, headings, section titles
- **Cyber effects**: Borders, glows, hover states
- **Interactive elements**: Buttons, links, navigation
- **Accent colors**: Icons, bullet points, highlights
- **Background effects**: Matrix animation, subtle overlays

### Files Modified
- `/src/lib/themes.ts` - Theme configuration
- `/src/app/globals.css` - CSS custom properties and overrides
- `/src/components/ThemeSwitcher.tsx` - Theme switching component
- `/src/components/Navbar.tsx` - Navigation integration
- `/src/app/layout.tsx` - Root HTML theme attribute

## Adding New Themes

To add a new theme:

1. **Define colors** in `/src/lib/themes.ts`
2. **Add CSS custom properties** in `/src/app/globals.css`
3. **Add Tailwind overrides** for the new theme
4. **Update ThemeSwitcher** to include the new option

Example new theme:
```typescript
green: {
  name: 'Matrix Green',
  primary: {
    400: '#4ade80', // green-400
    500: '#22c55e', // green-500
    600: '#16a34a', // green-600
  },
  // ... other properties
}
```

## Best Practices

1. **Consistency**: All themes should maintain the same visual hierarchy
2. **Accessibility**: Ensure sufficient contrast ratios for all themes
3. **Performance**: Use CSS custom properties for instant switching
4. **Fallbacks**: Always provide fallback colors for older browsers

## Future Enhancements

- [ ] System preference detection (dark/light mode)
- [ ] Local storage persistence
- [ ] More theme options (green matrix, purple neon, etc.)
- [ ] Animated theme transitions
- [ ] User-customizable themes
