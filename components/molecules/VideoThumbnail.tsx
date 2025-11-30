import { Image } from "react-native";
import * as VideoThumbnails from "expo-video-thumbnails";
import { useEffect, useState } from "react";
import { getVideoFileUri } from "@/utils/getVideoFileUri";

type VideoThumbnailProps = {
    uri: string;
}

export const VideoThumbnail = ({ uri }: VideoThumbnailProps) => {
    const [thumbnail, setThumbnail] = useState('');

    const fullUri = getVideoFileUri(uri);

    useEffect(() => {
        const createThumbnail = async () => {
            const { uri: thumbnailUri } = await VideoThumbnails.getThumbnailAsync(
                fullUri,
                {
                    time: 15000,
                }
            );

            setThumbnail(thumbnailUri);
        }
        createThumbnail();
    }, [])

    if (thumbnail === '') {
        return null;
    }

    return (
        <Image className="w-20 h-20 rounded-full" source={{ uri: thumbnail }} />
    )
}

VideoThumbnail.displayName = "VideoThumbnail";
