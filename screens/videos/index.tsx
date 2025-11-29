import { Container, Banner, VideoPlayer, Button } from "@/components";
import { usePickVideo } from "@/hooks/usePickVideo";
import { useTrimVideo } from "@/hooks/useTrimVideo";
import { useRouter } from "expo-router";

const Videos = () => {
    const router = useRouter();

    const { pickVideo, videoUri } = usePickVideo();
    const { mutateAsync: trimMutateAsync, data } = useTrimVideo();

    const crop = async () => {
        await trimMutateAsync({
            uri: videoUri,
            start: 1,
            end: 5
        })
    }

    return (
        <Container className="bg-white dark:bg-gray-900">
            <Banner screenName="Videos" leftIconName="cloud-sharp" leftIconPress={() => router.push(`/editVideo/${15}`)} rightIconName="add" rightIconPress={pickVideo} />
            <VideoPlayer videoUri={data ? data : ""} />
            <Button title="Crop" onPress={crop} />
        </Container>
    );
};

export default Videos;