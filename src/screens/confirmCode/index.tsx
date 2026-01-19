import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { useNavigationStore } from 'shared/store/navigation';
import { colors } from 'shared/styles/colors';
import { RootStackScreenProps } from 'shared/types/navigation';
import { InputCode } from 'shared/ui/InputCode';
import { Text } from 'shared/ui/Text';

type Props = RootStackScreenProps<'ConfirmCode'>;

export const ConfirmCode = (props: Props) => {
  const { navigation, route } = props;
  const { phone } = route.params;
  const { watch, setValue } = useForm<{
    code: string;
    errorText: string | null;
    sec: number;
  }>({
    defaultValues: {
      code: '',
      errorText: null,
      sec: 0,
    },
  });
  const { code, errorText, sec } = watch();
  const { setInitialScreen } = useNavigationStore();

  useEffect(() => {
    setTimeout(() => {
      if (sec < 60) {
        setValue('sec', sec + 1);
      }
    }, 1000);
  }, [sec, setValue]);

  return (
    <View style={styles.container}>
      <Text style={styles.descr}>
        На номер {phone} отправлен код, {'\n'} введите его
      </Text>
      <InputCode
        value={code}
        onChange={value => {
          setValue('code', value);
          setValue('errorText', null);
        }}
        size={4}
        error={errorText}
        onComplete={value => {
          if (value === '1234') {
            setInitialScreen('Tab');
            navigation.popToTop();
            navigation.replace('Tab', {
              screen: 'Main',
            });
          } else {
            setValue('errorText', code + ' ' + 'Код введен неправильно');
          }
        }}
      />
      <Text
        style={[
          styles.sec,
          {
            color: sec >= 60 ? colors.accent : colors.textSecondary,
          },
        ]}
        disabled={sec < 60}
        onPress={() => {
          setValue('sec', 0);
        }}
      >
        {sec < 60
          ? `Повторная отправка СМС-сообщения через ${60 - sec}`
          : 'Отправить повторно'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    gap: 24,
  },
  descr: {
    textAlign: 'center',
  },
  sec: {
    textAlign: 'center',
  },
});
