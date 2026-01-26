import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  ConfirmCode: {
    phone: string;
  };
  Register: {
    phone: string;
  };
  Restore: undefined;
  Tab: NavigatorScreenParams<BottomTabParamList>;
};

export type BottomTabParamList = {
  Main: undefined;
  Search: undefined;
  Chats: undefined;
  Profile: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<RootStackParamList, T>,
    BottomTabScreenProps<BottomTabParamList>
  >;

export type BottomScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, T>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type SearchTabParamList = {
  Advertisements: undefined;
  People: undefined;
  Products: undefined;
  Groups: undefined;
};

export type SearchTabScreenProps<T extends keyof SearchTabParamList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<SearchTabParamList, T>,
    NativeStackScreenProps<RootStackParamList>
  >;
