import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import CreateRoutine from './CreateRoutine';
import Explore from './Explore';
import Configuration from './Configuration';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

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
      }}
      headerMode="null"
      drawerContentOptions={theme.Stack.contentOptions}
    >
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{
          title: 'Liberaciones Miofasciales',
        }}/>
      <Stack.Screen 
        name="CreateRoutine" 
        component={CreateRoutine} 
        options={{
          title: 'Crear rutina',
          drawerIcon: config => <MaterialCommunityIcons {...theme.TouchableOpacityIcon} name="run" size={17} />
        }}/>
      <Stack.Screen 
        name="Explore" 
        component={Explore} 
        options={{
          title: 'Explorar',
          drawerIcon: config => <FontAwesome {...theme.TouchableOpacityIcon} name="dribbble" size={20} />
        }}/>
      <Stack.Screen 
        name="Configuration" 
        component={Configuration} 
        options={{
          title: 'Configuración',
          drawerIcon: config => <FontAwesome {...theme.TouchableOpacityIcon} name="cog" size={20} />
        }}/>
    </Stack.Navigator>
  );
}

export default withTheme(AppStack);