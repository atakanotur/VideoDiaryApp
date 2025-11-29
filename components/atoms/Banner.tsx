import Ionicons from "@expo/vector-icons/Ionicons";

import { Icon } from "./Icon";
import { Text } from "./Text";
import { View } from "./View";

type BannerProps = {
    screenName: string;
    leftIconName?: keyof typeof Ionicons.glyphMap;
    leftIconPress?: () => void;
    rightIconName?: keyof typeof Ionicons.glyphMap;
    rightIconPress?: () => void;
};

export const Banner = ({
    leftIconName,
    leftIconPress,
    screenName,
    rightIconName,
    rightIconPress
}: BannerProps) => {
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

            {rightIconName && rightIconPress ? (
                <Icon
                    name={rightIconName}
                    size={25}
                    onPress={rightIconPress}
                />
            ) : (
                <View />
            )}
        </View>
    );
};

Banner.displayName = "Banner";

const styles = {
    container: `flex-row justify-between items-center p-5`,
    screenName: `font-bold text-xl color-black dark:color-white`
};