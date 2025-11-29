import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { VideoRepository } from '@/repositories/videoRepository';
import { queryKeys } from '@/constants/queryKeys';

export const useVideoList = () => {
  return useQuery({
    queryKey: queryKeys.video.list(),
    queryFn: () => VideoRepository.getAll(),
  });
};

export const useVideoDetail = (id: number) => {
  return useQuery({
    queryKey: [...queryKeys.video.root, 'detail', id],
    queryFn: () => VideoRepository.getById(id),
  });
};

export const useCreateVideo = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data: Omit<InsertVideo, 'id'>) => VideoRepository.create(data),

    onSuccess: () => {
      qc.invalidateQueries({ queryKey: queryKeys.video.list() });
    },
  });
};

export const useUpdateVideo = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Video> }) =>
      VideoRepository.update(id, data),

    onSuccess: (_, vars) => {
      qc.invalidateQueries({
        queryKey: [...queryKeys.video.root, 'detail', vars.id],
      });
      qc.invalidateQueries({ queryKey: queryKeys.video.list() });
    },
  });
};

export const useDeleteVideo = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => VideoRepository.remove(id),

    onSuccess: () => {
      qc.invalidateQueries({ queryKey: queryKeys.video.list() });
    },
  });
};
