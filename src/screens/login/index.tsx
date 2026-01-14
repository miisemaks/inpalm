import React from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { colors } from 'shared/styles/colors';
import { RootStackScreenProps } from 'shared/types/navigation';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = RootStackScreenProps<'Login'>;

export const Login = (props: Props) => {
  const { navigation } = props;
  const { setValue, watch } = useForm<{ phone: string; phoneValid: boolean }>({
    defaultValues: {
      phone: '',
      phoneValid: true,
    },
  });
  const { phone, phoneValid } = watch();
  const { top, bottom } = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={bottom + top + 48}
    >
      <View style={{ flex: 1, marginHorizontal: 16, gap: 32 }}>
        <ScrollView
          style={{ flex: 1, gap: 16 }}
          contentContainerStyle={{ gap: 16, paddingTop: 24 }}
        >
          <Input
            value={phone}
            label="Номер телефона"
            onChange={value => {
              setValue('phone', value);
              setValue('phoneValid', true);
            }}
            placeholder="+7 (000) 000 00 00"
            error={!phoneValid ? 'Номер телефона указан неправильно' : null}
            mask="+7 ([000]) [000] [00] [00]"
            keyboardType="phone-pad"
            autoFocus
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{ color: colors.accent }}
              onPress={() => {
                navigation.navigate('Restore');
              }}
            >
              Забыли пароль?
            </Text>
            <Text
              style={{ color: colors.accent }}
              onPress={() => {
                navigation.navigate('Register', { phone: phone });
              }}
            >
              Регистрация
            </Text>
          </View>
        </ScrollView>
        <Button
          title="Войти"
          onPress={() => {
            if (phone.length > 11) {
              navigation.navigate('ConfirmCode', {
                phone: phone,
              });
            } else {
              setValue('phoneValid', false);
            }
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
