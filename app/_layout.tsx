import '../global.css';

import { Stack } from 'expo-router';
import { StatusBar } from '@/components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useEffect } from "react";
import { createTables } from "@/services/sqlite";

export default function Layout() {
  useEffect(() => {
    createTables();
  }, []);

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
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="cropVideo" options={{ presentation: 'modal' }} />
        <Stack.Screen name="videoDetails/[id]" />
      </Stack>
    </QueryClientProvider>
  )
}
