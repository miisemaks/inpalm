import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { LiquidGlassView } from '@callstack/liquid-glass';
import { colors } from 'shared/styles/colors';

type Props = {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary';
};

export const Button = (props: Props) => {
  const { title, onPress, variant = 'primary' } = props;

  return (
    <LiquidGlassView
      style={{
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
      }}
      colorScheme="system"
      tintColor={variant === 'primary' ? colors.accent2 : 'transparent'}
      interactive
      effect="regular"
    >
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            color: variant === 'primary' ? colors.textPrimary : colors.accent,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </LiquidGlassView>
  );
};
