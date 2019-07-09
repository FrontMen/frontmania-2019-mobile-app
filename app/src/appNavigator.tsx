import React from 'react';
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  StackNavigatorConfig,
  NavigationScreenProps,
  NavigationParams,
} from 'react-navigation';
import { TopNavigation } from 'react-native-ui-kitten';
import { ScheduleScreen } from './screens/scheduleScreen';
import { SpeakerDetailScreen } from './screens/speakerDetailScreen';
import { FooterNav } from './components/footerNav';
import { FavoriteScreen } from './screens/favoriteScreen';
import { AboutScreen } from './screens/aboutScreen';
import { TalkDetailScreen } from './screens/talkDetailScreen';

const defaultTabOptions: StackNavigatorConfig = { headerMode: 'none' };

const TopHeader: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const title = navigation.getParam('title');

  return <TopNavigation alignment="center" title={title} backIcon />;
};

const innerNavigationOptions: NavigationParams = { header: TopHeader };

const ScheduleNavigator = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Speaker: SpeakerDetailScreen,
    TalkDetail: createStackNavigator(
      { TalkDetail: TalkDetailScreen },
      { defaultNavigationOptions: innerNavigationOptions },
    ),
  },
  { ...defaultTabOptions },
);

const FavoriteNavigator = createStackNavigator(
  {
    Favorite: FavoriteScreen,
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
