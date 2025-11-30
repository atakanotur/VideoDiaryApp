import { View } from "../atoms/View";
import { ActivityIndicator } from "react-native"

type LoadingProps = {
    isLoading: boolean
}

export const Loading = ({ isLoading }: LoadingProps) => {
    if (!isLoading) return null;

    return (
        <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" />
        </View>
    )
}

Loading.displayName = "Loading";
