import { forwardRef } from "react";
import { View as RNView, ViewProps as RNViewProps } from "react-native";

type ViewProps = RNViewProps

export const View = forwardRef<RNView, ViewProps>(({ children, ...props }, ref) => {
    return <RNView ref={ref} className={`${styles.view} ${props.className}`} {...props}>{children}</RNView>
})

View.displayName = 'View'

const styles = {
    view: 'bg-white dark:bg-gray-900',
};
