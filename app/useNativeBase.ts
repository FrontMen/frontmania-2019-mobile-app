// TODO: sadly we can't move this into src folder

/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable global-require */
import { useEffect } from 'react';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

const fonts = {
  Roboto: require('native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  ...Ionicons.font,
};

export function useNativeBase(): void {
  useEffect(() => {
    async function load(): Promise<void> {
      await Font.loadAsync(fonts);
    }

    load();
  }, []);
}
