import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './HomeScreen';
import GeneralElongationScreen from './GeneralElongationScreen';
import SportElongationScreen from './SportElongationScreen';
import ConfigurationScreen from './ConfigurationScreen';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { withTheme } from '@theme/themeProvider';
import { AuthContext } from '@components/context';

const Drawer = createDrawerNavigator();


const AppStack = ({theme}) => {
  
  const { getProfile } = React.useContext(AuthContext);
  const profile = getProfile();

  return (
    <Drawer.Navigator 
      initialRouteName="HomeScreen"
      drawerStyle={theme.Drawer.style}
      screenOptions={{
        headerStyle: theme.Header.style,
        headerTintColor: theme.Header.tintColor,
        headerTitleStyle: theme.Header.titleStyle,
      }}
      headerMode="screen"
      drawerContentOptions={theme.Drawer.contentOptions}
    >
      <Drawer.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{
          title: 'Liberaciones Miofasciales',
        }}/>
      <Drawer.Screen 
        name="GeneralElongationScreen" 
        component={GeneralElongationScreen} 
        options={{
          title: 'Elongación General',
          drawerIcon: config => <MaterialCommunityIcons {...theme.TouchableOpacityIcon} name="run" size={17} />
        }}/>
      <Drawer.Screen 
        name="SportElongationScreen" 
        component={SportElongationScreen} 
        options={{
          title: 'Elongación por Deporte',
          drawerIcon: config => <FontAwesome {...theme.TouchableOpacityIcon} name="dribbble" size={20} />
        }}/>
      <Drawer.Screen 
        name="ConfigurationScreen" 
        component={ConfigurationScreen} 
        options={{
          title: 'Configuración',
          drawerIcon: config => <FontAwesome {...theme.TouchableOpacityIcon} name="cog" size={20} />
        }}/>
    </Drawer.Navigator>
  );
}

export default withTheme(AppStack);