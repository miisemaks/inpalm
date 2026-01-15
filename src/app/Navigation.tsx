import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from 'screens/login';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from 'shared/styles/colors';
import { TouchableOpacity, View } from 'react-native';
import { ConfirmCode } from 'screens/confirmCode';
import { Register } from 'screens/register';
import { RootStackParamList } from 'shared/types/navigation';
import { Restore } from 'screens/restore';
import { ArrowLeft } from 'shared/icons/ArrowLeft';
import { TabNavigation } from './Tab';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bgPrimary }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            headerStyle: {
              backgroundColor: colors.bgPrimary,
            },
            headerTitleStyle: {
              color: colors.textPrimary,
            },
            contentStyle: {
              backgroundColor: colors.bgPrimary,
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeft />
              </TouchableOpacity>
            ),
          })}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Авторизация', headerLeft: () => null }}
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
          <Stack.Screen
            name="Tab"
            component={TabNavigation}
            options={{
              gestureEnabled: false,
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
