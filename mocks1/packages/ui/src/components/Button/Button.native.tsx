import React from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';

interface ButtonProps {
    label: string;
    onPress?: () => void;
    variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ label, onPress, variant = 'primary' }) => {
    const style: ViewStyle = {
        padding: 10,
        backgroundColor: variant === 'primary' ? '#0070f3' : '#ff4081',
        borderRadius: 4,
        alignItems: 'center'
    };

    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <Text style={{ color: 'white' }}>{label}</Text>
        </TouchableOpacity>
    );
};
