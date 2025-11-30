import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';

export const usePickVideo = () => {
  const [videoUri, setVideoUri] = useState<string>('');
  const [videoDuration, setVideoDuration] = useState<number>(0);
  const pickVideo = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Permission to access the media library is required.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'videos',
      allowsMultipleSelection: false,
      allowsEditing: false,
    });

    if (!result.canceled) {
      const video = result.assets[0];
      setVideoUri(video.uri);
      if (video.duration) setVideoDuration(video.duration);
    }
  };

  return { videoUri, videoDuration, pickVideo };
};
