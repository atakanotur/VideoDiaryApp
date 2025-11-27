import { forwardRef } from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native"

type TextProps = {

} & RNTextProps;

export const Text = forwardRef<RNText, TextProps>(({ ...textProps }, ref) => {
    return (
        <RNText ref={ref} {...textProps} className={`${styles.text} ${textProps.className}`}>
            {textProps.children}
        </RNText>
    )
})

Text.displayName = 'Text'

const styles = {
    text: 'color-black dark:color-white',
};
