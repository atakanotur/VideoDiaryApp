import { Container, Text, View } from "@/components";
import { useTheme } from "@/hooks/useTheme";
import { useRouter } from "expo-router";
import { Switch } from "react-native";

const SignUp = () => {
    const router = useRouter();

    const { theme, themeMode, toggleTheme } = useTheme();

    return (
        <Container className="bg-white dark:bg-gray-900">
            <View>
                <Text>
                    Developheim
                </Text>

                <Text>
                    Theme Mode: {themeMode}
                </Text>

                <Text>
                    Active Theme: {theme}
                </Text>

                <View>
                    <Text className="text-gray-900 dark:text-white font-medium">
                        Dark Mode
                    </Text>
                    <Switch
                        value={theme === 'dark'}
                        onValueChange={toggleTheme}
                        trackColor={{ false: '#d1d5db', true: '#3b82f6' }}
                        thumbColor={theme === 'dark' ? '#ffffff' : '#f3f4f6'}
                    />
                </View>
            </View>
        </Container>
    );
};

export default SignUp;