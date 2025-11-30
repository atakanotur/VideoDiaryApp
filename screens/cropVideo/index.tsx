import { useState } from "react";
import { Container, Button, ControlledInput, Icon, View, Loading, VideoCropper } from "@/components";
import { usePickVideo } from "@/hooks/usePickVideo";
import { useTrimVideo } from "@/hooks/useTrimVideo";
import { useRouter } from "expo-router";
import { useCreateVideo } from "@/hooks/queries/videoQueries";
import { useMetadataForm } from "@/utils/resolverSchemas";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { Alert, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const CropVideo = () => {
    const router = useRouter();

    const { pickVideo, videoUri } = usePickVideo();

    const { control, handleSubmit } = useMetadataForm();

    const translateX = useSharedValue(0);
    const animationDuration = 200;

    const [start, setStart] = useState<number>(0);
    const [end, setEnd] = useState<number>(0);

    const { mutateAsync: trimMutateAsync, isPending: trimPending } = useTrimVideo();
    const { mutateAsync: createVideoMutateAsync, isPending: createPending } = useCreateVideo();

    const firstStepStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }]
    }), [translateX])

    const secondStepStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value + width }]
    }), [translateX])

    const next = () => {
        if (!videoUri) return Alert.alert("Please select a video");
        translateX.value = withTiming(-width, { duration: animationDuration, easing: Easing.linear });
    }

    const goBack = () => {
        translateX.value = withTiming(5, { duration: animationDuration, easing: Easing.linear });
    }

    const crop = async ({ name, description }: { name: string; description?: string }) => {
        const result = await trimMutateAsync({
            uri: videoUri,
            start,
            end
        })

        const duration = end - start;

        await createVideoMutateAsync({ uri: result, name, description, duration, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });

        router.back();
    }

    const firstStep = () => (
        <Animated.View className={"w-full"} style={[firstStepStyle, { position: "absolute" }]}>
            <View style={{ width, gap: 10, padding: 10 }}>
                <VideoCropper uri={videoUri} range={5} onChangeRange={(start, end) => { setStart(start); setEnd(end); }} />
                <Button title={videoUri ? "Pick another video" : "Pick a video"} onPress={pickVideo} />
                <Button title={"Next"} onPress={next} />
            </View>
        </Animated.View>
    )

    const secondStep = () => (
        <Animated.View className={"w-full"} style={[secondStepStyle, { position: "absolute" }]}>
            <View style={{ width, gap: 10, padding: 10 }}>
                <Icon name="chevron-back-circle-outline" size={30} onPress={goBack} />
                <View className="gap-5">
                    <ControlledInput control={control} name="name" placeholder="Name" />
                    <ControlledInput control={control} name="description" placeholder="Description" />
                    <Button title="Crop" onPress={handleSubmit(crop)} />
                </View>
            </View>
        </Animated.View>
    )

    return (
        <Container className="bg-white dark:bg-gray-900 w-full">
            {secondStep()}
            {firstStep()}
            <Loading isLoading={trimPending || createPending} />
        </Container>
    );
};

export default CropVideo;