import React from 'react';
import { View } from 'react-native';
import { RootStackScreenProps } from 'shared/types/navigation';
import { Text } from 'shared/ui/Text';

type Props = RootStackScreenProps<'ConfirmCode'>;

export const ConfirmCode = (props: Props) => {
  const {} = props;

  return (
    <View style={{ flex: 1 }}>
      <Text>ConfirmCode</Text>
    </View>
  );
};
