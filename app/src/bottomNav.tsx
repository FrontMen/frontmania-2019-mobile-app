import React from 'react';
import { BottomNavigation, BottomNavigationTab } from 'react-native-ui-kitten';
import styled from 'styled-components';

const StyledBottomNav = styled.View`
  height: 55px;
`;

export const BottomNav = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <StyledBottomNav>
      <BottomNavigation
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
      >
        <BottomNavigationTab title="Tab 1" />
        <BottomNavigationTab title="Tab 2" />
        <BottomNavigationTab title="Tab 3" />
      </BottomNavigation>
    </StyledBottomNav>
  );
};
