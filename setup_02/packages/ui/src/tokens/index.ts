/**
 * Design Tokens (Tier 1)
 * Single source of truth for variables. No logic.
 */

export const COLORS = {
    primary: '#007AFF', // System Blue
    secondary: '#5856D6', // System Purple
    success: '#34C759', // System Green
    warning: '#FF9500', // System Orange
    error: '#FF3B30', // System Red
    background: {
        light: '#FFFFFF',
        dark: '#000000',
        subtle: '#F2F2F7',
    },
    text: {
        primary: '#000000',
        secondary: '#8E8E93',
        inverse: '#FFFFFF',
    },
    border: '#C6C6C8',
};

export const SPACING = {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 64,
};

export const TYPOGRAPHY = {
    fontFamily: {
        sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        mono: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
    fontSize: {
        xs: 12,
        s: 14,
        m: 16,
        l: 20,
        xl: 24,
        xxl: 32,
    },
    fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
    },
};

export const SHADOWS = {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
};
