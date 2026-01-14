import React from 'react';
import { View, TextInput, KeyboardType } from 'react-native';
import { colors } from 'shared/styles/colors';
import { Text } from './Text';
import { MaskedTextInput } from 'react-native-advanced-input-mask';

type Props = {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: string | null;
  mask?: string;
  keyboardType?: KeyboardType;
};

export const Input = (props: Props) => {
  const { label, value, onChange, placeholder, error, mask, keyboardType } =
    props;
  const Component = mask ? MaskedTextInput : TextInput;

  return (
    <View style={{ gap: 8 }}>
      <Text style={{ fontSize: 12, color: colors.textSecondary }}>{label}</Text>
      <View style={{ gap: 4 }}>
        <Component
          style={{
            backgroundColor: colors.bgSecondary,
            height: 48,
            borderRadius: 12,
            paddingHorizontal: 12,
            color: colors.textPrimary,
            borderWidth: 1,
            borderColor: error ? colors.danger : colors.bgSecondary,
          }}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          // @ts-ignore
          mask={mask ? mask : undefined}
          keyboardType={keyboardType}
        />
        {error ? (
          <Text
            style={{
              color: colors.danger,
              fontSize: 12,
            }}
          >
            {error}
          </Text>
        ) : null}
      </View>
    </View>
  );
};
