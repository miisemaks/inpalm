import { BlurView, LiquidGlassView } from '@sbaiahmed1/react-native-blur';
import { memo } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { ArrowLeft } from 'shared/icons/ArrowLeft';
import { Comments } from 'shared/icons/Comments';
import { Heart } from 'shared/icons/Heart';
import { HeartFill } from 'shared/icons/HeartFill';
import { MenuKebab } from 'shared/icons/MenuKebab';
import { colors } from 'shared/styles/colors';
import { Text } from 'shared/ui/Text';

type Props = {
  onPress?: () => void;
  images?: string[];
  avatar?: string | null;
  text?: string | null;
  authorName: string;
  likes: number;
  is_liked: boolean;
  comments: number;
  onPressShare?: () => void;
};

export const AdvertisementCard = memo((props: Props) => {
  const {
    onPress,
    images,
    avatar,
    authorName,
    text,
    likes,
    comments,
    onPressShare,
    is_liked,
  } = props;
  const { width } = useWindowDimensions();

  return (
    <TouchableOpacity
      style={{
        width: width,
        gap: 8,
      }}
      disabled
      onPress={onPress}
    >
      <View style={styles.viewAuthor}>
        <Image
          style={styles.avatar}
          source={
            avatar
              ? {
                  uri: avatar,
                }
              : undefined
          }
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.authorName}>{authorName}</Text>
        </View>
        <TouchableOpacity>
          <MenuKebab />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={images}
        keyExtractor={(_, index) => `image_${index}`}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <LiquidGlassView>
            <ImageBackground
              style={{
                width: width,
                height: width,
              }}
              source={{ uri: item }}
            >
              <BlurView
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  borderRadius: 16,
                  alignSelf: 'flex-end',
                  marginTop: 8,
                  marginRight: 8,
                  position: 'absolute',
                }}
                overlayColor={colors.accent + '66'}
                blurType="light"
                blurAmount={8}
              >
                <Text>
                  {index + 1} / {images?.length}
                </Text>
              </BlurView>
            </ImageBackground>
          </LiquidGlassView>
        )}
      />
      {text ? <Text style={{ paddingHorizontal: 16 }}>{text}</Text> : null}
      <View style={styles.infoView}>
        <TouchableOpacity style={styles.viewTouch}>
          {is_liked ? <HeartFill color={'danger'} /> : <Heart />}
          <Text
            style={{ color: is_liked ? colors.danger : colors.textPrimary }}
          >
            {likes}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewTouch}>
          <Comments />
          <Text>{comments}</Text>
        </TouchableOpacity>
        {onPressShare ? (
          <TouchableOpacity onPress={onPressShare}>
            <ArrowLeft />
          </TouchableOpacity>
        ) : null}
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  viewAuthor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 8,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  authorName: {
    fontWeight: 600,
  },
  infoView: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
  },
  viewTouch: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
