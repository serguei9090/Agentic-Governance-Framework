import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from '../../tokens';

export interface ButtonProps {
    variant?: 'primary' | 'secondary';
    size?: 's' | 'm' | 'l';
    label: string;
    onPress?: () => void;
    isLoading?: boolean;
}

/**
 * Primitive Button Component (Native)
 * Tier 2: No external margins.
 */
export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'm',
    label,
    onPress,
    isLoading = false,
}) => {
    const getContainerStyle = (): ViewStyle => {
        const baseStyle: ViewStyle = {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            opacity: isLoading ? 0.7 : 1,
        };

        const sizeStyles: Record<string, ViewStyle> = {
            s: {
                paddingVertical: SPACING.xs,
                paddingHorizontal: SPACING.s,
            },
            m: {
                paddingVertical: SPACING.s,
                paddingHorizontal: SPACING.m,
            },
            l: {
                paddingVertical: SPACING.m,
                paddingHorizontal: SPACING.l,
            },
        };

        const variantStyles: Record<string, ViewStyle> = {
            primary: {
                backgroundColor: COLORS.primary,
            },
            secondary: {
                backgroundColor: COLORS.background.subtle,
            },
        };

        return { ...baseStyle, ...sizeStyles[size], ...variantStyles[variant] };
    };

    const getTextStyle = (): TextStyle => {
        const baseStyle: TextStyle = {
            fontFamily: TYPOGRAPHY.fontFamily.sans.split(',')[0],
            fontWeight: '500',
        };

        const sizeStyles: Record<string, TextStyle> = {
            s: { fontSize: TYPOGRAPHY.fontSize.s },
            m: { fontSize: TYPOGRAPHY.fontSize.m },
            l: { fontSize: TYPOGRAPHY.fontSize.l },
        };

        const variantStyles: Record<string, TextStyle> = {
            primary: { color: COLORS.text.inverse },
            secondary: { color: COLORS.text.primary },
        };

        return { ...baseStyle, ...sizeStyles[size], ...variantStyles[variant] };
    };

    return (
        <TouchableOpacity
            style={getContainerStyle()}
            onPress={onPress}
            disabled={isLoading}
            activeOpacity={0.7}
        >
            {isLoading ? (
                <ActivityIndicator color={variant === 'primary' ? COLORS.text.inverse : COLORS.text.primary} />
            ) : (
                <Text style={getTextStyle()}>{label}</Text>
            )}
        </TouchableOpacity>
    );
};
