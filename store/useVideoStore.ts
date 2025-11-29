import { create } from 'zustand';

type VideoState = {
  videos: Video[];
  setVideos: (videos: Video[]) => void;
  addVideo: (video: Video) => void;
};

export const useVideoStore = create<VideoState>()((set) => ({
  videos: [],
  setVideos: (videos: Video[]) => set({ videos: videos }),
  addVideo: (video: Video) => set((state) => ({ videos: [...state.videos, video] })),
}));
