import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from 'shared/styles/colors';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';

type Props = {
  url?: string | null;
  onPress?: () => void;
  readed?: boolean;
  name: string;
};

export const HistoryButton = memo((props: Props) => {
  const { url, onPress, readed, name } = props;

  return (
    <TouchableOpacity
      style={styles.container}
      disabled={!!onPress}
      onPress={onPress}
    >
      <View
        style={{
          width: 60,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 30,
          backgroundColor: readed ? colors.border : colors.accent,
        }}
      >
        <Avatar url={url ?? null} onPress={onPress} />
      </View>

      <Text numberOfLines={1} style={styles.name}>
        {name}
      </Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 4,
  },
  name: {
    fontSize: 12,
    fontWeight: 600,
    maxWidth: 56,
  },
});
