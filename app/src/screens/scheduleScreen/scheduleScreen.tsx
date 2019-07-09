import _ from 'lodash';
import React, { useState } from 'react';
import { Layout, Tab, TabView } from 'react-native-ui-kitten';
import styled from 'styled-components/native';
import { TalkList } from '../../components/talkList';
import { useDataProvider } from '../../providers/dataProvider';
import { Talk } from '../../types';

const StyledScheduleScreen = styled.View`
  flex: 1 auto;
`;

const StyledTabContent = styled(Layout)`
  flex: 1 auto;
  height: 100%;
`;

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
    <StyledScheduleScreen>
      <TabView selectedIndex={selectedTab} onSelect={setSelectedTab}>
        {Object.keys(talksByRoom).map(room => (
          <Tab key={room} title={room}>
            <StyledTabContent>
              <TalkList talks={talksByRoom[room]} onPress={handleItemPress} />
            </StyledTabContent>
          </Tab>
        ))}
      </TabView>
    </StyledScheduleScreen>
  );
};
