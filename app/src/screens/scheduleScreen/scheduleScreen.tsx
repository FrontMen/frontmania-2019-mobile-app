import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TabView, Tab, Layout } from 'react-native-ui-kitten';
import _ from 'lodash';
import { Talks } from './talks';
import { Talk } from '../../types';
import { useDataProvider } from '../../dataProvider';

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

export const ScheduleScreen: React.FC<{}> = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const data = useDataProvider();

  const talksByRoom = getTalksByRoom(data.talks);

  return (
    <StyledScheduleScreen>
      <TabView selectedIndex={selectedTab} onSelect={setSelectedTab}>
        {Object.keys(talksByRoom).map(room => (
          <Tab key={room} title={room}>
            <StyledTabContent>
              <Talks talks={talksByRoom[room]} />
            </StyledTabContent>
          </Tab>
        ))}
      </TabView>
    </StyledScheduleScreen>
  );
};
