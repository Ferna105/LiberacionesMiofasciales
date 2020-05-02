import * as React from 'react';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import { withTheme } from '@theme/themeProvider';

import SelectRoutines from './SelectRoutines';
import AddAccessory from './AddAccessory';
import AccessoryExercises from './AccessoryExercises';
import RoutineInformation from './RoutineInformation';
import StartRoutine from './StartRoutine';
import Congratulations from './Congratulations';

const Stack = createStackNavigator();


const CreateRoutine = ({theme}) => {
  
  return (
    <Stack.Navigator 
      initialRouteName="SelectRoutines"
      drawerStyle={{}}
      screenOptions={{
        title: "Completa tu Perfil",
        headerStyle: theme.Header.style,
        headerTintColor: theme.Header.tintColor,
        headerTitleStyle: theme.Header.titleStyle,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      headerMode="screen"
    >
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
    </Stack.Navigator>
  );
}

export default withTheme(CreateRoutine);