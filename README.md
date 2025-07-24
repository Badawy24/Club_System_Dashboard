
## 1. Design Tokens Extraction (CSS `:root`)

Based on the analysis of the actual Figma CSS styles provided, the following design tokens have been extracted and will be organized into a global CSS variables file (e.g., `_variables.scss` or `styles/design-tokens.css`). This approach ensures a single source of truth for design values, promoting consistency and maintainability.

### Colors

```css
 :root {
  --color-white: #FFFFFF;
  --color-white-88: rgba(255, 255, 255, 0.88);
  --color-black: #000000;

  --bg-dark-primary: #000606;
  --bg-dark-secondary: #060606;
  --bg-dark-tertiary: #03061F;
  --bg-dark-quaternary: #101440;
  --bg-surface-dark: #202224;
  --bg-charcoal: #1C1C1C;
  --bg-charcoal-variant: #191B1C;
  --bg-charcoal-dark: #242323;
  --bg-charcoal-green: #1C1E1B;
  --bg-surface-muted: #718096;

  --overlay-dark: rgba(6, 6, 6, 0.4);
  --overlay-gray: rgba(41, 45, 50, 0.44);
  --overlay-surface: rgba(0, 6, 6, 0.51);
  --overlay-accent: rgba(226, 177, 51, 0.18);
  --overlay-muted: rgba(43, 48, 52, 0.4);

  --gray-100: #9A9A9A;
  --gray-200: #797979;
  --gray-300: #666666;
  --gray-400: #575757;
  --gray-500: #4D4D4D;
  --gray-600: #333333;
  --gray-700: #292D32;
  --gray-800: #272727;

  --steel: #858585;
  --steel-dark: #49484D;
  --steel-light: #A1A0A6;
  --steel-variant: #808084;
  --slate: #555B6C;
  --color-212121: #212121;

  --primary: #2132B2;
  --primary-light: #A07FEC;
  --primary-variant: #342E85;
  --secondary: #05926A;
  --secondary-light: #1A932E;

  --accent-yellow: #E5AE21;
  --accent-gold: #D1AA67;
  --accent-orange: #DFA510;
  --accent-orange-red: #E65F2B;
  --accent-red: #F64650;

  --gradient-primary-vertical: linear-gradient(180deg, #2132B2 0%, #0E154C 100%);
  --gradient-primary-horizontal: linear-gradient(90deg, #0FF6A0 0%, #2132B2 100%);
  --gradient-primary-diagonal: linear-gradient(203.79deg, #03E899 19.91%, #202E94 61.75%, #202E94 63.25%);
  --gradient-light-purple: linear-gradient(172.78deg, #F2F0FC 8.04%, #EEEDF9 40.25%, #E4E6F3 72.46%, #DDE2F3 80.51%, #D8E0F3 88.56%);
  --gradient-light-lavender: linear-gradient(155.01deg, #F3F1FC 30.44%, #E4E2ED 44.65%, #DDDBE8 54.12%, #CBC7DC 63.59%, #AFA8C9 73.06%);

  --surface-gray: #BCC1C6;
  --surface-light: #E8F4F9;
  --surface-variant: #A0AEC0;

  --badge-accepted: #34C759;
  --badge-pending: #CABDFF;
  --badge-cancelled: #FEE2E2;
  --highlight-cyan: #00F0FF;
  --text-main: #111827;
  --filter-border: #D1D5DB;
  --filter-bg-transparent: rgba(0, 122, 255, 0.05);
}
```

### Typography

```css
:root {
  --font-family-jakarta: 'Plus Jakarta Sans', sans-serif;
  --font-family-ibm: 'IBM Plex Sans Arabic', sans-serif;
  --font-family-poppins: 'Poppins', sans-serif;

  --font-size-xs: 10px;
  --font-size-sm: 12px;
  --font-size-base: 14px;
  --font-size-md: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 20px;
  --font-size-2xl: 24px;
  --font-size-3xl: 28px;
  --font-size-4xl: 32px;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### Borders

```css
:root {
    --border-radius-xs: 2px;
    --border-radius-sm: 4px;
    --border-radius-md: 6px;
    --border-radius-lg: 8px;
    --border-radius-xl: 12px;
    --border-radius-2xl: 16px;
    --border-radius-3xl: 24px;
    --border-radius-4xl: 32px;
    --border-radius-pill: 50px;
    --border-radius-full: 9999px;

    --border-radius-figma-1: 13.3125px;
    --border-radius-figma-2: 10.7317px;
    --border-radius-figma-3: 20.9932px;

    --border-width-thin: 1px;
    --border-width-md: 2px;
    --border-width-thick: 3px;
}
```

### Shadows

```css
:root {
  /* Light Shadows */
  --shadow-subtle: 0px 4px 6px rgba(0, 0, 0, 0.02);
  --shadow-soft: 6px 6px 54px rgba(0, 0, 0, 0.03);
  --shadow-medium: 6px 6px 54px rgba(0, 0, 0, 0.05);
  --shadow-strong: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* Inset Shadows */
  --shadow-inset-light: inset 0px 3px 4px rgba(255, 255, 255, 0.45);
  --shadow-inset-complex: -2px 0px 4px rgba(255, 255, 255, 0.13), inset 0px 3px 4px rgba(255, 255, 255, 0.25);
  --shadow-inset-subtle: inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1);
  --shadow-inset-figma: inset 0px 1.6185px 1.6185px -0.809249px rgba(74, 74, 104, 0.1);

  /* Colored Shadows */
  --shadow-blue-focus: 0px 0px 4px rgba(0, 115, 185, 0.43);
  --shadow-blue-glow: 0px 0px 11px rgba(0, 115, 185, 0.25);
}
```

### Transitions/Animations

```css
:root {
  --transition-duration-fast: 150ms;
  --transition-duration-normal: 300ms;
  --transition-duration-slow: 500ms;
  --transition-easing-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

