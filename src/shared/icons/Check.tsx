import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { colors } from 'shared/styles/colors';
import { IconProps } from 'shared/types/IconProp';

export const Check = ({ size = 24, color = 'textPrimary' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.47767 15.9079L4.52996 10.9539L3.46997 12.0153L8.94767 17.4999C9.24038 17.793 9.71495 17.793 10.0077 17.4999L20.4651 7.02923L19.4051 5.9679L9.47767 15.9079Z"
        fill={colors[color]}
      />
    </Svg>
  );
};
