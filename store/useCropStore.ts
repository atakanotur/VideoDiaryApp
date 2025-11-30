import { create } from 'zustand';

type CropState = {
  pickedVideo: InsertVideo;
  setPickedVideo: (video: InsertVideo) => void;
  updatePickedVideo: (video: InsertVideo) => void;
};

export const useCropStore = create<CropState>()((set) => ({
  pickedVideo: {} as InsertVideo,
  setPickedVideo: (video: InsertVideo) => set({ pickedVideo: video }),
  updatePickedVideo: (video: InsertVideo) =>
    set((state) => ({ pickedVideo: { ...state.pickedVideo, ...video } })),
}));
