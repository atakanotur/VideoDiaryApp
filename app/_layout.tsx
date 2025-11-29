import '../global.css';

import { Stack } from 'expo-router';
import { StatusBar } from '@/components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Layout() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        retry: 2
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar />
      <Stack screenOptions={{ headerShown: false }} />
    </QueryClientProvider>
  )
}
