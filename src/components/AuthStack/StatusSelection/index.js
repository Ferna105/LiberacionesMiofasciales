import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { withTheme } from '@theme/themeProvider';

const StatusSelection = ({ navigation, theme }) => {

  return (
    <View {...theme.Container}>
  		<Text {...theme.Text}>¿Practica algún deporte?</Text>
    	<View style={{flexDirection: "row"}}>
	      <Button
	      	{...theme.Button}
	        onPress={() => navigation.navigate('SportsSelection',{status: 'yes'})}
	        title="SI"
	      />
	      <Button
	      	{...theme.Button}
	        onPress={() => navigation.navigate('SportsSelection',{status: 'no'})}
	        title="NO"
	      />
    	</View>
    </View>
  );
}

export default withTheme(StatusSelection);