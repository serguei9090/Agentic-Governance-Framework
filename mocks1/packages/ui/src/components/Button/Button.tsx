import React from 'react';
// import { tokens } from '../../tokens/dist/js/tokens'; // Tokens build required first

interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    isDisabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', isDisabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            style={{
                padding: '10px 20px',
                // backgroundColor: tokens.color[variant].value, // usage example
                backgroundColor: variant === 'primary' ? '#0070f3' : '#ff4081',
                border: 'none',
                borderRadius: '4px',
                color: 'white',
                cursor: isDisabled ? 'not-allowed' : 'pointer'
            }}
        >
            {label}
        </button>
    );
};
