import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';

type Props = {
  url?: string | null;
  onPress?: () => void;
};

export const HistoryButton = memo((props: Props) => {
  const { url, onPress } = props;

  return (
    <TouchableOpacity
      style={styles.container}
      disabled={!!onPress}
      onPress={onPress}
    >
      <Avatar url={url ?? null} />
      <Text numberOfLines={1} style={styles.name}>
        Mikhail
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
