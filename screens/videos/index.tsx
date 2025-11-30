import { Container, Banner, Text, VideoThumbnail, View } from "@/components";
import { useVideoList } from "@/hooks/queries/videoQueries";
import { useRouter } from "expo-router";
import { FlatList, Pressable } from "react-native";
import { useVideoStore } from "@/store/useVideoStore";

const Videos = () => {
    const router = useRouter();

    const { data } = useVideoList();

    const setSelectedVideo = useVideoStore((state) => state.setSelectedVideo);

    const goDetails = (video: Video) => {
        setSelectedVideo(video);
        router.push("/videoDetails")
    }

    const videoListRenderItem = ({ item, index }: { item: Video, index: number }) => {
        return (
            <Pressable onPress={() => goDetails(item)}>
                <Text
                    className="text-center"
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {item.name}
                </Text>
                <View className="flex-row items-center px-2 py-2 gap-5">
                    <VideoThumbnail uri={item.uri} />

                    <View className="flex-1 mx-2">
                        <Text
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {item.description}
                        </Text>
                    </View>

                    <Text className="text-gray-300 ml-2">
                        {item.duration} seconds
                    </Text>
                </View>
            </Pressable>
        )
    }

    return (
        <Container className="bg-white dark:bg-gray-900">
            <Banner screenName="Videos" rightIconName="add" rightIconPress={() => router.push(`/cropVideo`)} />
            <FlatList
                data={data}
                extraData={data}
                renderItem={videoListRenderItem}
                contentContainerClassName="gap-5"
            />
        </Container>
    );
};

export default Videos;