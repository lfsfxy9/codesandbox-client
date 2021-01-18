import { createStyled } from '@stitches/react';
import { sandpackLightTheme as defaultTheme } from './themes';

export const { styled, css } = createStyled({
  prefix: 'sp',
  tokens: {
    colors: {
      $highlightText: defaultTheme.palette.highlightText,
      $defaultText: defaultTheme.palette.defaultText,
      $inactive: defaultTheme.palette.inactive,
      $mainBackground: defaultTheme.palette.mainBackground,
      $inputBackground: defaultTheme.palette.inputBackground,
      $accent: defaultTheme.palette.accent,
      $error: '#C02C24',
    },
    space: {
      $1: '4px',
      $2: '8px',
      $3: '12px',
      $4: '16px',
      $5: '20px',
      $6: '24px',
    },
    fontSizes: {
      $default: '14px',
    },
    fonts: {
      $body:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',
      $mono:
        '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace;',
    },
    radii: {
      $default: '4px',
    },
  },
  breakpoints: {},
  utils: {},
});
