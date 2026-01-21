import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from 'shared/styles/colors';

export const Divider = memo(() => {
  return <View style={styles.root} />;
});

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 1,
    backgroundColor: colors.textSecondary,
  },
});
