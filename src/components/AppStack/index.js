import * as React from 'react';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';

import SelectRoutines from './CreateRoutine/SelectRoutines';
import AddAccessory from './CreateRoutine/AddAccessory';
import AccessoryExercises from './CreateRoutine/AccessoryExercises';
import RoutineInformation from './CreateRoutine/RoutineInformation';
import StartRoutine from './CreateRoutine/StartRoutine';
import Congratulations from './CreateRoutine/Congratulations';

import Explore from './Explore';
import Configuration from './Configuration';

import { withTheme } from '@theme/themeProvider';
import { AuthContext } from '@components/context';

const Stack = createStackNavigator();


const AppStack = ({theme}) => {
  
  const { getProfile } = React.useContext(AuthContext);
  const profile = getProfile();

  return (
    <Stack.Navigator 
      initialRouteName="HomeScreen"
      drawerStyle={theme.Stack.style}
      screenOptions={{
        headerStyle: theme.Header.style,
        headerTintColor: theme.Header.tintColor,
        headerTitleStyle: theme.Header.titleStyle,
        headerTransparent: true,
        ...TransitionPresets.SlideFromRightIOS,
        headerMode: "screen",
      }}
    >
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{
          title: 'Liberaciones Miofasciales',
        }}/>
      <Stack.Screen 
        name="SelectRoutines" 
        component={SelectRoutines} 
        options={{
          title: 'Seleccionar rutinas',
        }}/>
      <Stack.Screen 
        name="AddAccessory" 
        component={AddAccessory} 
        options={{
          title: 'Ejercicios accesorios',
        }}/>
      <Stack.Screen 
        name="AccessoryExercises" 
        component={AccessoryExercises} 
        options={{
          title: 'Ejercicios accesorios',
        }}/>
      <Stack.Screen 
        name="RoutineInformation" 
        component={RoutineInformation} 
        options={{
          title: 'Rutina armada',
        }}/>
      <Stack.Screen 
        name="StartRoutine" 
        component={StartRoutine} 
        options={{
          title: 'Elongación general',
        }}/>
      <Stack.Screen 
        name="Congratulations" 
        component={Congratulations} 
        options={{
          title: 'Felicitaciones',
        }}/>
      <Stack.Screen 
        name="Explore" 
        component={Explore} 
        options={{
          title: 'Explorar',
        }}/>
      <Stack.Screen 
        name="Configuration" 
        component={Configuration} 
        options={{
          title: 'Configuración',
        }}/>
    </Stack.Navigator>
  );
}

export default withTheme(AppStack);