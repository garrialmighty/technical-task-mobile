import { createStackNavigator, createAppContainer } from 'react-navigation';
import OffPisteScreen from '../containers/OffPisteScreen';
import PisteMapView from '../containers/OffPisteMapScreen';

const AppNavigator = createStackNavigator(
  {
    Home: OffPisteScreen,
    Map: PisteMapView
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);
