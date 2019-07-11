import _ from 'lodash';
import React, { useState } from 'react';
import { Tabs, Tab, Container } from 'native-base';
import { TalkList } from '../components/talkList';
import { useDataProvider } from '../providers/dataProvider';
import { Talk } from '../types';

// TODO: check if we use lodash in other places, if not just remove it and refactor here
const getTalksByRoom = (talks: Talk[]): { [key: string]: Talk[] } => {
  return _.chain(talks)
    .groupBy(t => t.room.name)
    .value();
};

export const ScheduleScreen: React.FC<{ navigation }> = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const data = useDataProvider();

  const talksByRoom = getTalksByRoom(data.talks);

  function handleItemPress(talk: Talk): void {
    navigation.navigate('TalkDetail', { talkId: talk.id, title: talk.title });
  }

  return (
    <Container>
      <Tabs page={selectedTab} onChangeTab={setSelectedTab}>
        {Object.keys(talksByRoom).map(room => (
          <Tab key={room} heading={room}>
            <Container>
              <TalkList talks={talksByRoom[room]} onPress={handleItemPress} />
            </Container>
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
};
