/* BASE VALUES */
const fontSizes = [
  '0.75rem',
  '0.875rem',
  '1rem',
  '1.125rem',
  '1.25rem',
  '1.5rem',
  '1.875rem',
  '2.25rem',
  '3rem',
  '4rem',
];

/* ALIAS VALUES */

// Generic
fontSizes.xs = fontSizes[0];
fontSizes.sm = fontSizes[1];
fontSizes.md = fontSizes[2];
fontSizes.lg = fontSizes[3];
fontSizes.xl = fontSizes[4];
fontSizes['2xl'] = fontSizes[5];
fontSizes['3xl'] = fontSizes[6];
fontSizes['4xl'] = fontSizes[7];
fontSizes['5xl'] = fontSizes[8];
fontSizes['6xl'] = fontSizes[9];

// headings
fontSizes.h1 = fontSizes[5];
fontSizes.h2 = fontSizes[4];
fontSizes.h3 = fontSizes[3];
fontSizes.h4 = fontSizes[2];
fontSizes.h5 = fontSizes[1];
fontSizes.h6 = fontSizes[0];

export default fontSizes;
