import React from 'react';
import Stories from './components/Stories';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './hooks/useDarkMode';
import { lightTheme, darkTheme } from './styles/theme';
import Toggle from './components/Toggle';
const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Stories></Stories>;
      </>
    </ThemeProvider>
  );
};

export default App;
