import React from 'react';
import { BottomNavigation, BottomNavigationTab } from 'react-native-ui-kitten';
import styled from 'styled-components/native';

const StyledBottomNav = styled.View`
  height: 55px;
`;

const navigationKey = 'BottomNav';

// TODO: use react-navigation
export const BottomNav: React.FC<{ navigation }> = ({ navigation }) => {
  function handleTabSelect(index: number): void {
    const { [index]: selectedRoute } = navigation.state.routes;

    navigation.navigate({
      key: navigationKey,
      routeName: selectedRoute.routeName,
    });
  }

  return (
    <StyledBottomNav>
      <BottomNavigation selectedIndex={navigation.state.index} onSelect={handleTabSelect}>
        <BottomNavigationTab title="Schedule" />
        <BottomNavigationTab title="Favorites" />
        <BottomNavigationTab title="About" />
      </BottomNavigation>
    </StyledBottomNav>
  );
};
