import { Image } from "react-native";
import * as VideoThumbnails from "expo-video-thumbnails";
import { useEffect, useState } from "react";
import { Directory, Paths, File } from "expo-file-system";

type VideoThumbnailProps = {
    uri: string;
}

export const VideoThumbnail = ({ uri }: VideoThumbnailProps) => {
    const [thumbnail, setThumbnail] = useState('');

    const videosDir = new Directory(Paths.document, 'videos');
    const videoFile = new File(videosDir, uri);
    const fullUri = videoFile.uri; // Tam path

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
