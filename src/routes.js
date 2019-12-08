import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: 'false',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#111',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
