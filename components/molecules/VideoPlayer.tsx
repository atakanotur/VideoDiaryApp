import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video"
import { forwardRef } from "react";
type VideoProps = {
    videoUri: string;
}

export const VideoPlayer = forwardRef<VideoView, VideoProps>(({ videoUri }: VideoProps, ref) => {
    const player = useVideoPlayer(videoUri, player => {
        player.loop = true;
        player.play();
    })

    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

    return (
        <VideoView ref={ref} player={player} style={{ width: '100%', height: 300 }} />
    )
})

VideoPlayer.displayName = 'Video'