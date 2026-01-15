import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
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
      style={styles.container}
      colorScheme="system"
      tintColor={variant === 'primary' ? colors.accent2 : 'transparent'}
      interactive
      effect="regular"
    >
      <TouchableOpacity style={styles.touch} onPress={onPress}>
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

const styles = StyleSheet.create({
  container: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  touch: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
