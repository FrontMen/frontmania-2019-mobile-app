import { useMemo } from 'react';
import { AsyncStorage } from 'react-native';

export interface AsyncStorageInterface<T> {
  name: string;
  getData: () => Promise<T>;
  setData: (item: T) => Promise<void>;
}

export function useAsyncStorage<T>(name: string, defaultValue: any = {}): AsyncStorageInterface<T> {
  return useMemo(() => {
    const getData = async (): Promise<T> => {
      try {
        const json = await AsyncStorage.getItem(name);
        const data = JSON.parse(json);
        return data || defaultValue;
      } catch (err) {
        return defaultValue;
      }
    };

    const setData = async (item: T = defaultValue): Promise<void> => {
      const json = JSON.stringify(item);
      await AsyncStorage.setItem(name, json);
    };

    return { name, getData, setData };
  }, [name]);
}
