import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { colors } from 'shared/styles/colors';
import { IconProps } from 'shared/types/IconProp';

export const ChevronLeft = ({
  size = 24,
  color = 'textPrimary',
}: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.47115 11.4692L13.9711 5.99979L15.0289 7.0634L10.0636 12.001L15.0289 16.9387L13.9711 18.0023L8.47115 12.5329C8.32959 12.3921 8.25 12.2007 8.25 12.001C8.25 11.8014 8.32959 11.61 8.47115 11.4692Z"
        fill={colors[color]}
      />
    </Svg>
  );
};
