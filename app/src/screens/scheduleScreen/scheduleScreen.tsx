import React from 'react';
import styled from 'styled-components/native';
import { TabView, Tab, Layout, Button } from 'react-native-ui-kitten';
import { Text } from 'react-native';
import { Talks } from './talks';

const StyledScheduleScreen = styled.View`
  flex: 1 auto;
`;

const StyledTabContent = styled(Layout)`
  flex: 1 auto;
  height: 100%;
`;

export const ScheduleScreen: React.FC<{ navigation }> = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <StyledScheduleScreen>
      <TabView selectedIndex={selectedTab} onSelect={setSelectedTab}>
        <Tab title="TAB 1">
          <StyledTabContent>
            <Talks />
          </StyledTabContent>
        </Tab>
        <Tab title="TAB 2">
          <StyledTabContent>
            <Text>Swipe next</Text>
          </StyledTabContent>
        </Tab>
        <Tab title="TAB 3">
          <StyledTabContent>
            <Text>You are done</Text>
          </StyledTabContent>
        </Tab>
      </TabView>
    </StyledScheduleScreen>
  );
};
