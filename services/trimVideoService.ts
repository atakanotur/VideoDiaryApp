import { trimVideo } from 'expo-trim-video';

export type TrimVideoPayload = {
  uri: string;
  start: number;
  end: number;
};

export const trimVideoService = async ({ uri, start, end }: TrimVideoPayload): Promise<string> => {
  if (start >= end) throw new Error('Start must be less than End');

  try {
    const result = await trimVideo({ uri, start, end });
    console.log('Trimmed video saved to:', result.uri);
    return result.uri;
  } catch (error: any) {
    console.error('Error trimming video:', error.message);
    throw new Error(error.message);
  }
};
