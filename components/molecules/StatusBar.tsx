import { useTheme } from "@/hooks/useTheme";
import { StatusBar as ExpoStatusBar, StatusBarProps as ExpoStatusBarProps } from "expo-status-bar";

export const StatusBar = (props: ExpoStatusBarProps) => {
    const { theme } = useTheme();

    const style = theme === 'dark' ? 'light' : 'dark';

    return <ExpoStatusBar {...props} style={style} animated/>
}

StatusBar.displayName = 'StatusBar'