// custom button component based on React Native TouchableOpacity component

import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native';
import { COLORS, COLOR_TYPES, SPACING } from '../theme';
import { Text } from './Typography';

interface Props extends TouchableOpacityProps {
  color?: COLOR_TYPES;
  textColor?: COLOR_TYPES;
  weight?: 'bold' | 'normal';
  text?: string;
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: SPACING.small,
    paddingHorizontal: SPACING.medium,
  },

  outlined: {
    borderWidth: 1,
    borderColor: COLORS.primary,
  },

  textButton: {
    padding: 0,
    backgroundColor: 'transparent',
  }
})

const Button = ({ color = "primary", textColor = "light", weight = 'normal', text, ...props }: Props) => {

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: COLORS[color],
      }}
      {...props}
    >
      <Text color={textColor} textAlign="center">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
