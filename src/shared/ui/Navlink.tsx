import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from './Text';
import { ChevronRight } from 'shared/icons/ChevronRight';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export const Navlink = memo((props: Props) => {
  const { title, onPress, disabled } = props;
  return (
    <TouchableOpacity style={styles.root} disabled={disabled} onPress={onPress}>
      <Text style={{ fontWeight: 600 }}>{title}</Text>
      <ChevronRight />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
