import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { withTheme } from '@theme/themeProvider';
import { Ionicons } from '@expo/vector-icons';

import BackgroundContainer3 from '@components/BackgroundContainer3';

const StatusSelection = ({ navigation, theme }) => {

	const handlePress = status => {
		status ? navigation.navigate('SportsSelection',{status}) : navigation.navigate('SuccessScreen',{status})
	}

  return (
  	<BackgroundContainer3>
	  	<View {...theme.Container}>
	    	<View>
		  		<Text style={{textAlign: 'center',color: "#e5dfdf",fontFamily: 'Raleway-Bold',fontSize: 17, marginBottom: 10}}>¿Practica algún deporte?</Text>
		  		<Text style={{textAlign: 'center',color: "#e5dfdf",fontFamily: 'Raleway-Regular', fontSize: 17, marginBottom: 10}}>
		  			Cada deporte tiene diferentes rutinas de elongación que están adaptadas a las necesidades del deportista.
		  		</Text>
	  		</View>
	    	<View style={{flexDirection: "row"}}>
		      <TouchableOpacity
		      	style={{flex: 1, elevation: 5,backgroundColor: "rgb(65,189,252)",padding: 10,borderRadius:5,alignItems: "center",margin: 10, marginLeft: 0}}
      			activeOpacity={.5}
		      	onPress={() => handlePress(true)}
		      >
		      	<Ionicons {...theme.TouchableOpacityIcon} name="md-checkmark" />
		      	<Text {...theme.TouchableOpacityText}>SI</Text>
		      </TouchableOpacity>
		      <TouchableOpacity
		      	style={{flex: 1, elevation: 5,backgroundColor: "rgb(65,189,252)",padding: 10,borderRadius:5,alignItems: "center",margin: 10, marginRight: 0}}
      			activeOpacity={.5}
		      	onPress={() => handlePress(false)}
		      >
		      	<Ionicons {...theme.TouchableOpacityIcon} name="ios-close" />
		      	<Text {...theme.TouchableOpacityText}>NO</Text>
		      </TouchableOpacity>
	    	</View>
	    </View>
	</BackgroundContainer3>
  );
}

export default withTheme(StatusSelection);