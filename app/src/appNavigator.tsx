import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  StackNavigatorConfig,
} from 'react-navigation';
import { ScheduleScreen } from './screens/scheduleScreen/scheduleScreen';
import { SpeakerScreen } from './screens/speakers/speakerScreen';
import { BottomNav } from './bottomNav';
import { FavoriteScreen } from './screens/favoriteScreen/favoriteScreen';
import { AboutScreen } from './screens/aboutScreen/aboutScreen';
// import { TalkDetailScreen } from './screens/speakers/talkDetailScreen';

const defaultTabOptions: StackNavigatorConfig = { headerMode: 'none' };

const ScheduleNavigator = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Speaker: SpeakerScreen,
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
    tabBarComponent: BottomNav,
  },
);

export const AppNavigatorContainer = createAppContainer(AppNavigator);
