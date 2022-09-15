// custom button component based on React Native TouchableOpacity component

import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { COLORS, COLOR_TYPES } from '../theme';

interface Props extends TouchableOpacityProps {
  children: React.ReactNode;
  color?: COLOR_TYPES;
  textColor?: COLOR_TYPES;

  weight?: 'bold' | 'normal';
}

const Button = ({ children, color = COLORS.dark as COLOR_TYPES, textColor = COLORS.light as COLOR_TYPES, size = 16, weight = 'normal', ...props }: Props) => {

  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS[color],
        borderRadius: 8,
        padding: 16,
      }}
      {...props}
    >

    </TouchableOpacity>
  );
};

export { Button };

  //

