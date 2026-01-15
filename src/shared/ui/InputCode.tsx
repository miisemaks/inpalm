import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text } from './Text';
import { colors } from 'shared/styles/colors';

type Props = {
  value: string;
  onChange: (value: string) => void;
  size?: number;
  error?: string | null;
  onComplete: (value: string) => void;
};

export const InputCode = (props: Props) => {
  const { value, onChange, size = 4, error, onComplete } = props;

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {Array.from(Array(size).keys()).map(i => (
          <TouchableOpacity
            key={`item_${i}`}
            style={[
              styles.rect,
              {
                width: (Dimensions.get('window').width - 32 - 32) / size - 12,
                height: (Dimensions.get('window').width - 32 - 32) / size - 12,
                borderColor: error
                  ? colors.danger
                  : value.length === i
                  ? colors.accent
                  : colors.textPrimary,
              },
            ]}
          >
            <Text
              style={[
                styles.text,
                {
                  fontSize: 20 - size,
                  color: error
                    ? colors.danger
                    : value.length === i
                    ? colors.accent
                    : colors.textPrimary,
                },
              ]}
            >
              {value.length > i ? value[i] : value.length === i ? '|' : ''}
            </Text>
          </TouchableOpacity>
        ))}
        <TextInput
          value={value}
          onChangeText={val => {
            onChange(val);
            if (val.length === size) {
              onComplete(val);
            }
          }}
          maxLength={size}
          autoFocus
          keyboardType="number-pad"
          style={{
            width: 0,
            height: 0,
            backfaceVisibility: 'hidden',
            backgroundColor: 'transparent',
          }}
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 12,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  rect: {
    borderWidth: 1,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.textPrimary,
    fontWeight: 600,
  },
  errorText: {
    color: colors.danger,
  },
});
