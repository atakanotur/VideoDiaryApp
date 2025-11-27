import { useEffect } from 'react';
import { useColorScheme as useDeviceColorScheme } from 'react-native';
import { useColorScheme as useNativeWindColorScheme } from 'nativewind';
import { useThemeStore } from '../store/useThemeStore';

export const useTheme = () => {
  const deviceColorScheme = useDeviceColorScheme();
  const { colorScheme: nativeWindScheme, setColorScheme } = useNativeWindColorScheme();
  const { themeMode, setTheme, toggleTheme } = useThemeStore();

  const theme = themeMode === 'system' ? deviceColorScheme || 'light' : themeMode;

  useEffect(() => {
    setColorScheme(theme);
  }, [theme, setColorScheme]);

  return {
    theme,
    themeMode,
    setTheme,
    toggleTheme,
  };
};

export default useTheme;
