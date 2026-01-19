import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackScreenProps } from 'shared/types/navigation';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

type Props = RootStackScreenProps<'Register'>;

export const Register = (props: Props) => {
  const {} = props;

  const { watch, setValue } = useForm<{
    firstName: string;
    lastName: string;
    phone: string;
    code: string;
    verification: boolean;
    smsRequested: boolean;
    sec: number;
  }>({
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      code: '',
      verification: false,
      smsRequested: false,
      sec: 0,
    },
  });
  const { firstName, lastName, phone, code, verification, smsRequested, sec } =
    watch();
  const { bottom, top } = useSafeAreaInsets();

  useEffect(() => {
    if (smsRequested && sec < 60) {
      setTimeout(() => {
        setValue('sec', sec + 1);
      }, 1000);
    }
  }, [sec, setValue, smsRequested]);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1, paddingHorizontal: 16 }}
      keyboardVerticalOffset={top + 16}
    >
      <View style={{ flex: 1, paddingBottom: bottom + 16 }}>
        <ScrollView
          style={styles.root}
          contentContainerStyle={styles.rootContainer}
          showsVerticalScrollIndicator={false}
        >
          <Input
            value={phone}
            onChange={value => setValue('phone', value)}
            label="Телефон"
            mask="+7 ([000]) [000] [00] [00]"
            placeholder="+7 (000) 000 00 00"
            keyboardType="number-pad"
            disabled={smsRequested}
            required
          />
          <Button
            title={
              !smsRequested
                ? 'Отправить СМС-код'
                : sec < 60
                ? `Отправить заново через ${60 - sec}`
                : 'Отправить СМС-код'
            }
            onPress={() => {
              setValue('sec', 0);

              setValue('smsRequested', true);
            }}
            disabled={phone.length !== 18 || sec !== 60}
          />
          {smsRequested ? (
            <>
              <Input
                value={code}
                onChange={value => setValue('code', value)}
                label="Код"
                placeholder="Код"
                keyboardType="number-pad"
              />
              <Button
                disabled={code.length !== 4}
                title="Верифицировать"
                onPress={() => {
                  setValue('verification', true);
                }}
              />
            </>
          ) : null}

          <Input
            value={firstName}
            onChange={value => setValue('firstName', value)}
            label="Имя"
            placeholder="Василий"
            required
          />
          <Input
            value={lastName}
            onChange={value => setValue('lastName', value)}
            label="Фамилия"
            placeholder="Васильев"
          />
        </ScrollView>
        <Button
          title="Зарегистрировать"
          onPress={() => {}}
          disabled={!verification}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  rootContainer: {
    gap: 12,
  },
});
