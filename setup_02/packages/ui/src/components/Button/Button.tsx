import React from 'react';
import { COLORS, SPACING, TYPOGRAPHY } from '../../tokens';

export interface ButtonProps {
    variant?: 'primary' | 'secondary';
    size?: 's' | 'm' | 'l';
    label: string;
    onClick?: () => void;
    isLoading?: boolean;
}

/**
 * Primitive Button Component (Web)
 * Tier 2: No external margins.
 */
export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'm',
    label,
    onClick,
    isLoading = false,
}) => {
    const getStyles = () => {
        const baseStyle: React.CSSProperties = {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            borderRadius: 4,
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.7 : 1,
            fontFamily: TYPOGRAPHY.fontFamily.sans,
            fontWeight: TYPOGRAPHY.fontWeight.medium,
            transition: 'background-color 0.2s ease',
        };

        const sizeStyles: Record<string, React.CSSProperties> = {
            s: {
                padding: `${SPACING.xs}px ${SPACING.s}px`,
                fontSize: TYPOGRAPHY.fontSize.s,
            },
            m: {
                padding: `${SPACING.s}px ${SPACING.m}px`,
                fontSize: TYPOGRAPHY.fontSize.m,
            },
            l: {
                padding: `${SPACING.m}px ${SPACING.l}px`,
                fontSize: TYPOGRAPHY.fontSize.l,
            },
        };

        const variantStyles: Record<string, React.CSSProperties> = {
            primary: {
                backgroundColor: COLORS.primary,
                color: COLORS.text.inverse,
            },
            secondary: {
                backgroundColor: COLORS.background.subtle,
                color: COLORS.text.primary,
            },
        };

        return { ...baseStyle, ...sizeStyles[size], ...variantStyles[variant] };
    };

    return (
        <button style={getStyles()} onClick={onClick} disabled={isLoading}>
            {isLoading ? 'Loading...' : label}
        </button>
    );
};
