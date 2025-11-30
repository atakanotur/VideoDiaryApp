import { File, Directory, Paths } from 'expo-file-system';

export const getVideoFileUri = (uri: string): string => {
  const videosDir = new Directory(Paths.document, 'videos');
  const videoFile = new File(videosDir, uri);
  const fullUri = videoFile.uri;

  return fullUri;
};
