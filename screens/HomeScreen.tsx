import React from 'react';
import { FlatList, View } from 'react-native';
import VideoListItem from '../components/videoListItem';

import videos from '../assets/data/videos.json';

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoListItem video={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;
