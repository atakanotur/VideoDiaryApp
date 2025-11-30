import { forwardRef } from "react";
import { View as RNView, ViewProps } from "react-native";

export const View = forwardRef<RNView, ViewProps>(({ children, ...props }, ref) => {
    return <RNView ref={ref} className={`${styles.view} ${props.className}`} {...props}>{children}</RNView>
})

View.displayName = 'View'

const styles = {
    view: 'bg-white dark:bg-gray-900',
};
