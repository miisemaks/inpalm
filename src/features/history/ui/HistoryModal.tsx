import React, { useCallback, useRef } from 'react';
import {
  View,
  Modal,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Close } from 'shared/icons/Close';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from 'shared/styles/colors';
import { useForm } from 'react-hook-form';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { HistoryType } from 'shared/types/History';
import Video from 'react-native-video';

type Props = {
  visible: boolean;
  onClose: () => void;
  data: HistoryType[] | null;
  onPressNext: () => void;
  onPressPrev: () => void;
  username: string | null;
  user_avatar: string | null;
};

export const HistoryModal = (props: Props) => {
  const {
    visible,
    onClose,
    data,
    onPressNext,
    onPressPrev,
    username,
    user_avatar,
  } = props;
  const { width, height } = useWindowDimensions();
  const { top, bottom } = useSafeAreaInsets();
  const { watch, setValue } = useForm<{
    index: number;
  }>({
    defaultValues: {
      index: 0,
    },
  });
  const { index } = watch();
  const refScroll = useRef<ScrollView>(null);

  const height_item = useCallback(() => {
    return height - top - bottom - 90;
  }, [bottom, height, top]);

  return (
    <Modal visible={visible} onDismiss={onClose} transparent>
      <View style={[styles.root, { paddingTop: top }]}>
        <View style={styles.viewTop}>
          <View style={styles.viewLine}>
            {data
              ? data.map((_, urlIndex) => (
                  <View
                    key={`url_${urlIndex}`}
                    style={{
                      height: 2,
                      flex: 1,
                      backgroundColor:
                        urlIndex < index ? '#fff' : colors.border,
                    }}
                  />
                ))
              : null}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 16,
              gap: 16,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
                flex: 1,
              }}
            >
              <Avatar size={32} url={user_avatar} />
              <Text numberOfLines={1} style={{ fontWeight: 600 }}>
                {username}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.touchClose}
              onPress={() => {
                onClose();
                setValue('index', 0);
              }}
            >
              <Close />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewBottom}>
          {data ? (
            <ScrollView
              ref={refScroll}
              horizontal
              style={{ height: height_item() }}
              contentContainerStyle={{
                paddingHorizontal: 16,
                gap: 16,
              }}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
            >
              {data.map((url, urlIndex) => {
                if (url.type === 'video') {
                  return (
                    <Video
                      key={`history_${urlIndex}`}
                      source={{
                        uri: 'https://media.istockphoto.com/id/1457891830/ru/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE/%D0%B3%D0%BE%D0%BD%D0%BA%D0%B0-%D1%87%D0%B5%D1%80%D0%B5%D0%BF%D0%B0%D1%85%D0%BE%D0%B2%D1%8B%D1%85-%D0%BA%D1%80%D0%BE%D0%BB%D0%B8%D0%BA%D0%BE%D0%B2-%D1%87%D0%B5%D1%80%D0%B5%D0%BF%D0%B0%D1%85%D0%B0-%D0%BF%D0%BE%D0%B1%D0%B5%D0%B6%D0%B4%D0%B0%D0%B5%D1%82.mp4?s=mp4-640x640-is&k=20&c=Tm_mnSsYbh-Y8O6KRmdH-jYplXiwXSNvrGDjZ1dZWfk=',
                      }}
                      repeat={true}
                      style={[
                        styles.image,
                        {
                          width: width - 32,
                          height: height_item(),
                        },
                      ]}
                      controlsStyles={{
                        hideFullscreen: true,
                        hidePrevious: true,
                        hideNext: true,
                      }}
                    />
                  );
                }
                return (
                  <Image
                    key={`history_${urlIndex}`}
                    source={{ uri: url.url }}
                    style={[
                      styles.image,
                      {
                        width: width - 32,
                        height: height_item(),
                      },
                    ]}
                  />
                );
              })}
            </ScrollView>
          ) : null}
          <TouchableOpacity
            style={[
              styles.touchPrevNext,
              {
                width: width * 0.25,
                height: height_item(),
                left: 0,
              },
            ]}
            onPress={() => {
              if (index > 0) {
                setValue('index', index - 1);
                refScroll.current?.scrollTo({
                  y: 0,
                  x: (index - 1) * (width - 16),
                  animated: true,
                });
              } else {
                onPressPrev();
              }
            }}
          />
          <TouchableOpacity
            style={[
              styles.touchPrevNext,
              {
                height: height_item(),
                width: width * 0.25,
                right: 0,
              },
            ]}
            onPress={() => {
              if (data && index < data?.length - 1) {
                setValue('index', index + 1);
                refScroll.current?.scrollTo({
                  y: 0,
                  x: (index + 1) * (width - 16),
                  animated: true,
                });
              } else {
                onPressNext();
              }
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
    gap: 16,
  },
  viewTop: {
    gap: 16,
  },
  viewBottom: {
    flex: 1,
    position: 'relative',
  },
  viewLine: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
    borderRadius: 2,
  },
  touchClose: {},
  touchPrevNext: {
    position: 'absolute',
  },
  image: {
    borderRadius: 24,
    resizeMode: 'contain',
    backgroundColor: '#000',
  },
});
