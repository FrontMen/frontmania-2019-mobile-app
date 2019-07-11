import Constants from 'expo-constants';
import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import React from 'react';
import { Platform } from 'react-native';
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

const defaultTabOptions: StackNavigatorConfig = {
  /**
   * It's bad to force this on iOS but we don't have a choice right now
   * if we leave it to default options it will try to float the screen
   * and there will be a flicker because we are removing the header when it goes to the inner page
   */
  headerMode: 'screen',
  defaultNavigationOptions: {
    header: () => {
      return (
        <Header
          hasTabs
          style={{ height: Platform.select({ ios: 0.1, android: Constants.statusBarHeight }) }}
          noShadow
        />
      );
    },
  },
};

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
const innerScreenOptions = Platform.select({
  ios: {
    navigationOptions: {
      header: null,
    },
  },
  android: {},
});
const commonNavigators = {
  TalkDetail: {
    screen: createStackNavigator(
      {
        TalkDetail: TalkDetailScreen,
      },
      { defaultNavigationOptions: innerNavigationOptions },
    ),
    ...innerScreenOptions,
  },
  SpeakerDetail: {
    screen: createStackNavigator(
      { SpeakerDetail: SpeakerDetailScreen },
      { defaultNavigationOptions: innerNavigationOptions },
    ),
    ...innerScreenOptions,
  },
};

const ScheduleNavigator = createStackNavigator(
  {
    Schedule: {
      screen: ScheduleScreen,
    },
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

export const Router = createAppContainer(AppNavigator);
