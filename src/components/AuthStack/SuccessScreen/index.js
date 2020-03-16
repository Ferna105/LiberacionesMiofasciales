import * as React from 'react';
import { Button, View, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { withTheme } from '@theme/themeProvider';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
];

const StatusSelection = ({ navigation, theme }) => {


  return (
    <View {...theme.Container}>
  		<Text {...theme.Text}>¡Perfil completado!</Text>
  		<FontAwesome name="check" size={20} />
    	<Button
      	{...theme.Button}
        onPress={() => navigation.navigate('AppStack')}
        title="Ir a la pantalla inicial"
      />
    </View>
  );
}

export default withTheme(StatusSelection);