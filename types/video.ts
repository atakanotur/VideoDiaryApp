type Video = {
  id: number;
  uri: string;
  name: string;
  description?: string;
  duration: number;
  createdAt?: string;
  updatedAt?: string;
};

type InsertVideo = {
  uri: string;
  name: string;
  description?: string;
  duration: number;
  createdAt?: string;
  updatedAt?: string;
};

type UpdateVideo = {
  id: number;
  uri: string;
  name: string;
  description?: string;
  duration: number;
  createdAt?: string;
  updatedAt?: string;
};

export { Video, InsertVideo, UpdateVideo };
