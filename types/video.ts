type Video = {
  id: number;
  uri: string;
  duration: number;
  description: string;
  createdAt: string;
  updatedAt: string;
};

type InsertVideo = {
  uri: string;
  description: string;
  duration: number;
  createdAt: string;
  updatedAt: string;
};

type UpdateVideo = {
  id: number;
  uri: string;
  description: string;
  duration: number;
  createdAt: string;
  updatedAt: string;
};

export { Video, InsertVideo, UpdateVideo };
