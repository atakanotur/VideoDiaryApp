import '../global.css';

import { Stack } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';
import { StatusBar } from '@/components';

export default function Layout() {
  const { theme } = useTheme();
  return (
    <>
      <StatusBar />
      <Stack initialRouteName='auth' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='auth' options={{ headerShown: false }} />
        <Stack.Screen name='main' options={{ headerShown: false }} />
      </Stack>
    </>
  )
}
