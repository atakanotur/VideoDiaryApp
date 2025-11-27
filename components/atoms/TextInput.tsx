import { forwardRef } from "react";
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps } from "react-native"

type TextInputProps = {

} & RNTextInputProps;

export const TextInput = forwardRef<RNTextInput, TextInputProps>(({ ...textInputProps }, ref) => {
    return (
        <RNTextInput ref={ref} {...textInputProps} className={`${styles.input} ${textInputProps.className}`} />
    )
})

TextInput.displayName = 'TextInput'

const styles = {
    input: 'shadow-md p-4 bg-indigo-300 rounded-[28px]',
};
