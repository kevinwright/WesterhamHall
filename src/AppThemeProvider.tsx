import React, { ReactElement, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { appThemeMode } from './app-atoms';

interface Props {
  children: ReactElement;
}

function AppThemeProvider({ children }: Props): ReactElement {
  const mode = useRecoilValue(appThemeMode);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          // primary: {
          //   main: '#61dafb',
          // },
          // secondary: {
          //   main: '#EB9612CC',
          // }
        },
      }),
    [mode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;