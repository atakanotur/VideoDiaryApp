import { Banner, Container, Text } from "@/components";
import { useVideoStore } from "@/store/useVideoStore";
import { useRouter } from "expo-router";
import { VideoView, useVideoPlayer } from "expo-video"
import { getVideoFileUri } from "@/utils/getVideoFileUri";

const VideoDetails = () => {
    const router = useRouter();

    const video = useVideoStore((state) => state.selectedVideo);

    const fullUri = getVideoFileUri(video.uri);

    const player = useVideoPlayer(fullUri, (player) => {
        player.addListener("sourceChange", () => {
            player.loop = true;
            player.play();
        });
    });

    return (
        <Container className="bg-white dark:bg-gray-900 gap-5">
            <Banner screenName="Video Details" leftIconName="arrow-back" leftIconPress={() => router.back()} />
            <VideoView player={player} style={{ width: '100%', aspectRatio: 16 / 9, backgroundColor: 'black' }} />
            <Text className="font-bold text-center">{video.name}</Text>
            <Text className="" >{video.description}</Text>
        </Container>
    );
};

export default VideoDetails;