import React, { useContext } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native';
import dark from '../theme/variables/dark';
import { Theme } from '../types';

const ThemeContext = React.createContext<Theme>(dark);

export function useTheme(): Theme {
  return useContext(ThemeContext);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ThemeProvider: React.FC<{ theme: Theme; children: any }> = ({ theme, children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      <StyledComponentsThemeProvider theme={theme}>{children}</StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};
