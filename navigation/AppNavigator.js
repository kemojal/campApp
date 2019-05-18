import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import ScreensNavigator from './ScreensNavigator';

export default createAppContainer(createSwitchNavigator({
  // use React Navigation 
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: ScreensNavigator,
}));