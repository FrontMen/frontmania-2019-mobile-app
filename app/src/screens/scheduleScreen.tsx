import React from 'react';
import styled from 'styled-components/native';
import { TabView, Tab, Layout } from 'react-native-ui-kitten';
import { Text } from 'react-native';

const StyledScheduleScreen = styled.View`
  flex: 1 auto;
`;

const StyledTabContent = styled(Layout)`
  flex: 1 auto;
  height: 100%;
`;

export const ScheduleScreen = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <StyledScheduleScreen>
      <TabView selectedIndex={selectedTab} onSelect={setSelectedTab}>
        <Tab title="TAB 1">
          <StyledTabContent>
            <Text>Swipe next</Text>
          </StyledTabContent>
        </Tab>
        <Tab title="TAB 2">
          <StyledTabContent>
            <Text>Swipe next</Text>
          </StyledTabContent>
        </Tab>
        <Tab title="TAB 3">
          <StyledTabContent>
            <Text>You're done</Text>
          </StyledTabContent>
        </Tab>
      </TabView>
    </StyledScheduleScreen>
  );
};
