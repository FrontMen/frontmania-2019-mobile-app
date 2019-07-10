// TODO: sadly we can't move this into src folder

/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable global-require */
import { useEffect } from 'react';
import { loadAsync } from 'expo-font';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const fonts = {
  Roboto: require('native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  ...Ionicons.font,
  // ...FontAwesome5.font,
};

export function useNativeBase(): void {
  useEffect(() => {
    async function load(): Promise<void> {
      await loadAsync(fonts);
    }

    load();
  }, []);
}
