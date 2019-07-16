/* eslint-disable global-require */
import { Container } from 'native-base';
import React from 'react';
import { StatusBar, WebView } from 'react-native';

export const SprayPaint: React.FC<{}> = () => {
  return (
    <Container style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <WebView
        domStorageEnabled
        scrollEnabled={false}
        javaScriptEnabled
        mixedContentMode="always"
        source={require('../../../assets/splash/index.html')}
        style={{ flex: 1 }}
        allowFileAccess
        originWhitelist={['*']}
      />
    </Container>
  );
};
