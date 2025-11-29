import { useState } from "react";
import { Container, Button, VideoPlayer, TextInput } from "@/components";
import { usePickVideo } from "@/hooks/usePickVideo";
import { useTrimVideo } from "@/hooks/useTrimVideo";
import { useRouter } from "expo-router";
import { useVideoStore } from "@/store/useVideoStore";
import { set } from "react-hook-form";
import { useCreateVideo } from "@/hooks/queries/videoQueries";

const CropVideo = () => {
    const router = useRouter();

    const addVideo = useVideoStore((state) => state.addVideo);

    const { pickVideo, videoUri } = usePickVideo();

    const [uri, setUri] = useState<string>("");
    const [duration, setDuration] = useState<number>(0);
    const [description, setDescription] = useState<string>("");

    const { mutateAsync: trimMutateAsync } = useTrimVideo();

    const { mutateAsync: createVideoMutateAsync } = useCreateVideo();

    const crop = async ({ start, end }: { start: number; end: number; }) => {
        const result = await trimMutateAsync({
            uri: videoUri,
            start,
            end
        })

        setDuration(end - start);
        setUri(result);
    }

    const save = async () => {
        addVideo({ uri, duration, description });
        await createVideoMutateAsync({ uri, description, duration, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
        router.back();
    }

    return (
        <Container className="bg-white dark:bg-gray-900 p-3">
            <VideoPlayer videoUri={videoUri} />
            <Button title={videoUri ? "Pick another video" : "Pick a video"} onPress={pickVideo} />
            <Button title="Crop" onPress={() => crop({ start: 0, end: 3 })} />
            <TextInput placeholder="Description" onChangeText={setDescription} />
            <Button title="Save" onPress={save} />
        </Container>
    );
};

export default CropVideo;