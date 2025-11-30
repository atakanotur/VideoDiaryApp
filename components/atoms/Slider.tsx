import RNCSlider, { SliderProps } from '@react-native-community/slider';

export const Slider = ({ ...props }: SliderProps) => {
    return <RNCSlider {...props} />
}

Slider.displayName = 'Slider';