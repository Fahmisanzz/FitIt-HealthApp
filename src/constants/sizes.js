export const SIZES = {
  // Font Sizes
  font: {
    xs: 11,
    sm: 12,
    base: 14,
    md: 14,
    lg: 16,
    xl: 18,
    2xl: 20,
    3xl: 24,
    4xl: 30,
    5xl: 36,
  },
  
  // Spacing (8px base)
  spacing: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
  },
  
  // Border Radius
  radius: {
    sm: 6,
    base: 8,
    md: 10,
    lg: 12,
    xl: 16,
    full: 9999,
  },
  
  // Line Heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
  
  // Font Weights
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
};

// Common patterns
export const BUTTON_SIZES = {
  sm: {
    padding: [SIZES.spacing[1], SIZES.spacing[3]],
    fontSize: SIZES.font.sm,
    radius: SIZES.radius.sm,
  },
  md: {
    padding: [SIZES.spacing[2], SIZES.spacing[4]],
    fontSize: SIZES.font.base,
    radius: SIZES.radius.base,
  },
  lg: {
    padding: [SIZES.spacing[3], SIZES.spacing[5]],
    fontSize: SIZES.font.lg,
    radius: SIZES.radius.md,
  },
};
