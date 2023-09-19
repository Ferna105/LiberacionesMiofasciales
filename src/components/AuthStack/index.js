import * as React from 'react';
import { createStackNavigator,TransitionPresets} from '@react-navigation/stack';

import SportsSelection from './SportsSelection';
import StatusSelection from './StatusSelection';
import SuccessScreen from './SuccessScreen';

import { withTheme } from '@theme/themeProvider';

const Stack = createStackNavigator();

const AuthStack = ({theme}) => {

  return (
    <Stack.Navigator 
      screenOptions={{
        title: "Completa tu Perfil",
        headerStyle: theme.Header.style,
        headerTintColor: theme.Header.tintColor,
        headerTitleStyle: theme.Header.titleStyle,
        headerTransparent: true,
        ...TransitionPresets.SlideFromRightIOS,
        headerMode: "screen",
      }}
    >
      <Stack.Screen 
        name="StatusSelection" 
        component={StatusSelection}
      />
      <Stack.Screen 
        name="SportsSelection" 
        component={SportsSelection}
      />
      <Stack.Screen 
        name="SuccessScreen" 
        component={SuccessScreen}
      />
    </Stack.Navigator>
  );
}

export default withTheme(AuthStack);