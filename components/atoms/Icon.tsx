import { useTheme } from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons"
import { OpaqueColorValue } from "react-native";

type IconProps = {
    name: keyof typeof Ionicons.glyphMap;
    size: number;
    color?: string | OpaqueColorValue
    onPress?: () => void
}

export const Icon = ({ name, size, color, onPress }: IconProps) => {
    const { theme } = useTheme();
    return <Ionicons color={color || theme === 'dark' ? 'white' : 'gray-900'} name={name} size={size} onPress={onPress} />
}



