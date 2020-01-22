import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../containers/Home';
import RecActivitiesList from '../containers/RecActivitiesList';

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  RecActivitiesList: {
    screen: RecActivitiesList,
    navigationOptions: ({navigation}) => ({
      title: 'Recreation Activities',
    }),
  },
});

export default createAppContainer(AppNavigator);
