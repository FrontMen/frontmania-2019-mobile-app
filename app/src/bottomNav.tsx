import React from 'react';
import { BottomNavigation, BottomNavigationTab } from 'react-native-ui-kitten';
import styled from 'styled-components/native';

const StyledBottomNav = styled.View`
  height: 55px;
`;

// TODO: use react-navigation
export const BottomNav: React.FC<{}> = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <StyledBottomNav>
      <BottomNavigation selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
        <BottomNavigationTab title="Schedule" />
        <BottomNavigationTab title="Favorites" />
        <BottomNavigationTab title="About" />
      </BottomNavigation>
    </StyledBottomNav>
  );
};
