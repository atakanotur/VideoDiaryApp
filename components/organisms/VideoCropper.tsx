import { VideoView, useVideoPlayer } from 'expo-video';
import { useState } from 'react';
import { Slider, Text, View } from '../atoms';

type VideoCropperProps = {
    uri: string;
    onChangeRange: (start: number, end: number) => void;
    range: number;
};

export const VideoCropper = ({ uri, onChangeRange, range }: VideoCropperProps) => {
    const player = useVideoPlayer(uri, (player) => {
        player.play();

        player.addListener('sourceChange', () => {
            player.pause();
            player.staysActiveInBackground = false;

            setStart(0)
            setDuration(Math.floor(player.duration));
        })
    });

    const [start, setStart] = useState<number>(0);
    const [duration, setDuration] = useState<number>(range);

    const onChangeSliderValue = (value: number) => {
        setStart(value);
    };

    const onSlidingComplete = (value: number) => {
        onChangeRange(value, value + range);
        const seekOffset = value - player.currentTime;
        player.currentTime = seekOffset;
    };

    const formatSeconds = (value: number) => {
        const minutes = Math.floor(value / 60)
            .toString()
            .padStart(2, '0');
        const seconds = Math.floor(value % 60)
            .toString()
            .padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    if (uri === "") return (
        <View className='py-5'>
            <Text className="text-center text-xl">Please pick a video</Text>
        </View>
    )

    return (
        <View className='bg-white dark:bg-gray-900 gap-5 bg-'>
            <VideoView
                style={{ width: '100%', aspectRatio: 16 / 9, backgroundColor: 'black' }}
                player={player}
            />
            <View>
                <Text>Start Time</Text>
                {duration > 0 &&
                    <Slider
                        style={{ width: '100%', height: 40 }}
                        minimumValue={0}
                        maximumValue={duration - range}
                        value={start}
                        onValueChange={onChangeSliderValue}
                        onSlidingComplete={onSlidingComplete}
                        onSlidingStart={() => player.pause()}
                        minimumTrackTintColor="#10b981"
                        maximumTrackTintColor="#d1d5db"
                        disabled={duration === 0}
                    />
                }
            </View>
            <Text className="text-center text-sm text-gray-500">
                {formatSeconds(start)} – {formatSeconds(start + range)}
            </Text>
        </View>
    );
};
