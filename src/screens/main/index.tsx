import { AdvertisementCard } from 'features/advertisements';
import { HistoryButton } from 'features/history';
import React from 'react';
import { StyleSheet, FlatList, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomScreenProps } from 'shared/types/navigation';

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
        paddingTop: top + 16,
        gap: 12,
        paddingBottom: 16,
      }}
      data={Array.from(Array(5).keys())}
      keyExtractor={item => `item_${item}`}
      renderItem={({}) => (
        <AdvertisementCard
          onPress={() => {}}
          images={[
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvFCnfeCZ3qHSF36V9M92cSRHe5v9vsHHNg&s',
          ]}
          avatar={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJANsEJcL9KwlXD1mbzAhR7ikiiyds-OSPA&s'
          }
          authorName="FirstName LastName"
          text={'text'}
          likes={1}
          comments={2}
          onPressShare={() => {}}
          is_liked={false}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 12,
          }}
          data={histories}
          keyExtractor={(_, index) => `history_${index}`}
          horizontal
          renderItem={({ item }) => (
            <HistoryButton url={item.author.avatar} onPress={() => {}} />
          )}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 12,
  },
});
