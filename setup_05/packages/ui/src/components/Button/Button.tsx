import React from 'react';
import { COLORS, SPACING } from '../../tokens';

export interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    variant = 'primary',
    size = 'medium',
    isLoading = false
}) => {
    const baseStyle = {
        padding: SPACING[size],
        backgroundColor: variant === 'primary' ? COLORS.primary : COLORS.secondary,
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: isLoading ? 'wait' : 'pointer',
        opacity: isLoading ? 0.7 : 1,
    };

    return (
        <button style={baseStyle} onClick={onClick} disabled={isLoading}>
            {isLoading ? 'Loading...' : label}
        </button>
    );
};
