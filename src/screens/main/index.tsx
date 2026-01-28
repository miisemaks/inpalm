import { AdvertisementCard } from 'features/advertisements';
import { HistoryButton, HistoryModal } from 'features/history';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  StyleSheet,
  FlatList,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getName } from 'shared/lib';
import { HistoryType } from 'shared/types/History';
import { BottomScreenProps } from 'shared/types/navigation';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';

const histories: {
  data: HistoryType[];
  author: {
    id: number;
    firstName: string;
    lastName: string;
    avatar: string;
  };
}[] = [
  {
    data: [
      {
        id: 0,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvFCnfeCZ3qHSF36V9M92cSRHe5v9vsHHNg&s',
        type: 'image',
        duration: 5,
      },
      {
        id: 1,
        url: 'https://media.istockphoto.com/id/1457891830/ru/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE/%D0%B3%D0%BE%D0%BD%D0%BA%D0%B0-%D1%87%D0%B5%D1%80%D0%B5%D0%BF%D0%B0%D1%85%D0%BE%D0%B2%D1%8B%D1%85-%D0%BA%D1%80%D0%BE%D0%BB%D0%B8%D0%BA%D0%BE%D0%B2-%D1%87%D0%B5%D1%80%D0%B5%D0%BF%D0%B0%D1%85%D0%B0-%D0%BF%D0%BE%D0%B1%D0%B5%D0%B6%D0%B4%D0%B0%D0%B5%D1%82.mp4?s=mp4-640x640-is&k=20&c=Tm_mnSsYbh-Y8O6KRmdH-jYplXiwXSNvrGDjZ1dZWfk=',
        type: 'video',
        duration: 6,
      },
    ],
    author: {
      id: 0,
      firstName: 'firstName',
      lastName: 'lastName',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJANsEJcL9KwlXD1mbzAhR7ikiiyds-OSPA&s',
    },
  },
  {
    data: [
      {
        id: 0,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvFCnfeCZ3qHSF36V9M92cSRHe5v9vsHHNg&s',
        type: 'image',
        duration: 5,
      },
    ],
    author: {
      id: 1,
      firstName: 'firstName',
      lastName: 'lastName',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJANsEJcL9KwlXD1mbzAhR7ikiiyds-OSPA&s',
    },
  },
];

const ads = [
  {
    id: 1,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvFCnfeCZ3qHSF36V9M92cSRHe5v9vsHHNg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvFCnfeCZ3qHSF36V9M92cSRHe5v9vsHHNg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvFCnfeCZ3qHSF36V9M92cSRHe5v9vsHHNg&s',
    ],
    creator: {
      id: 2,
      firstName: 'Mikhail',
      lastName: 'Maksimov',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJANsEJcL9KwlXD1mbzAhR7ikiiyds-OSPA&s',
    },
    text: 'text',
    likes: 1,
    comments: 2,
    is_liked: false,
  },
  {
    id: 2,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvFCnfeCZ3qHSF36V9M92cSRHe5v9vsHHNg&s',
    ],
    creator: {
      id: 2,
      firstName: 'Mikhail',
      lastName: 'Maksimov',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJANsEJcL9KwlXD1mbzAhR7ikiiyds-OSPA&s',
    },
    text: 'text',
    likes: 2,
    comments: 0,
    is_liked: true,
  },
];

type Props = BottomScreenProps<'Main'>;

export const Main = (props: Props) => {
  const {} = props;
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const { watch, setValue } = useForm<{
    history_visible: boolean;
    modal_history_urls: HistoryType[] | null;
    username: string | null;
    user_avatar: string | null;
  }>({
    defaultValues: {
      history_visible: false,
      modal_history_urls: null,
      user_avatar: null,
      username: null,
    },
  });
  const { history_visible, modal_history_urls, username, user_avatar } =
    watch();

  return (
    <React.Fragment>
      <FlatList
        style={styles.root}
        contentContainerStyle={{
          width: width,
          paddingBottom: 16,
          gap: 12,
        }}
        data={ads}
        keyExtractor={item => `item_${item.id}`}
        renderItem={({ item }) => (
          <AdvertisementCard
            onPress={() => {}}
            images={item.images}
            avatar={item.creator.avatar}
            authorName={item.creator.firstName + ' ' + item.creator.lastName}
            text={item.text}
            likes={item.likes}
            comments={item.comments}
            onPressShare={() => {}}
            is_liked={item.is_liked}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingVertical: 16,
              paddingTop: top + 16,
              gap: 12,
            }}
            data={histories}
            keyExtractor={(_, index) => `history_${index}`}
            horizontal
            renderItem={({ item, index }) => (
              <HistoryButton
                name="Mikhail"
                url={item.author.avatar}
                readed={index % 2 !== 0}
                onPress={() => {
                  setValue('modal_history_urls', item.data);
                  setValue('user_avatar', item.author.avatar);
                  setValue(
                    'username',
                    getName(
                      item.author.firstName,
                      item.author.lastName,
                      'Новый пользователь',
                    ),
                  );
                  setValue('history_visible', true);
                }}
              />
            )}
            ListHeaderComponent={
              <TouchableOpacity style={{ gap: 4 }}>
                <Avatar size={56} url={null} />
                <Text style={styles.youText}>Вы</Text>
              </TouchableOpacity>
            }
          />
        }
      />
      <HistoryModal
        visible={history_visible}
        onClose={() => {
          setValue('modal_history_urls', null);
          setValue('history_visible', false);
        }}
        data={modal_history_urls}
        onPressPrev={() => {}}
        onPressNext={() => {}}
        username={username}
        user_avatar={user_avatar}
      />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 12,
  },
  youText: {
    fontSize: 12,
    alignSelf: 'center',
    fontWeight: 600,
  },
});
