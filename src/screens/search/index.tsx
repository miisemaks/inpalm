import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'shared/ui/Text';

export const Search = () => {
  return (
    <View style={styles.root}>
      <Text>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
