import React from 'react';
import { WebView, StatusBar } from 'react-native';
import { Container } from 'native-base';
import { getHtml } from './sprayPaintCanvas';
import { useTheme } from '../../providers/themeProvider';

export const SprayPaint: React.FC<{}> = () => {
  const theme = useTheme();

  return (
    <Container style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <WebView scrollEnabled={false} source={{ html: getHtml({ theme }) }} style={{ flex: 1 }} />
    </Container>
  );
};
