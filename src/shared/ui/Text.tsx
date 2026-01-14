import React from 'react';
import { Text as RCTText, TextProps } from 'react-native';
import { colors } from 'shared/styles/colors';

type Props = TextProps & {
  variant?: 'regular' | 'medium' | 'bold';
};

export const Text = (props: Props) => {
  const { children, ...rest } = props;

  return (
    <RCTText
      allowFontScaling={false}
      style={{
        color: colors.textPrimary,
      }}
      {...rest}
    >
      {children}
    </RCTText>
  );
};
