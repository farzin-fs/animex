import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { useDarkMode } from './hooks';
import Navigation from './navigation';
import { store } from './stores';
import { darkTheme, lightTheme } from './themes';

const App: React.FC = () => {
  const isDarkMode = useDarkMode();

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Navigation />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
