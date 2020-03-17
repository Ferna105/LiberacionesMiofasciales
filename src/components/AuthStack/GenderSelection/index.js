import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { withTheme } from '@theme/themeProvider';
import { Ionicons } from '@expo/vector-icons';

const GenderSelection = ({ navigation, theme }) => {

  return (
    <View {...theme.Container}>
    	<View>
	  		<Text {...theme.TextHeader}>Seleccione su sexo</Text>
	  		<Text {...theme.Text}>El cuerpo de la mujer y el hombre tienen algunas diferencias anatómicas que van a influenciar en la rutina de elongación</Text>
  		</View>
    	<View style={{flexDirection: "row"}}>
	      <TouchableOpacity
	      	{...theme.TouchableOpacity}
	        onPress={() => navigation.navigate('StatusSelection',{gender: 'female'})}
	      >
	      	<Ionicons {...theme.TouchableOpacityIcon} name="ios-woman" />
	      	<Text {...theme.TouchableOpacityText}>Mujer</Text>
	      </TouchableOpacity>
	      <TouchableOpacity
	      	{...theme.TouchableOpacity}
	        onPress={() => navigation.navigate('StatusSelection',{gender: 'male'})}
	      >
	      	<Ionicons {...theme.TouchableOpacityIcon} name="ios-man" />
	      	<Text {...theme.TouchableOpacityText}>Hombre</Text>
	      </TouchableOpacity>
    	</View>
    </View>
  );
}

export default withTheme(GenderSelection);