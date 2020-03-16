import * as React from 'react';
import { Button, View, Text} from 'react-native';

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
  		<Text {...theme.Text}>Seleccione el/los deporte/s que practica</Text>
    	<View>
    		<Text>Deporte</Text>
    		<Text>Deporte</Text>
    		<Text>Deporte</Text>
    		<Text>Deporte</Text>
    		<Text>Deporte</Text>
    	</View>
    	<Button
      	{...theme.Button}
        onPress={() => navigation.navigate('SuccessScreen',{sports: []})}
        title="Siguiente"
      />
    </View>
  );
}

export default withTheme(StatusSelection);