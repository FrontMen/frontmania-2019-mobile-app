import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ScheduleScreen } from './screens/scheduleScreen/scheduleScreen';
import { SpeakerScreen } from './screens/speakers/speakerScreen';

const AppNavigator = createStackNavigator(
  {
    Home: ScheduleScreen,
    Speaker: SpeakerScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export const AppNavigatorContainer = createAppContainer(AppNavigator);
