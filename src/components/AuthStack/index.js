import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GenderSelection from './GenderSelection';
import SportsSelection from './SportsSelection';
import StatusSelection from './StatusSelection';
import SuccessScreen from './SuccessScreen';

import { withTheme } from '../../core/themeProvider';

const Stack = createStackNavigator();

const AuthStack = props => {

  return (
    <Stack.Navigator 
      drawerStyle={{}}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen 
        name="GenderSelection" 
        component={GenderSelection}
      />
      <Stack.Screen 
        name="SportsSelection" 
        component={SportsSelection}
      />
      <Stack.Screen 
        name="StatusSelection" 
        component={StatusSelection}
      />
      <Stack.Screen 
        name="SuccessScreen" 
        component={SuccessScreen}
      />
    </Stack.Navigator>
  );
}

export default withTheme(AuthStack);