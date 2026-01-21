import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { colors } from 'shared/styles/colors';
import { IconProps } from 'shared/types/IconProp';

export const ChevronRight = ({
  size = 24,
  color = 'textPrimary',
}: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5577 11.4693L10.0577 5.99982L8.99996 7.06343L13.9652 12.0011L8.99996 16.9387L10.0577 18.0023L15.5577 12.5329C15.6992 12.3921 15.7788 12.2007 15.7788 12.0011C15.7788 11.8014 15.6992 11.61 15.5577 11.4693Z"
        fill={colors[color]}
      />
    </Svg>
  );
};
