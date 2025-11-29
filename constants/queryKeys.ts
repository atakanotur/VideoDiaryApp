export const queryKeys = {
  video: {
    root: ['video'] as const,
    create: () => [queryKeys.video.root, 'create'] as const,
    list: () => [queryKeys.video.root, 'list'] as const,
    trim: () => [queryKeys.video.root, 'trim'] as const,
    pick: () => [queryKeys.video.root, 'pick'] as const,
  },
};
