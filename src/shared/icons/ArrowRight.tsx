import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { colors } from 'shared/styles/colors';
import { IconProps } from 'shared/types/IconProp';

export const ArrowRight = ({ size = 24, color = 'textPrimary' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1827 12.749L12.9711 16.9388L14.029 18.0022L19.5289 12.5307C19.6704 12.39 19.75 12.1986 19.75 11.999C19.75 11.7994 19.6704 11.6081 19.5289 11.4673L14.0289 5.99585L12.9711 7.05926L17.1826 11.249L4 11.249L4 12.749L17.1827 12.749Z"
        fill={colors[color]}
      />
    </Svg>
  );
};
