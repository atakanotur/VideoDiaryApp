import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

export const Container = ({ children, className }: { children?: React.ReactNode } & SafeAreaViewProps) => {
  return (
    <SafeAreaView className={`${styles.container} ${className}`} edges={['top']}>
      {children}
    </SafeAreaView>
  )
};

const styles = {
  container: 'flex-1 p-2 pv-0 bg-white dark:bg-gray-900',
};