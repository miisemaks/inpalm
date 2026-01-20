import React, { memo } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { LiquidGlassView } from '@sbaiahmed1/react-native-blur';
import { colors } from 'shared/styles/colors';

type Props = {
  url?: string | null;
  onPress?: () => void;
};

export const HistoryButton = memo((props: Props) => {
  const { url, onPress } = props;

  return (
    <LiquidGlassView
      isInteractive
      glassType="regular"
      glassOpacity={0.7}
      glassTintColor={colors.accent2}
      style={{ borderRadius: 28 }}
    >
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{
            width: 56,
            height: 56,
            borderRadius: 28,
          }}
          source={url ? { uri: url } : undefined}
        />
      </TouchableOpacity>
    </LiquidGlassView>
  );
});
