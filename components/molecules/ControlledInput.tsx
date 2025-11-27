import { useState } from 'react';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';
import { Pressable, View } from 'react-native';
import { TextInput, Icon } from '../atoms';

type ControlledInputProps<TFieldValues extends FieldValues> = {
    control: Control<TFieldValues>;
    name: FieldPath<TFieldValues>;
    placeholder: string;
    secureTextEntry?: boolean;
    className?: string;
    containerClassName?: string;
    defaultValue?: string;
    keyboardType?: any;
};

export const ControlledInput = <TFieldValues extends FieldValues>({
    control,
    name,
    placeholder,
    secureTextEntry,
    className,
    containerClassName,
    defaultValue,
    keyboardType,
    ...otherProps
}: ControlledInputProps<TFieldValues>) => {

    const [passwordVisible, setPasswordVisible] = useState(!!secureTextEntry);
    const [selectionName, setSelectionName] = useState("");

    const onFocus = () => setSelectionName(name);
    const onBlur = () => setSelectionName("");

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
                <View
                    className={`
                        ${styles.container}
                        ${error ? styles.errorContainer : ""}
                        ${containerClassName || ""}
                    `}
                >
                    <TextInput
                        className={`
                            ${styles.textInput}
                            ${className || ""}
                        `}
                        value={value}
                        onChangeText={onChange}
                        placeholder={
                            error
                                ? error.ref?.name
                                : selectionName !== ""
                                    ? ""
                                    : placeholder
                        }
                        placeholderTextColor={error ? "red" : "grey"}
                        secureTextEntry={passwordVisible}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        defaultValue={defaultValue}
                        keyboardType={keyboardType}
                        {...otherProps}
                    />

                    {(name === "password" || name === "confirmPassword") && (
                        <Pressable
                            className={styles.showHideButton}
                            onPress={() => setPasswordVisible(!passwordVisible)}
                        >
                            <Icon
                                name={passwordVisible ? "eye-off" : "eye"}
                                size={25}
                            />
                        </Pressable>
                    )}
                </View>
            )}
        />
    );
};

ControlledInput.displayName = "ControlledInput";

const styles = {
    container: `flex-row w-full justify-between bg-indigo-300 rounded-[28px]`,
    errorContainer: ` border-red-500`,
    textInput: `flex-1 bg-transparent`,
    showHideButton: ` self-center pr-4`,
};