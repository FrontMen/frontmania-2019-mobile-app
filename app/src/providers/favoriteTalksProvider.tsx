import React, { useContext, useMemo } from 'react';
import { ToggleItemMethod, useToggleList } from '../hooks/useToggleList';

interface FavoriteTalks {
  items: string[];
  toggle: ToggleItemMethod;
}

const FavoriteTalksContext = React.createContext<FavoriteTalks>(null);

export function useFavoriteTalks(): FavoriteTalks {
  return useContext(FavoriteTalksContext);
}

export const FavoriteTalksProvider: React.FC<{}> = ({ children }) => {
  const { ready, items, toggle } = useToggleList('favoriteTalks');
  const context = useMemo(() => ({ items, toggle }), [items, toggle]);

  return (
    ready && (
      <FavoriteTalksContext.Provider value={context}>{children}</FavoriteTalksContext.Provider>
    )
  );
};
