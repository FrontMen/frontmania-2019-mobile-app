import React, { useContext, useMemo, useCallback } from 'react';
import { Notifications } from 'expo';
import { useAsyncStorage } from '../hooks/useAsyncStorage';
import { ToggleItemMethod, useToggleList } from '../hooks/useToggleList';
import { useDataProvider } from './dataProvider';

// 5 minutes
const NOTIFICATION_TIME_BEFORE_TALK = 1000 * 60 * 1;

interface FavoriteTalks {
  items: string[];
  toggle: ToggleItemMethod;
}

const FavoriteTalksContext = React.createContext<FavoriteTalks>(null);

export function useFavoriteTalks(): FavoriteTalks {
  return useContext(FavoriteTalksContext);
}

export const FavoriteTalksProvider: React.FC<{}> = ({ children }) => {
  const { ready, items, toggle: toggleItem } = useToggleList('favoriteTalks');
  const data = useDataProvider();
  const notificationStorage = useAsyncStorage('favoriteTalksNotification', {});
  const toggle = useCallback(
    async (id: string): Promise<void> => {
      const notificationByTalkId = await notificationStorage.getData();
      const talk = data.talksById[id];

      // first toggle the item so that UI can start drawing
      toggleItem(id);

      /**
       * TODO: instead of handling this on talk basis
       * just manage all favorite talks' notifications at once and update them often
       */
      if (items.includes(id)) {
        // we are removing this item from favorites
        if (notificationByTalkId[id]) {
          await Notifications.cancelScheduledNotificationAsync(notificationByTalkId[id]);
        }
      } else {
        // we are adding it to the favorites
        const notificationId = await Notifications.scheduleLocalNotificationAsync(
          {
            title: 'Your talk is starting in 5 minutes',
            body: `The talk ${talk.title} is starting in 5 minutes in ${talk.room.name}`,
          },
          {
            time: new Date(new Date(talk.startsAt).getTime() - NOTIFICATION_TIME_BEFORE_TALK),
          },
        );

        await notificationStorage.setData({
          ...notificationByTalkId,
          [id]: notificationId,
        });
      }
    },
    [items],
  );

  const context = useMemo(() => ({ items, toggle }), [items, toggle]);

  return (
    ready && (
      <FavoriteTalksContext.Provider value={context}>{children}</FavoriteTalksContext.Provider>
    )
  );
};
