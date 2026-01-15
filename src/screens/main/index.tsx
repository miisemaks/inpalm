import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'shared/ui/Text';

export const Main = () => {
  return (
    <View style={styles.root}>
      <Text>Main</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
