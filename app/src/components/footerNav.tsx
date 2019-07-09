import React from 'react';
import { Button, Text, Footer, FooterTab, Icon } from 'native-base';

const routes = [
  {
    name: 'Schedule',
    icon: 'calendar',
  },
  {
    name: 'Favorite',
    icon: 'heart',
  },
  {
    name: 'About',
    icon: 'information-circle-outline',
  },
];

// TODO: use react-navigation
export const FooterNav: React.FC<{ navigation }> = ({ navigation }) => {
  const currentRoute = navigation.state.routes[navigation.state.index];

  return (
    <Footer>
      <FooterTab>
        {routes.map(route => {
          const active = route.name === currentRoute.routeName;
          return (
            <Button
              vertical
              active={active}
              onPress={() => {
                navigation.navigate(route.name);
              }}
            >
              <Icon active={active} name={route.icon} />
              <Text>{route.name}</Text>
            </Button>
          );
        })}
      </FooterTab>
    </Footer>
  );
};
