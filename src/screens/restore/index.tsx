import React from 'react';
import { View } from 'react-native';
import { RootStackScreenProps } from 'shared/types/navigation';
import { Text } from 'shared/ui/Text';

type Props = RootStackScreenProps<'Restore'>;

export const Restore = (props: Props) => {
  const {} = props;
  return (
    <View style={{ flex: 1 }}>
      <Text>Restore</Text>
    </View>
  );
};
