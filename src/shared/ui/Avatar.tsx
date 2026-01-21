import React, { memo } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { ProfileCircle } from 'shared/icons/ProfileCircle';
import { colors } from 'shared/styles/colors';
import { LiquidGlassView } from '@sbaiahmed1/react-native-blur';

type Props = {
  url: string | null;
  size?: number;
  disabled?: boolean;
};

export const Avatar = memo((props: Props) => {
  const { size = 56, url, disabled } = props;

  return (
    <LiquidGlassView
      style={{ borderRadius: size / 2, width: size, height: size }}
      isInteractive={!disabled}
      glassType="regular"
      glassOpacity={0.8}
      glassTintColor={colors.bgPrimary}
    >
      <TouchableOpacity disabled={disabled}>
        {url ? (
          <Image
            style={{
              width: size,
              height: size,
              borderRadius: size / 2,
            }}
            source={{ uri: url }}
          />
        ) : (
          <View
            style={{
              width: size,
              height: size,
              borderRadius: size / 2,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.bgSecondary,
            }}
          >
            <ProfileCircle size={36} />
          </View>
        )}
      </TouchableOpacity>
    </LiquidGlassView>
  );
});
