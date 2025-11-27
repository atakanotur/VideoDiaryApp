import { Stack } from 'expo-router';
import { useTheme } from "@/hooks/useTheme";

export default function Layout() {
    const { theme } = useTheme();
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='signIn' options={{ headerTitle: 'Sign In', headerTitleStyle: { color: theme === 'dark' ? 'white' : 'black' } }} />
            <Stack.Screen name='signUp' options={{ headerTitle: 'Sign Up', headerTitleStyle: { color: theme === 'dark' ? 'white' : 'black' } }} />
        </Stack>
    )
}
