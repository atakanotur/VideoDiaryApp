import { create } from 'zustand';

type VideoState = {
  videos: Video[];
  selectedVideo: Video;
  setVideos: (videos: Video[]) => void;
  addVideo: (video: Video) => void;
  setSelectedVideo: (video: Video) => void;
};

export const useVideoStore = create<VideoState>()((set) => ({
  videos: [],
  selectedVideo: {} as Video,
  setVideos: (videos: Video[]) => set({ videos: videos }),
  addVideo: (video: Video) => set((state) => ({ videos: [...state.videos, video] })),
  setSelectedVideo: (video: Video) => set({ selectedVideo: video }),
}));
