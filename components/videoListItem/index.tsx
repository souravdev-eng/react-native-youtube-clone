import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Text, View, Image } from 'react-native';
import styles from './styles';

type VideoListItemProps = {
  video: {
    id: string;
    createdAt: string;
    title: string;
    thumbnail: string;
    duration: number;
    views: number;
    user: {
      name: string;
      image?: string;
    };
  };
};

const VideoListItem = (props: VideoListItemProps) => {
  const { video } = props;
  const minutes = Math.floor(video.duration / 60);
  const scends = video.duration % 60;

  let videoString = video.views;

  if (video.views > 1_000_000) {
    videoString = (video.views / 1_000_000).toFixed(1) + 'm';
  } else if (video.views > 1_000) {
    videoString = (video.views / 1_000).toFixed(1) + 'k';
  }

  return (
    <>
      {/* Video component */}
      <View style={styles.videoCard}>
        <View>
          {/* Thumnail */}
          <Image style={styles.thumbnail} source={{ uri: video.thumbnail }} />
          <View style={styles.timeContainer}>
            <Text style={styles.time}>
              {minutes}:{scends < 10 ? '0' : ''}
              {scends}
            </Text>
          </View>
        </View>

        {/* Title Row */}
        <View style={styles.titleRow}>
          {/* Avator */}
          <Image style={styles.avator} source={{ uri: video.user.image }} />
          {/* Middle conatiner: Title,subtitle,etc... */}
          <View style={styles.middleContainer}>
            <Text style={styles.videoTitle}>{video.title}</Text>
            <Text style={styles.videoSubTitle}>
              {video.user.name} {videoString} {video.createdAt}
            </Text>
          </View>

          {/* Menu icon or  dot icon */}
          <Entypo name='dots-three-vertical' size={16} color='white' />
        </View>
      </View>
    </>
  );
};

export default VideoListItem;
