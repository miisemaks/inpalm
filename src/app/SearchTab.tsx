import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Advertisements } from 'screens/search/advertisements';
import { Peoples } from 'screens/search/peoples';
import { Products } from 'screens/search/products';
import { Groups } from 'screens/search/groups';
import { colors } from 'shared/styles/colors';
import { useForm } from 'react-hook-form';
import { SearchTabParamList } from 'shared/types/navigation';

const Tab = createMaterialTopTabNavigator<SearchTabParamList>();

export const SearchTab = () => {
  const { watch, setValue } = useForm<{ search: string }>({
    defaultValues: {
      search: '',
    },
  });
  const { search } = watch();

  return (
    <View style={styles.root}>
      <TextInput
        value={search}
        onChangeText={value => setValue('search', value)}
        style={{
          marginHorizontal: 16,
          borderWidth: 1,
          borderColor: colors.textSecondary,
          borderRadius: 16,
          paddingHorizontal: 16,
          paddingVertical: 12,
          color: colors.textPrimary,
          backgroundColor: colors.bgPrimary,
        }}
        placeholder="Поиск"
      />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.bgSecondary,
            paddingHorizontal: 16,
          },
          tabBarIndicatorContainerStyle: {
            paddingHorizontal: 16,
            marginLeft: 16,
          },
          sceneStyle: {
            backgroundColor: colors.bgSecondary,
            paddingTop: 16,
          },
          tabBarIndicatorStyle: {
            backgroundColor: colors.accent,
          },
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarActiveTintColor: colors.accent,
        }}
      >
        <Tab.Screen
          name="Advertisements"
          component={Advertisements}
          options={{
            tabBarLabel: 'Объявления',
            tabBarLabelStyle: {
              width: 100,
            },
          }}
        />
        <Tab.Screen
          name="People"
          component={Peoples}
          options={{
            tabBarLabel: 'Люди',
          }}
        />
        <Tab.Screen
          name="Products"
          component={Products}
          options={{
            tabBarLabel: 'Товары',
          }}
        />
        <Tab.Screen
          name="Groups"
          component={Groups}
          options={{
            tabBarLabel: 'Группы',
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
