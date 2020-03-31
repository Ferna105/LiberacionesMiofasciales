import React from 'react';
import {
	Text,
	View
} from 'react-native';
import { withTheme } from '@theme/themeProvider';

class StartRoutine extends React.Component {

	render() {
		<View {...theme.Container}>
	    	<View>
		  		<Text {...theme.TextHeader}>Seleccione su sexo</Text>
		  		<Text {...theme.Text}>El cuerpo de la mujer y el hombre tienen algunas diferencias anatómicas que van a influenciar en la rutina de elongación</Text>
	  		</View>
	    	<View style={{flexDirection: "row"}}>
		      <TouchableOpacity
		      	{...theme.TouchableOpacity}
		        onPress={() => this.props.navigation.navigate('StatusSelection',{gender: 'female'})}
		      >
		      	<Ionicons {...theme.TouchableOpacityIcon} name="ios-woman" />
		      	<Text {...theme.TouchableOpacityText}>Mujer</Text>
		      </TouchableOpacity>
		      <TouchableOpacity
		      	{...theme.TouchableOpacity}
		        onPress={() => this.props.navigation.navigate('StatusSelection',{gender: 'male'})}
		      >
		      	<Ionicons {...theme.TouchableOpacityIcon} name="ios-man" />
		      	<Text {...theme.TouchableOpacityText}>Hombre</Text>
		      </TouchableOpacity>
	    	</View>
	    </View>
	}
}

export default withTheme(StartRoutine);