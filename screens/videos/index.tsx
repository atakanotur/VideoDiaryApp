import { Container, Banner, Text, Button } from "@/components";
import { useVideoList } from "@/hooks/queries/videoQueries";
import { useRouter } from "expo-router";
import { FlatList, Pressable, Image } from "react-native";
import * as VideoThumbnails from "expo-video-thumbnails";
import { useState } from "react";

const Videos = () => {
    const router = useRouter();

    const { data } = useVideoList();

    const [thumbnail, setThumbnail] = useState("");

    const videoListRenderItem = ({ item, index }: { item: Video, index: number }) => {
        return (
            <Pressable className="flex-row justify-between ">
                <Image source={{ uri: thumbnail }} />
                <Text>
                    {item.description}
                </Text>
                <Text adjustsFontSizeToFit>
                    {item.duration} seconds
                </Text>
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
            />
        </Container>
    );
};

export default Videos;