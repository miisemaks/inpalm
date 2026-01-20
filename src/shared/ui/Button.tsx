import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { colors } from 'shared/styles/colors';
import { LiquidGlassView } from '@sbaiahmed1/react-native-blur';

type Props = {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  disabled?: boolean;
};

export const Button = (props: Props) => {
  const { title, onPress, variant = 'primary', loading, disabled } = props;

  return (
    <LiquidGlassView
      style={styles.container}
      isInteractive
      glassType="regular"
      glassTintColor={variant === 'primary' ? colors.accent2 : 'transparent'}
      glassOpacity={0.8}
    >
      <TouchableOpacity
        style={styles.touch}
        onPress={onPress}
        disabled={disabled}
      >
        {loading ? (
          <ActivityIndicator color={colors.textPrimary} />
        ) : (
          <Text
            style={{
              color: disabled
                ? colors.textSecondary
                : variant === 'primary'
                ? colors.textPrimary
                : colors.accent,
            }}
          >
            {title}
          </Text>
        )}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
});
