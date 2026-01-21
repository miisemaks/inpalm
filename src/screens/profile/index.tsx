import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ChevronRight } from 'shared/icons/ChevronRight';
import { getName } from 'shared/lib';
import { useUserStore } from 'shared/store/user';
import { colors } from 'shared/styles/colors';
import { BottomScreenProps } from 'shared/types/navigation';
import { Avatar } from 'shared/ui/Avatar';
import { Divider } from 'shared/ui/Divider';
import { Navlink } from 'shared/ui/Navlink';
import { Text } from 'shared/ui/Text';

type Props = BottomScreenProps<'Profile'>;

export const Profile = (props: Props) => {
  const {} = props;

  const { firstName, lastName, avatar } = useUserStore();

  return (
    <ScrollView style={styles.root} contentContainerStyle={{ gap: 16 }}>
      <View style={styles.card}>
        <Avatar size={64} url={avatar} />
        <Text style={styles.name}>
          {getName(firstName, lastName, 'Имя не задано')}
        </Text>
        <ChevronRight color="textSecondary" />
      </View>
      <View style={{ padding: 16, gap: 12 }}>
        <Navlink title="Друзья и близкие" onPress={() => {}} />
        <Divider />
        <Navlink title="Товары" onPress={() => {}} />
        <Divider />
        <Navlink title="Группы" onPress={() => {}} />
        <Divider />
        <Navlink title="Настройки" onPress={() => {}} />
        <Divider />
        <Navlink title="Политика конфиденциальности" onPress={() => {}} />
        <Divider />
        <Navlink title="Условия пользования" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 16,
    gap: 16,
  },
  card: {
    borderRadius: 24,
    padding: 12,
    borderColor: colors.bgPrimary,
    backgroundColor: colors.bgPrimary,
    borderWidth: 2,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  name: {
    flex: 1,
    fontSize: 14,
    fontWeight: 600,
  },
});
