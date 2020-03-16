import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { withTheme } from '@theme/themeProvider';

const GenderSelection = ({ navigation, theme }) => {

  return (
    <View {...theme.Container}>
  		<Text {...theme.Text}>Seleccione su sexo</Text>
    	<View style={{flexDirection: "row"}}>
	      <Button
	      	{...theme.Button}
	        onPress={() => navigation.navigate('StatusSelection',{gender: 'male'})}
	        title="Hombre"
	      />
	      <Button
	      	{...theme.Button}
	        onPress={() => navigation.navigate('StatusSelection',{gender: 'female'})}
	        title="Mujer"
	      />
    	</View>
    </View>
  );
}

export default withTheme(GenderSelection);