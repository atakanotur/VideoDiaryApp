import { queryKeys } from '@/constants/queryKeys';
import { trimVideoService } from '@/services/trimVideoService';
import { useMutation } from '@tanstack/react-query';

export const useTrimVideo = () => {
  return useMutation({
    mutationKey: queryKeys.video.trim(),
    mutationFn: trimVideoService,
  });
};
