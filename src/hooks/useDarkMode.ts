import { useColorScheme } from 'react-native';

const useDarkMode = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return isDarkMode;
};

export default useDarkMode;
