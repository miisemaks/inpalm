import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Chats } from 'screens/chats';
import { Main } from 'screens/main';
import { Profile } from 'screens/profile';
import { Search } from 'screens/search';
import { colors } from 'shared/styles/colors';
import { BottomTabParamList } from 'shared/types/navigation';
import { Search as SearchIcon } from 'shared/icons/Search';
import { ProfileCircle } from 'shared/icons/ProfileCircle';
import { Message } from 'shared/icons/Message';
import { Home } from 'shared/icons/Home';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.bgPrimary,
        },
        sceneStyle: {
          backgroundColor: colors.bgPrimary,
        },
        tabBarStyle: {
          backgroundColor: colors.bgPrimary,
        },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textSecondary,
        headerTitleStyle: {
          color: colors.textPrimary,
        },
      }}
      initialRouteName="Main"
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
          tabBarLabel: 'Главная',
          tabBarIcon: props => (
            <Home color={props.focused ? 'accent' : 'textSecondary'} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: props => (
            <SearchIcon color={props.focused ? 'accent' : 'textSecondary'} />
          ),
          tabBarLabel: 'Поиск',
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarLabel: 'Чаты',
          tabBarIcon: props => (
            <Message color={props.focused ? 'accent' : 'textSecondary'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Профиль',
          tabBarIcon: props => (
            <ProfileCircle color={props.focused ? 'accent' : 'textSecondary'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
