import Ionicons from "@expo/vector-icons/Ionicons";

import { Icon } from "./Icon";
import { Text } from "./Text";
import { View } from "./View";
import { Switch } from "react-native";
import { useTheme } from "@/hooks/useTheme";

type BannerProps = {
    screenName: string;
    leftIconName?: keyof typeof Ionicons.glyphMap;
    leftIconPress?: () => void;
};

export const Banner = ({
    leftIconName,
    leftIconPress,
    screenName,
}: BannerProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <View className={`${styles.container}`}>
            {leftIconName && leftIconPress ? (
                <Icon
                    name={leftIconName}
                    size={25}
                    onPress={leftIconPress}
                />
            ) : (
                <View />
            )}

            <Text className={styles.screenName}>
                {screenName}
            </Text>

            <Switch
                value={theme === "dark"}
                onValueChange={toggleTheme}
            />
        </View>
    );
};

Banner.displayName = "Banner";

const styles = {
    container: `flex-row justify-between items-center p-5`,
    screenName: `font-bold text-xl color-black dark:color-white`
};