import { AdvertisementCard } from 'features/advertisements';
import { HistoryButton } from 'features/history';
import React from 'react';
import {
  StyleSheet,
  FlatList,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomScreenProps } from 'shared/types/navigation';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';

const histories = [
  {
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvFCnfeCZ3qHSF36V9M92cSRHe5v9vsHHNg&s',
    ],
    author: {
      firstName: 'firstName',
      lastName: 'lastName',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJANsEJcL9KwlXD1mbzAhR7ikiiyds-OSPA&s',
    },
  },
  {
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvFCnfeCZ3qHSF36V9M92cSRHe5v9vsHHNg&s',
    ],
    author: {
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

  return (
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
          renderItem={({ item }) => (
            <HistoryButton url={item.author.avatar} onPress={() => {}} />
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
