import { Button, Container, Icon, ControlledInput } from "@/components";
import { useTheme } from "@/hooks/useTheme";
import { useLoginForm } from "@/utils/resolverSchemas";
import { useRouter } from "expo-router";
import { Switch } from "react-native";

const SignIn = () => {
    const router = useRouter();

    const { theme, themeMode, toggleTheme } = useTheme();

    const { control, handleSubmit } = useLoginForm();

    const signIn = async ({ email, password }: { email: string, password: string }) => {
        console.log(email, password);
    }

    return (
        <Container className="bg-white dark:bg-gray-900">

            <Switch
                value={theme === 'dark'}
                onValueChange={toggleTheme}
                trackColor={{ false: '#d1d5db', true: '#3b82f6' }}
                thumbColor={theme === 'dark' ? '#ffffff' : '#f3f4f6'}
            />

            <ControlledInput control={control} name="email" placeholder="Email" />
            <ControlledInput control={control} name="password" placeholder="Password" secureTextEntry />

            <Button title="Sign In" onPress={handleSubmit(signIn)} />
        </Container>
    );
};

export default SignIn;