import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const metadataSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
});

type MetadataFields = z.infer<typeof metadataSchema>;

const useMetadataForm = () => {
  return useForm<MetadataFields>({
    defaultValues: {
      name: '',
      description: '',
    },
    resolver: zodResolver(metadataSchema),
  });
};

export { useMetadataForm, MetadataFields };
