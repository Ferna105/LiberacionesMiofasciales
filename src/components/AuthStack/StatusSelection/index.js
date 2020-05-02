import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { withTheme } from '@theme/themeProvider';
import { Ionicons } from '@expo/vector-icons';

const StatusSelection = ({ navigation, theme }) => {

	const handlePress = status => {
		status ? navigation.navigate('SportsSelection',{status}) : navigation.navigate('SuccessScreen',{status})
	}

  return (
  	<View {...theme.Container}>
    	<View>
	  		<Text {...theme.TextHeader}>¿Practica algún deporte?</Text>
	  		<Text {...theme.Text}>Se realizó una investigación de los acortamientos miofaciales de los diferentes deportes en los cuales están más enfocados en la rutina de elongación</Text>
  		</View>
    	<View style={{flexDirection: "row"}}>
	      <TouchableOpacity
	      	{...theme.TouchableOpacity}
	      	onPress={() => handlePress(true)}
	      >
	      	<Ionicons {...theme.TouchableOpacityIcon} name="md-checkmark" />
	      	<Text {...theme.TouchableOpacityText}>SI</Text>
	      </TouchableOpacity>
	      <TouchableOpacity
	      	{...theme.TouchableOpacity}
	      	onPress={() => handlePress(false)}
	      >
	      	<Ionicons {...theme.TouchableOpacityIcon} name="ios-close" />
	      	<Text {...theme.TouchableOpacityText}>NO</Text>
	      </TouchableOpacity>
    	</View>
    </View>
  );
}

export default withTheme(StatusSelection);