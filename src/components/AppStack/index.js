import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './HomeScreen';
import GeneralElongationScreen from './GeneralElongationScreen';
import SportElongationScreen from './SportElongationScreen';
import ConfigurationScreen from './ConfigurationScreen';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { withTheme } from '../../core/themeProvider';

const Drawer = createDrawerNavigator();

const AppStack = ({theme}) => {
  return (
    <Drawer.Navigator 
      initialRouteName="HomeScreen"
      drawerStyle={{
        fontFamily: 'Raleway-Regular'
      }}
    >
      <Drawer.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{
          title: 'Home',
        }}/>
      <Drawer.Screen 
        name="GeneralElongationScreen" 
        component={GeneralElongationScreen} 
        options={{
          title: 'Elongación General',
          drawerIcon: config => <MaterialCommunityIcons name="run" size={17} />
        }}/>
      <Drawer.Screen 
        name="SportElongationScreen" 
        component={SportElongationScreen} 
        options={{
          title: 'Elongación por Deporte',
          drawerIcon: config => <FontAwesome name="dribbble" size={20} />
        }}/>
      <Drawer.Screen 
        name="ConfigurationScreen" 
        component={ConfigurationScreen} 
        options={{
          title: 'Configuración',
          drawerIcon: config => <FontAwesome name="cog" size={20} />
        }}/>
    </Drawer.Navigator>
  );
}

export default withTheme(AppStack);