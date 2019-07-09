import { useState, useEffect, useMemo } from 'react';
import { AsyncStorage } from 'react-native';

export type ToggleItemMethod = (item: string) => void;

export interface ToggleList {
  ready: boolean;
  items: string[];
  toggle: ToggleItemMethod;
}

export function useToggleList(name: string): ToggleList {
  const [ready, setReady] = useState(false);
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    async function load(): Promise<void> {
      const itemsJson = await AsyncStorage.getItem(name);
      const loadedItems = JSON.parse(itemsJson);
      setItems(loadedItems || []);
      setReady(true);
    }

    load();
  }, [setReady, setItems]);

  function toggle(item: string): void {
    setItems(currentItems => {
      const itemSet = new Set(currentItems);
      if (itemSet.has(item)) {
        itemSet.delete(item);
      } else {
        itemSet.add(item);
      }

      const nextItems = [...itemSet] as string[];
      AsyncStorage.setItem(name, JSON.stringify(nextItems));

      return nextItems;
    });
  }

  return useMemo(() => ({ ready, items, toggle }), [ready, items, toggle]);
}
