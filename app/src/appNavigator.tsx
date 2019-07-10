import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  NavigationParams,
  NavigationScreenProps,
  StackNavigatorConfig,
} from 'react-navigation';
import { FooterNav } from './components/footerNav';
import { AboutScreen } from './screens/aboutScreen';
import { FavoriteScreen } from './screens/favoriteScreen';
import { ScheduleScreen } from './screens/scheduleScreen';
import { SpeakerDetailScreen } from './screens/speakerDetailScreen';
import { TalkDetailScreen } from './screens/talkDetailScreen';

const defaultTabOptions: StackNavigatorConfig = { headerMode: 'none' };

const TopHeader: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const title = navigation.getParam('title');
  return (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right />
    </Header>
  );
};

const innerNavigationOptions: NavigationParams = { header: TopHeader };
const commonNavigators = {
  SpeakerDetail: createStackNavigator(
    { SpeakerDetail: SpeakerDetailScreen },
    { defaultNavigationOptions: innerNavigationOptions },
  ),
  TalkDetail: createStackNavigator(
    { TalkDetail: TalkDetailScreen },
    { defaultNavigationOptions: innerNavigationOptions },
  ),
};

const ScheduleNavigator = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    ...commonNavigators,
  },
  { ...defaultTabOptions },
);

const FavoriteNavigator = createStackNavigator(
  {
    Favorite: FavoriteScreen,
    ...commonNavigators,
  },
  { ...defaultTabOptions },
);

const AboutNavigator = createStackNavigator(
  {
    About: AboutScreen,
  },
  { ...defaultTabOptions },
);

const AppNavigator = createBottomTabNavigator(
  {
    Schedule: ScheduleNavigator,
    Favorite: FavoriteNavigator,
    About: AboutNavigator,
  },
  {
    initialRouteName: 'Schedule',
    tabBarComponent: FooterNav,
  },
);

export const AppNavigatorContainer = createAppContainer(AppNavigator);
