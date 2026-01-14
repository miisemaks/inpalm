import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from 'screens/login';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from 'shared/styles/colors';
import { View } from 'react-native';
import { ConfirmCode } from 'screens/confirmCode';
import { Register } from 'screens/register';
import { RootStackParamList } from 'shared/types/navigation';
import { Restore } from 'screens/restore';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bgPrimary }}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: colors.bgPrimary,
              },
              headerTitleStyle: {
                color: colors.textPrimary,
              },
              contentStyle: {
                backgroundColor: colors.bgPrimary,
              },
              headerBackTitle: '',
            }}
          >
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: 'Авторизация' }}
            />
            <Stack.Screen
              name="ConfirmCode"
              component={ConfirmCode}
              options={{ title: 'Подтверждение кода' }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ title: 'Регистрация' }}
            />
            <Stack.Screen
              name="Restore"
              component={Restore}
              options={{ title: 'Восстановление аккаунта' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
};
