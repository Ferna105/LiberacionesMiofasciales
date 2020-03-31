import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { withTheme } from '@theme/themeProvider';

import LevelSelection from './LevelSelection';
import RoutineInformation from './RoutineInformation';
import StartRoutine from '@components/AppStack/StartRoutine';

const Stack = createStackNavigator();


const GeneralElongation = ({theme}) => {
  
  return (
    <Stack.Navigator 
      initialRouteName="LevelSelection"
      headerMode="screen"
    >
      <Stack.Screen 
        name="LevelSelection" 
        component={LevelSelection} 
        options={{
          title: 'Elongación general',
        }}/>
      <Stack.Screen 
        name="RoutineInformation" 
        component={RoutineInformation} 
        options={{
          title: 'Elongación general',
        }}/>
      <Stack.Screen 
        name="StartRoutine" 
        component={StartRoutine} 
        options={{
          title: 'Elongación general',
        }}/>
    </Stack.Navigator>
  );
}

export default withTheme(GeneralElongation);