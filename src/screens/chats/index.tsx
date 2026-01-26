import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'shared/ui/Text';

export const Chats = () => {
  return (
    <View style={styles.root}>
      <Text>Chats screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
